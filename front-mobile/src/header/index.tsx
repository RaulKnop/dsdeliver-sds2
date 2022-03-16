import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DsDelivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C'
    ,height: 90
    ,paddingTop: 50,
    flexDirection: 'row'
    ,justifyContent: 'center'
  },
});

export default Header;
