import React from 'react';
import {StyleSheet} from 'react-native';
import {useColorScheme, Text, TouchableOpacity} from 'react-native';
import {globalStylesApp} from '../../../app/styles/globalStyles';

export const ButtonShared = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    button: {
      width: 100,
      height: 40,
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: isDarkMode
        ? globalStylesApp.buttonDark.color
        : globalStylesApp.buttonLight.color,
      backgroundColor: isDarkMode
        ? globalStylesApp.buttonDark.color
        : globalStylesApp.buttonLight.color,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        /* Сделайте что-то при нажатии кнопки */
      }}>
      <Text>Нажми меня!</Text>
    </TouchableOpacity>
  );
};
