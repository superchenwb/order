import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepView}>
          <View style={[styles.stepNum, styles.finishStep]}>
            <Icon name="check" size={12} color="#ffffff" />
          </View>
          <Text>实名认证</Text>
        </View>
        <View style={styles.stepView}>
          <View style={[styles.stepNum, styles.finishStep]}>
            <Text style={styles.stepText}>2</Text>
          </View>
          <Text>选择服务</Text>
        </View>
        <View style={styles.stepView}>
          <View style={styles.stepNum}>
            <Icon name="flag" size={12} color="#ffffff" />
          </View>
          <Text>入驻成功</Text>
        </View>
        <View style={styles.lineBox}>
          <View style={styles.finishLine} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 10,
  },
  stepView: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNum: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#ffffff60',
    backgroundColor: '#e5e5e5',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  finishStep: {
    backgroundColor: '#94be49',
  },
  stepText: {
    color: '#ffffff',
  },
  lineBox: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: 3 }],
    height: 3,
    left: 50,
    right: 50,
    backgroundColor: '#cccccc',
    zIndex: -1,
  },
  finishLine: {
    height: 3,
    width: '50%',
    backgroundColor: '#94be49',
  },
});

export default Header;