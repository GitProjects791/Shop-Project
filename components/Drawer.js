import 'react-native-gesture-handler';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';

import Profile from '../Screens/Profile'
import Stack from '../components/Stack'

import { Ionicons } from '@expo/vector-icons' 

function Drawer () {
    const DrawerNav = createDrawerNavigator()

    return(
        <DrawerNav.Navigator id='Drawer' >
            <DrawerNav.Screen name="Stack" component={ Stack } options={{ headerShown: false }}/>
            <DrawerNav.Screen name="Profile" component={ Profile } 
                options={ ({ navigation }) => ({
                    headerLeft: () => {
                        return( 
                            <Ionicons name='list-outline' size={ 30 } style={{ paddingLeft: 10}}
                                onPress={() => {
                                    navigation.openDrawer() //this a comment                           
                                }}
                            />
                        )
                    }
                })}
            />
        </DrawerNav.Navigator>
    )
}

export default Drawer