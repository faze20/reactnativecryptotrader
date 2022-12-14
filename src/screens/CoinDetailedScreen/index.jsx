import {Text, View , Dimensions} from 'react-native'
import Coin from '../../../assets/data/crypto.json'
import CoinDetailedHeader from './components/CoinDetailedHeader'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';

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
    // const screenWidth = Dimensions.get('window').width;
    // const points = monotoneCubicInterpolation({data, range: 40});

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
            }
    ],
        legend: ["Rainy Days"] // optional
    };


  return (
    <View style={{ paddingHorizontal: 10}}>
        {/* <ChartPathProvider 
            data={{ points, smoothingStrategy: 'bezier' }}
            // data={{
            //     points:prices.map(([x,y])=>({x , y})),
            //     smoothingStrategy: 'bezier' ,
            //     }}
                > */}
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
            {/* <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
            <ChartDot style={{ backgroundColor: 'blue' }} />
        </ChartPathProvider> */}
    </View>
  )
}

export default CoinDetailedScreen ;

