import { StyleSheet, View, Dimensions, Platform, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'

import { TextInput } from 'react-native-paper'

import { Account } from '../Data'
import { useHeaderHeight } from '@react-navigation/elements'

import background from '../assets/background.png'

const winDimensions = Dimensions.get('screen')

console.log(Dimensions.get('window').height)

function Login ({ route, navigation }) {
    
    const Data = Account[route.params.purpose]

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
            <View style={styles.container}>
                
                <View style={{ flex: 1/9}}>
                    <Text style={styles.signUpText}>
                        {route.params.purpose === 'signIn' ? 'Sign In' : 'Sign Up'}
                    </Text>
                </View>
                 
                
                <KeyboardAwareScrollView 
                    style={{ flex:2/3}}
                    contentContainerStyle={styles.tContainer} 
                    extraScrollHeight={Platform.OS === 'ios' ? 0 : 0}
                    enableOnAndroid={true}
                >
                
                    {
                        Data.map((value, index) => {
                            return (
                                <TextInput 
                                    key={value.label} 
                                    mode='outlined' 
                                    placeholder={value.placeholder} 
                                    style={[styles.tInput, index === 0 && { marginTop: 50 }]} 
                                    label={value.label}  
                                    left={<TextInput.Icon icon={() => <Ionicons name={value.icon} size={30} />} />} 
                                />
                            ) 
                        })
                    }

                    <TouchableOpacity style={styles.sUbutton.button} >
                        <Text style={styles.sUbutton.buttonText}>
                            {route.params.purpose === 'signIn' ? 'Sign In' : 'Sign Up'}
                        </Text>
                    </TouchableOpacity>
                    
                    <View style={styles.link.linkContainer}>
                        <Text style={styles.link.linkText} onPress={() => {
                            navigation.navigate('Account', { purpose: route.params.purpose === 'signIn' ? 'signUp' : 'signIn' })
                        }}>
                            {route.params.purpose === 'signUp' ? 'Already have an account?' : 'Don\'t have an account?' }    
                        </Text>
                    </View>

                </KeyboardAwareScrollView>
                
            </View>
        </TouchableWithoutFeedback>
    ) 
}

export default Login

const styles = StyleSheet.create({
    signUpText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 20,
        textAlign: 'center',
    },

    tContainer: { 
        // borderColor: 'black',
        // borderWidth:3,
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    container: {
        flex:1,
        // borderWidth:3,
        // borderColor: 'red',
    },  

    tInput: {
        width: winDimensions.width * 3 / 4,
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
    },
    
    sUbutton: {
        
        button: {
            backgroundColor: '#673AB7', // Green background
            paddingVertical: 10, // Vertical padding for height
            paddingHorizontal: 20, // Horizontal padding for width
            borderRadius: 8, // Rounded corners
            alignItems: 'center', // Center text horizontally
            justifyContent: 'center', // Center text vertically
            marginTop: 20, // Space above the button
        },
    
        buttonText: {
            color: '#fff', // White text color
            fontSize: 18, // Slightly larger font size
            fontWeight: 'bold', // Bold text
        },
    },
    
    link: {
        linkContainer: {
            alignItems: 'center', // Center the link horizontally
            justifyContent: 'center', // Center the link vertically
            flex:1/5
        },
        linkText: {
            color: '#1E90FF', // Dodger blue for link appearance
            fontSize: 16, // Slightly smaller font size
            textDecorationLine: 'underline', // Underline to mimic a link
            textAlign: 'center',
        }
    },
    
})