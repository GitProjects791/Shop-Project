import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../Screens/Login' 
import Home from '../Screens/Home'

import { Ionicons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();

function StackNav ({ navigation }) {
    return(
        <Stack.Navigator id="Stack" detachInactiveScreens={ false } >
            <Stack.Screen name="Home" component={ Home } 
                options = {{
                    headerLeft: () => {
                        return <Ionicons name="list-outline" size={ 30 } onPress={ () => {
                            navigation.openDrawer();
                        }} />
                    }
                }}
            />
            <Stack.Screen name="logIn" component={ Login } />
        </Stack.Navigator>
    )
}

export default StackNav

// new comment