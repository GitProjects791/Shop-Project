import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Home from '../Screens/Home';
import BarberShop from '../Screens/BarberShop';
import GroceryStore from '../Screens/GroceryStore';
import Pharmacy from '../Screens/Pharmacy';
import Cart from '../Screens/Cart';
import BookingConfirmation from '../Screens/BookingConfirmation';
import OrderConfirmation from '../Screens/OrderConfirmation';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTintColor: '#2D3436',
                    headerTitleStyle: {
                        fontWeight: '600',
                        fontSize: 18,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 15,
                    },
                    headerRightContainerStyle: {
                        paddingRight: 15,
                    },
                    headerLeft: ({ canGoBack }) => canGoBack ? (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ padding: 5 }}
                        >
                            <MaterialIcons name="arrow-back" size={24} color="#2D3436" />
                        </TouchableOpacity>
                    ) : null,
                })}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BarberShop"
                    component={BarberShop}
                    options={{
                        title: 'City Barber Shop',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <MaterialIcons name="shopping-cart" size={24} color="#2D3436" />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen
                    name="GroceryStore"
                    component={GroceryStore}
                    options={{
                        title: 'Fresh Grocery',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <MaterialIcons name="shopping-cart" size={24} color="#2D3436" />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen
                    name="Pharmacy"
                    component={Pharmacy}
                    options={{
                        title: 'LifeCare Pharmacy',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <MaterialIcons name="shopping-cart" size={24} color="#2D3436" />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ title: 'My Cart' }}
                />
                <Stack.Screen
                    name="BookingConfirmation"
                    component={BookingConfirmation}
                    options={{
                        title: 'Confirmation',
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="OrderConfirmation"
                    component={OrderConfirmation}
                    options={{
                        title: 'Confirmation',
                        headerLeft: null,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator; 