import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
    StatusBar,
    SafeAreaView,
    Alert
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BarberShop from './BarberShop';

const shops = [
    {
        id: '1',
        name: "City Barber Shop",
        type: "Haircuts & Grooming",
        icon: "content-cut",
        screen: "BarberShop",
        color: '#FF6B6B'
    },
    {
        id: '2',
        name: "Fresh Grocery",
        type: "Fresh Food & Essentials",
        icon: "shopping-cart",
        screen: "GroceryStore",
        color: '#4ECDC4'
    },
    {
        id: '3',
        name: "LifeCare Pharmacy",
        type: "Medicines & Healthcare",
        icon: "local-pharmacy",
        screen: "Pharmacy",
        color: '#45B7D1'
    }
];

function Home() {
    const [currentScreen, setCurrentScreen] = useState('Home');

    if (currentScreen === 'BarberShop') {
        return <BarberShop onBack={() => setCurrentScreen('Home')} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#f8f9fa" barStyle="dark-content" />

            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Society Shops</Text>
                <Text style={styles.headerSubtitle}>Find what you need nearby</Text>
            </View>

            <ScrollView
                style={styles.scroller}
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {shops.map((shop) => (
                    <TouchableOpacity
                        key={shop.id}
                        style={styles.shopCard}
                        onPress={() => setCurrentScreen(shop.screen)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, { backgroundColor: shop.color }]}>
                            <MaterialIcons name={shop.icon} size={32} color="#ffffff" />
                        </View>
                        <View style={styles.shopInfo}>
                            <Text style={styles.shopName}>{shop.name}</Text>
                            <Text style={styles.shopType}>{shop.type}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={styles.featuredSection}>
                    <Text style={styles.featuredTitle}>Today's Highlights</Text>
                    <View style={styles.featuredContent}>
                        <TouchableOpacity
                            style={styles.featuredCard}
                            onPress={() => Alert.alert('Special Offers', 'Coming soon!')}
                        >
                            <Text style={styles.featuredText}>Special Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.featuredCard}
                            onPress={() => Alert.alert('New Arrivals', 'Coming soon!')}
                        >
                            <Text style={styles.featuredText}>New Arrivals</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#636E72',
    },
    scroller: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
    },
    shopCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginBottom: 15,
        padding: 15,
        flexDirection: 'row',
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
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    shopInfo: {
        flex: 1,
    },
    shopName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#2D3436',
        marginBottom: 4,
    },
    shopType: {
        fontSize: 14,
        color: '#636E72',
    },
    featuredSection: {
        marginTop: 20,
    },
    featuredTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2D3436',
        marginBottom: 15,
    },
    featuredContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    featuredCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        width: '48%',
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
    featuredText: {
        marginTop: 8,
        fontSize: 14,
        color: '#2D3436',
        fontWeight: '500',
    },
});
