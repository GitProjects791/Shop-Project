import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { Account } from '../Data'
import Login from '../Screens/Login'

function LoginInputs ( purpose ) {
    const Data = Account[purpose]

    return Data.map( () => {
        <View style={{ flex: 1, justifyContent: 'space-around'}}>
            <TextInput key={Data.label} mode='outlined' placeholder={Data.placeholder} style={ styles.tInput }  label= { Data.placeholder }  left={ <TextInput.Icon icon={ () => <Ionicons name={ Data.icon } size={ 30 } /> } /> } />
        </View>
    })
}

export default LoginInputs