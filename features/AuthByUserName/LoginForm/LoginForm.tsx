import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ButtonShared} from '../../../shared/ui/Button/Button';

export const LoginForm = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>Do you have account?</Text>
      <TextInput style={styles.input} placeholder="Enter your login" />
      <TextInput style={styles.input} placeholder="Password" />
      <ButtonShared />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
});
