import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    title:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
      },
      text:{
        color:'white',
        marginRight: 5,
      },
      coinContainer:{
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
        padding: 15,
      },
      rank:{
        fontWeight: 'bold',
        color:'white',
        marginRight:5,
        backgroundColor: '#585858',
        paddingHorizontal: 3,
        borderRadius: 3,
      },
});

export default styles;