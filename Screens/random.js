import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

import { Dimensions } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={[styles.input, { marginTop: Dimensions.get('window').height - useHeaderHeight() }]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default TextInputExample

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:30,
    borderWidth:3,
    padding: 10,
  }
})