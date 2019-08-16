import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Footer extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>上一步</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonPrimaryText}>下一步</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderTopColor: '#94be49',
    borderTopWidth: 1,
  },
  buttonText: {
    color: '#94be49',
  },
  buttonPrimary: {
    backgroundColor: '#94be49',
  },
  buttonPrimaryText: {
    color: '#ffffff',
  }
})

export default Footer;