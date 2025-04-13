import {  useState, useEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { TextInput } from 'react-native-paper'

import { Account } from '../Data'
import { useHeaderHeight } from '@react-navigation/elements'


const winDimensions = Dimensions.get('screen')

console.log(Dimensions.get('window').height)

function Login ({ route, navigation }) {
    
    const Data = Account[route.params.purpose]

    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <KeyboardAvoidingView onLayout={ (event)=> {console.log(event.nativeEvent.layout.y)}} behavior='height' style={ styles.container } >
               
                <View  style={ [{ marginTop: (winDimensions.height - useHeaderHeight())/9  }, styles.tContainer]}>
                    <ScrollView  contentContainerStyle={{ flex: 1, justifyContent: 'space-around', height: 10000}}>
                        {
                            Data.map((value) => {
                                return(
                                    <TextInput key={value.label} mode='outlined' placeholder={ value.placeholder } style={ styles.tInput }  label={ value.label }  left={ <TextInput.Icon icon={ () => <Ionicons name={ value.icon } size={ 30 } /> } /> } />
                                ) 
                            })
                        }
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>           

    ) 

    
}

export default Login

const styles = StyleSheet.create({
    container: { 
        borderColor: 'black',
        borderWidth:3,
        flex:1,
    },

    tContainer: {
        // justifyContent: 'space-between',
        flex:1,
        borderWidth:3,
        borderColor: 'red',
        alignItems: 'center'
    },  

    tInput: {
       
        
        width: winDimensions.width* 3/4,
        // height: 70
        // marginTop: 300
    },
})