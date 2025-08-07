import React from 'react';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';

export const PrimaryButton = ({ style }) => {
  return (
    <Pressable style={[style]}>
      <View
        style={{
          borderRadius: 36,
          boxShadow: '0px 0px 16px 0px rgba(76, 76, 76, 0.5)',
          height: 20,
          width: 50,
        }}
      >
        <Animated.View></Animated.View>
      </View>
    </Pressable>
  );
};
