import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { VictoryPie } from 'victory-native';
import data from '../assets/src/data.json'
import { Picker } from '@react-native-picker/picker';

const selectId = (id) => {
    return data.find(item => item._id === id)
}

const StatsScreen = () => {
    /*const result = (data) => data.user
    console.log(result)
    const contextValue = useContext(GlobalContext)
    const [user, setUser] = useState(contextValue.user);
    const [userData, setUserData] = useState(data[contextValue.index])*/

    const [id, setId] = React.useState(data[0]._id)
    const [user, setUser] = React.useState(data[0].user)
    const [incomes, setIncomes] = React.useState(data[0].incomes)
    const [expenses, setExpenses] = React.useState(data[0].expenses)
    const [date, setDate] = React.useState(data[0].date)
    const [amount, setAmount] = React.useState(data[0].amount)
    const [category, setCategory] = React.useState(data[0].category)
    const [comments, setComments] = React.useState(data[0].comments)
    const [_id_income, set_id_income] = React.useState(data[0]._id_income)


    return (
        <View style={styles.container}>

            <View style={styles.containerSolde}>
                <Text style={styles.txtSolde}>Statistiques de :</Text>
                <View style={styles.dropDownStyle}>
                    <Picker
                        selectedValue={id}
                        onValueChange={(itemValue, itemIndex) => {
                            setId(itemValue)
                            setUser(selectId(itemValue).user)
                            setIncomes(selectId(itemValue).incomes)
                            setExpenses(selectId(itemValue).expenses)
                            setDate(selectId(itemValue).date)
                            setAmount(selectId(itemValue).amount)
                            setCategory(selectId(itemValue).category)
                            setComments(selectId(itemValue).comments)
                            set_id_income(selectId(itemValue)._id_income)
                        }}>
                        {data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
                    </Picker>
                </View>
            </View>

            <View style={styles.boxPie}>
                <ScrollView>
                    <Text style={styles.txtSolde}>Dépenses</Text>
                    <VictoryPie  
                        colorScale={["#d62828", "orange", "#2B6747", "#bb3e03", "navy", "#2B6747", "gold", "#222222", "#d62828", "#bb3e03"]}
                        labelPosition={({ index }) => index
                          ? "centroid"
                          : "startAngle"
                        }

                        startAngle={65}
                        endAngle={450}
                      labelRadius={({ innerRadius }) => innerRadius + 55 }
                        style={{ labels: { fontSize: 15, fontWeight: 'bold', fill: 'white' } }} x={(data) =>  data.category + '\n' + data.amount} y={(data) => data.amount} data={expenses} />

                    <Text style={styles.txtSolde}>Revenus</Text>
                    <VictoryPie
                        colorScale={["#d62828", "orange", "#2B6747", "#bb3e03", "navy", "#2B6747", "gold", "#222222", "#d62828", "#bb3e03"]}
                        labelPosition={({ index }) => index
                        ? "centroid"
                        : "startAngle"
                      }
                      startAngle={55}
                      endAngle={450}
                    labelRadius={({ innerRadius }) => innerRadius + 55 }
                        style={{ labels: {fontSize: 15, fontWeight: 'bold', fill: 'white' } }} x={(data) => data.category + '\n' + data.amount} y={(data) => data.amount} data={incomes} />
                </ScrollView>
            </View>

        </View>
    )

}

export default StatsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 8,
    },
    boxPie: {
        flex: 2.00,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },
    dropDownStyle: {
        marginTop: 5,
        width: '50%',
        borderColor: '#838383',
        paddingHorizontal: 5,
        backgroundColor: '#adabab',
        borderRadius: 10,
        color: '#838383',
        height: 35,
        textAlign: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5
    },
});