import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';

const categories = [
    {
        id: '1',
        name: 'Fruits & Vegetables',
        items: [
            { id: '1', name: 'Apple', price: '2.99/lb' },
            { id: '2', name: 'Banana', price: '1.99/lb' },
            { id: '3', name: 'Tomatoes', price: '3.99/lb' },
        ]
    },
    {
        id: '2',
        name: 'Dairy & Eggs',
        items: [
            { id: '4', name: 'Milk', price: '3.99' },
            { id: '5', name: 'Eggs', price: '4.99' },
            { id: '6', name: 'Cheese', price: '5.99' },
        ]
    },
    {
        id: '3',
        name: 'Bread & Bakery',
        items: [
            { id: '7', name: 'White Bread', price: '2.99' },
            { id: '8', name: 'Croissant', price: '1.99' },
            { id: '9', name: 'Muffins', price: '4.99' },
        ]
    },
];

function GroceryStore({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fresh Grocery</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search products..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <ScrollView style={styles.categoriesList}>
                {categories.map((category) => (
                    <View key={category.id} style={styles.categorySection}>
                        <Text style={styles.categoryTitle}>{category.name}</Text>
                        {category.items.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.itemCard}
                                onPress={() => addToCart(item)}
                            >
                                <View style={styles.itemInfo}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemPrice}>${item.price}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => addToCart(item)}
                                >
                                    <Text style={styles.addButtonText}>+</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {
                    alert(`${cart.length} items in cart`);
                }}
            >
                <Text style={styles.cartButtonText}>
                    View Cart ({cart.length})
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    categoriesList: {
        flex: 1,
    },
    categorySection: {
        marginBottom: 25,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    itemCard: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        color: '#333',
    },
    itemPrice: {
        color: '#666',
        marginTop: 5,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    cartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default GroceryStore; 