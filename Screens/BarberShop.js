import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

const services = [
    { id: '1', name: 'Haircut', price: '$15', duration: '30 min' },
    { id: '2', name: 'Beard Trim', price: '$10', duration: '20 min' },
    { id: '3', name: 'Hair Color', price: '$30', duration: '45 min' },
    { id: '4', name: 'Shave', price: '$12', duration: '25 min' },
    { id: '5', name: 'Hair Styling', price: '$20', duration: '30 min' },
];

function BarberShop({ onBack }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>City Barber Shop</Text>
            </View>

            <ScrollView style={styles.content}>
                <Text style={styles.sectionTitle}>Our Services</Text>
                {services.map((service) => (
                    <TouchableOpacity key={service.id} style={styles.serviceCard}>
                        <View>
                            <Text style={styles.serviceName}>{service.name}</Text>
                            <Text style={styles.serviceDetails}>
                                {service.duration} • {service.price}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookButtonText}>Book</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        marginBottom: 10,
    },
    backButtonText: {
        color: '#007AFF',
        fontSize: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3436',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        color: '#2D3436',
    },
    serviceCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2D3436',
        marginBottom: 4,
    },
    serviceDetails: {
        fontSize: 14,
        color: '#636E72',
    },
    bookButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    bookButtonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});

export default BarberShop; 