import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ICareer } from '../../../../../model/data';

interface IProps {
  career: ICareer;
  onPress: (career: ICareer) => void;
  checked: boolean;
  isShowChangeText: boolean;
}

class Career extends React.PureComponent<IProps> {

  onPress = () => {
    const { onPress, career } = this.props;
    onPress(career);
  }

  render() {
    const { career, checked, isShowChangeText } = this.props;
    return (
      <TouchableOpacity 
        style={styles.container} 
        onPress={this.onPress}
      >
        <View style={[styles.imageView, checked && styles.checkedImageView]}>
          <Image 
            source={career.icon}
            style={styles.image}
          />
          {
            isShowChangeText && (
              <View style={styles.changeView}>
                <Text style={styles.changeText}>点击切换</Text>
              </View>
            )
          }
        </View>
        <Text style={[styles.text, checked && styles.checkedText]}>{career.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  checkedImageView: {
    borderColor: '#94be49',
  },
  image: {
    width: 76,
    height: 76,
  },
  text: {
    color: '#969696',
  },
  checkedText: {
    color: '#94be49'
  },
  changeView: {
    position: 'absolute',
    height: 30,
    width: 80,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  changeText: {
    color: '#ffffff',
  }
})

export default Career;