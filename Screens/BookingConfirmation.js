import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function BookingConfirmation({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.successIcon}>
                <MaterialIcons name="check-circle" size={80} color="#4CAF50" />
            </View>

            <Text style={styles.title}>Booking Confirmed!</Text>
            <Text style={styles.message}>
                Your appointment has been successfully booked. We'll send you a reminder before your appointment.
            </Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Booking Details:</Text>
                <Text style={styles.detailsText}>
                    A confirmation email has been sent to your registered email address.
                </Text>
            </View>

            <TouchableOpacity
                style={styles.homeButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.homeButtonText}>Return to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successIcon: {
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    homeButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default BookingConfirmation; 