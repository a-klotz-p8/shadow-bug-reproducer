import React from 'react';
import {Button, Dimensions, ScrollView, View} from 'react-native';

// const image = require('../../assets/images/welcomeBgWhiteBig.png');
const {width} = Dimensions.get('window');

const Registration = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View style={{marginTop: 200}}>
          <View
            /* Why does this View have a shadow?*/
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              transform: [{translateY: 20}],
              /* adding any height/width != auto styles leads to the issue being resolved
              width: 20,
              height: 20,
              */
            }}></View>
          <View
            style={{
              backgroundColor: '#0000ff40',
              boxShadow: '0px 0px 16px 0px rgba(76, 76, 76, 0.5)',
              height: 50,
              width: 140,
            }}></View>
        </View>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}></Button>
      </ScrollView>
    </View>
  );
};

export default Registration;
