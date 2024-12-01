import 'react-native-gesture-handler';

import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from '../Screens/Profile'
import Stack from '../components/Stack'


import { Ionicons } from '@expo/vector-icons' 

function Drawer () {
    const Drawer = createDrawerNavigator()

    return(
        <Drawer.Navigator id='Drawer' >
            <Drawer.Screen name="Stack" component={ Stack } options={{ headerShown: false }}/>
            <Drawer.Screen name="Profile" component={ Profile } 
                options={ ({ navigation }) => ({
                    headerLeft: () => {
                        return( 
                            <Ionicons name='list-outline' size={ 30 } style={{ paddingLeft: 10}}
                                onPress={() => {
                                    navigation.openDrawer() //this a comment nut updated                         
                                }}
                            />
                        )
                    }
                })}
            />
        </Drawer.Navigator>
    )
}

export default Drawer