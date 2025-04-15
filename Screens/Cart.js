import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useCart } from '../context/CartContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Cart({ navigation }) {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (parseFloat(item.price) * item.quantity);
        }, 0).toFixed(2);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            Alert.alert('Cart Empty', 'Please add items to cart before checkout');
            return;
        }

        Alert.alert(
            'Confirm Order',
            `Total amount: $${calculateTotal()}`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        clearCart();
                        navigation.navigate('OrderConfirmation');
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.itemsList}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                        </View>

                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (item.quantity > 1) {
                                        updateQuantity(item.id, item.quantity - 1);
                                    }
                                }}
                            >
                                <MaterialIcons name="remove" size={24} color="#007AFF" />
                            </TouchableOpacity>

                            <Text style={styles.quantity}>{item.quantity}</Text>

                            <TouchableOpacity
                                onPress={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                <MaterialIcons name="add" size={24} color="#007AFF" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => removeFromCart(item.id)}
                            style={styles.removeButton}
                        >
                            <MaterialIcons name="delete" size={24} color="#FF3B30" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={handleCheckout}
                >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    itemsList: {
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 10,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    itemPrice: {
        color: '#666',
        marginTop: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    removeButton: {
        padding: 5,
    },
    totalContainer: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 20,
        marginTop: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    checkoutButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Cart; 