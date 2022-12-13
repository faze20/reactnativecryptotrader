import { FlatList, StyleSheet, Text, View } from 'react-native'
import CoinItem from '../../CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'


const HomeScreen = () => {
  return (
        <FlatList 
            data={cryptocurrencies}
            renderItem={({item}) => <CoinItem marketCoin={item} />}
        />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})