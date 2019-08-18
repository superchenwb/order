import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface IProps {
  previousText?: string,
  onPressPrevious?: () => void;
  nextText?: string;
  onPressNext?: () => void;
}

class Footer extends React.PureComponent<IProps> {
  render() {
    const { 
      previousText = '上一步',
      onPressPrevious,
      nextText = '下一步',
      onPressNext,
    } = this.props;
    return (
      <View style={styles.container}>
        {
          !!onPressPrevious && (
            <TouchableOpacity onPress={onPressPrevious} style={styles.button}>
              <Text style={styles.buttonText}>{previousText}</Text>
            </TouchableOpacity>
          )
        }
        {
          !!onPressNext && (
            <TouchableOpacity onPress={onPressNext} style={[styles.button, styles.buttonPrimary]}>
            <Text style={styles.buttonPrimaryText}>{nextText}</Text>
          </TouchableOpacity>
          )
        }
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