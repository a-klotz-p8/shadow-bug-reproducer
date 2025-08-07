import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';

const LoginMethod = ({navigation}) => {
  return (
    <View style={styles.backgroundContainer}>
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}></Button>
      <PrimaryButton />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginMethod;
