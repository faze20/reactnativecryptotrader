import {Text, View , Dimensions} from 'react-native'
import Coin from '../../../assets/data/crypto.json'
import CoinDetailedHeader from './components/CoinDetailedHeader'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';


export const data = [
    {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
    {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
    {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
    {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
    {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
    {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
    {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
  ];

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
    const points = monotoneCubicInterpolation({data, range: 40});


  return (
    <View style={{ paddingHorizontal: 10}}>
        <ChartPathProvider 
            data={{ points, smoothingStrategy: 'bezier' }}
            // data={{
            //     points:prices.map(([x,y])=>({x , y})),
            //     smoothingStrategy: 'bezier' ,
            //     }}
                >
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

