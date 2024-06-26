import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Order from '../Screens/Order' 
import Home from '../Screens/Home'

import Drawer from './Drawer'
import { Ionicons } from '@expo/vector-icons'

import Random from '../Screens/random'

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
            <Stack.Screen name="Order" component={ Order } />
        </Stack.Navigator>
    )
}

export default StackNav

// new comment