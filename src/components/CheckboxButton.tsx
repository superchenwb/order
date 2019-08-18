import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

interface IProps {
  value: any;
  title: string;
  disabled?: boolean;
  checked: boolean;
  onPress?: (value: any) => void;
}

class CheckboxButton extends React.PureComponent<IProps> {
  
  onPress = () => {
    const { onPress, value, disabled  } = this.props;
    if(!disabled && onPress) {
      onPress(value);
    }
  }
  
  render() {
    const { title, checked, disabled } = this.props;
    const containerStyle = [styles.container, checked && styles.checkedContainer, disabled && styles.disabledConatiner];
    return (
      <TouchableOpacity
      style={containerStyle}
      onPress={this.onPress}
      >
        <Text style={[styles.title, checked && styles.checkedTitle, disabled && styles.disabledTitle]}>{title}</Text>
        {
          (checked || disabled) && (
            <View style={[styles.tipView, disabled && styles.disabledTipView]}>
              <Icon style={styles.tipIcon} name="check" size={12} color="#fff" />
            </View>
          )
        }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: (width - 10) / 4 - 10,
    paddingVertical: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#666666',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    overflow: 'hidden',
  },
  checkedContainer: {
    borderColor: '#94be49'
  },
  disabledConatiner: {
    backgroundColor: '#666',
    borderColor: '#666'
  },
  title: {
    color: '#666666',
  },
  checkedTitle: {
    color: '#94be49',
  },
  disabledTitle: {
    color: '#ffffff',
  },
  tipView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    bottom: 0,
    right: -10,
    backgroundColor: '#94be49',
    transform: [{ rotate: '-45deg' }],
  },
  disabledTipView: {
    backgroundColor: '#ccc',
  },
  tipIcon: {
    transform: [{ rotate: '35deg' }],
  }
})

export default CheckboxButton;