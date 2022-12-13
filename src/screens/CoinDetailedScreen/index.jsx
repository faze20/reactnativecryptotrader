import {Text, View , Dimensions} from 'react-native'
import Coin from '../../../assets/data/crypto.json'
import CoinDetailedHeader from './components/CoinDetailedHeader'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts';



const CoinDetailedScreen = () => {
    const {
        image: { small} ,
        symbol,
        name ,
        prices,
        market_data: {
            market_cap_rank ,
            current_price,
            price_change_percentage_24h
        }
    } = Coin

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943': '#16c784';
    const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ paddingHorizontal: 10}}>
        <ChartPathProvider data={{
             points:prices.map(([x,y])=>({x , y})),
              smoothingStrategy: 'bezier' ,
              }}>
            <CoinDetailedHeader
            image={small}
            symbol={symbol}
            marketCapRank={market_cap_rank}
            />
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.name}> {name}</Text>
                    <Text style={styles.currentPrice}> ${current_price.usd}</Text>
                </View>
                <View style={{ backgroundColor:percentageColor,paddingVertical:8,paddingHorizontal:3,borderRadius: 5,flexDirection: 'row' }}>
                <AntDesign 
                    name={ price_change_percentage_24h < 0 ? 'caretdown': 'caretup'} 
                    size={12} 
                    color={'white'}
                    style={{ alignSelf:'center', marginRight:5}}/>
                    <Text style={styles.percentageChange}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>
            <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
            <ChartDot style={{ backgroundColor: 'blue' }} />
        </ChartPathProvider>
    </View>
  )
}

export default CoinDetailedScreen ;

