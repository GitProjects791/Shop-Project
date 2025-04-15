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
        name: 'Prescription Medicines',
        description: 'Upload prescription to order',
    },
    {
        id: '2',
        name: 'Over-the-Counter',
        items: [
            { id: '1', name: 'Pain Relief', price: '9.99' },
            { id: '2', name: 'Cold & Flu', price: '12.99' },
            { id: '3', name: 'First Aid', price: '15.99' },
        ]
    },
    {
        id: '3',
        name: 'Personal Care',
        items: [
            { id: '4', name: 'Dental Care', price: '5.99' },
            { id: '5', name: 'Skin Care', price: '8.99' },
            { id: '6', name: 'Hair Care', price: '7.99' },
        ]
    },
];

function Pharmacy({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handlePrescriptionUpload = () => {
        // Add prescription upload logic here
        alert('Prescription upload feature will be implemented');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>LifeCare Pharmacy</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search medicines..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <ScrollView style={styles.categoriesList}>
                {categories.map((category) => (
                    <View key={category.id} style={styles.categorySection}>
                        <Text style={styles.categoryTitle}>{category.name}</Text>

                        {category.name === 'Prescription Medicines' ? (
                            <TouchableOpacity
                                style={styles.uploadButton}
                                onPress={handlePrescriptionUpload}
                            >
                                <Text style={styles.uploadButtonText}>
                                    Upload Prescription
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            category.items?.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.itemCard}
                                >
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemPrice}>${item.price}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.addButton}
                                        onPress={() => alert(`Added ${item.name} to cart`)}
                                    >
                                        <Text style={styles.addButtonText}>Add</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            ))
                        )}
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.emergencyButton}
                onPress={() => alert('Emergency contact: 911')}
            >
                <Text style={styles.emergencyButtonText}>
                    Emergency Contact
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
    uploadButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
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
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    emergencyButton: {
        backgroundColor: '#ff3b30',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    emergencyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Pharmacy; 