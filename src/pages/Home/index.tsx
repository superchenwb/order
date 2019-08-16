import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Header from './subpages/Header';

class Home extends React.PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <Text>Home页面</Text>
      </SafeAreaView>
    )
  }
}

export default Home;