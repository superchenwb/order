import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface IProps {
  title: string;
  tips?: string;
  subTitle?: string;
}

class Title extends React.PureComponent<IProps> {
  render() {
    const { title, tips, subTitle } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
        {title}
        <Text style={styles.tips}>{tips}</Text>
        </Text>
        {
          !!subTitle && (
            <Text style={styles.subTitle}>{subTitle}</Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#292929',
    lineHeight: 30,
  },
  tips: {
    color: '#9e9e9e',
  },
  subTitle: {
    fontSize: 14,
    color: '#9e9e9e',
  }
})

export default Title;