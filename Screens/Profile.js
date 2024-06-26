import { Text, View, Button } from 'react-native'

function Profile ( { navigation } ) {
    return (
        <View>
            <Text style={{ alignSelf: 'center' }}> Your Profile </Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
        

    )
}

export default Profile

// newest comment