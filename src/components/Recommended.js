import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function Recommended({cover, house, offer }) {
 return (
   <ImageBackground
    source={cover}
    style={styles.container}
    blurRadius={2}
   >
        <Text style={styles.house}>
            {house}
        </Text>
        <Text style={styles.off, styles.shadow}>
            {offer} OFF
        </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
container:{
    height: 130,
    width: 230,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
},
house:{
    fontFamily:'Montserrat_700Bold',
    color: '#FFF',
    fontSize: 15,
},
off:{
    fontFamily:'Montserrat_700Bold',
    color: '#FFF',
    fontSize: 12,
},
shadow:{
    textShadowOffset:{ width: 1, height: 2},
    textShadowRadius: 3,
    textDecorationColor: '#000'
}

})