import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'
const CoinItem = ({ marketCoin }) => {
    const { 
        name, 
        current_price , 
        symbol , 
        market_cap ,
        market_cap_rank, 
        image ,
        price_change_percentage_24h,
        } = marketCoin

    const percentageColor = price_change_percentage_24h < 0 ? 'red': 'green'

    const normalizeMarketCap = (market_cap)=>{
        if(market_cap > 1_000_000_000_000){
            return `${Math.floor(market_cap/1_000_000_000_000)}T`
        }
        if(market_cap > 1_000_000_000){
            return `${Math.floor(market_cap/1_000_000_000)}B`
        }
        if(market_cap > 1_000_000){
            return `${Math.floor(market_cap/1_000_000)}M`
        }
        if(market_cap > 1_000){
            return `${Math.floor(market_cap/1_000)}K`
        }
        return market_cap

    }
  return (
    <View style={styles.coinContainer}>
    <Image 
      source={{uri: image }}
      style={{ height:30, width:30, marginRight:10 , alignSelf: 'center'}}
      />
        <View>
            <Text style={styles.title}>{name}</Text>
            <View style={{ flexDirection:'row'}}>
                <Text style={styles.rank}>{ market_cap_rank }</Text>
                <Text style={styles.text}>{ symbol.toUpperCase() }</Text>
                <AntDesign 
                name={ price_change_percentage_24h < 0 ? 'caretdown': 'caretup'} 
                size={12} 
                color={percentageColor}
                style={{ alignSelf:'center', marginRight:5}}/>
                <Text style={{color: percentageColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
            </View>
        </View>
          <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
            <Text style={styles.title}>{current_price}</Text>
            <Text style={{color : 'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
          </View>
    </View>

  )
}

export default CoinItem