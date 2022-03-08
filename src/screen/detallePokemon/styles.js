import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFDE00',
      margin: 20,
      elevation: 5,
      border: 5,
      borderColor: 'black',
      borderWidth: 4,
      borderRadius: 10,
  },
  image: {
      width: 300,
      height:300
  },
  name:{
      fontSize: 30,
      color: '#000',
      fontWeight: 'bold'
  },
  contenedorText:{
      alignItems:'center',
      marginBottom: 20,
      width: '80%',
      backgroundColor: '#fff',
      padding: 40,
      borderRadius: 10,
      border: 5,
      borderColor: 'black',
      borderWidth: 4,
  },
  text: {
      color: '#000',
      fontSize: 20,
  }

})