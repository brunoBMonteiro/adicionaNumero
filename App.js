import React from 'react';
import {
    Text,  
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const App = () => {
    return(
        <SafeAreaView style={style.container}>
                <Text style={style.number}>0</Text>
                <TouchableOpacity style={style.button}>
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