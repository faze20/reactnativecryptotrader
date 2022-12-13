import {Image,  Text, View } from 'react-native'
import { Ionicons , EvilIcons }from '@expo/vector-icons';
import styles from './styles';

const CoinDetailedHeader = (props) => {
    const {image, symbol , marketCapRank} = props
  return (
    <View style={styles.headerContainer}>
        <Ionicons name='chevron-back-sharp' size={30} color='white' />
        <View style={styles.ticketContainer}>
            <Image source={{ uri:image}} style={{ width:25, height:25}}/>
            <Text style={{color: 'white' , fontWeight: 'bold', marginHorizontal: 3}}>{symbol.toUpperCase()} </Text>
            <View style={styles.rankcontainer}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15 }}>#{marketCapRank} </Text>
            </View>
        </View>
        <EvilIcons name='user' size={30} color='white' />
    </View>
  )
}

export default CoinDetailedHeader

