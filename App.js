import React, {useState} from 'react';
import {
    Text,  
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const App = () => {
    
    const [number, setNumber] = useState(0)

    function handleNumber(){
        const new_number = number + 1

        setNumber(new_number)
    }
    
    return(
        <SafeAreaView style={style.container}>
                <Text style={style.number}>{number}</Text>
                <TouchableOpacity 
                    style={style.button}
                    onPress={handleNumber}    
                >
                        <Text style={style.textButton}>Adicionar número</Text>
                </TouchableOpacity>

                <StatusBar/>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#AAA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FF0000',
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 18,
    },

})

export default App;