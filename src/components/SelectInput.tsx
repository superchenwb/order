import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SelectInput extends React.PureComponent {

  onPress = () => {
    const { onChange, value } = this.props;
    onChange(value);
  }

  render() {
    const { text, placeholder = '品类' } = this.props;
    const style = text ? styles.value : styles.placeHolder;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <View style={styles.right}>
          <Text style={style}>{text || placeholder}</Text>
        </View>
        <View style={styles.left}>
          {
            !text && (
              <Text style={styles.tips}>请选择</Text>
            )
          }
          <Icon name="arrow-right" size={12} color="#ccc" />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  right: {
    flex: 1,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    color: '#94be49',
  },
  placeHolder: {
    color: '#cccccc',
  },
  tips: {
    color: '#cccccc',
    marginRight: 3,
  }
})

export default SelectInput;