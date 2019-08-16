import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Header from './subpages/Header';
import Footer from './subpages/Footer';

class Home extends React.PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <Text>Home页面</Text>
        <Footer />
      </SafeAreaView>
    )
  }
}

export default Home;