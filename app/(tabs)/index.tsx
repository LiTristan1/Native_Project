import {View,Text,StyleSheet} from 'react-native';
import {verifyInstallation} from 'nativewind'

export default function Index(){
    verifyInstallation();
    return(
        
        <View className = "text-xl font-medium text-black text-center">
                <Text text-xl>Some Text</Text>
        </View>
        
    
    )
}
