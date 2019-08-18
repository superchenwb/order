import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import SelectInput from '../../../../../components/SelectInput';
import Title from '../../../../../components/Title';
import ServicePromiseModel from './ServicePromiseModel';
import {
  yuanchengFeiyongs, tailouFeiyongs, diJingZhengs,
} from '../../../../../model/data';
/**
 *  选择服务承诺
 * 
 */
class SelectServicePromise extends React.PureComponent {

  state = {
    visible: false,
  }

  saveServicePromise = (yuanchengFeiYongId, tailouFeiYongId, acceptId) => {
    const { saveServicePromise } = this.props;
    saveServicePromise(yuanchengFeiYongId, tailouFeiYongId, acceptId);
    this.closeModal();
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  getText = () => {
    let text = ''
    const { selectedServicePromiseIds } = this.props;
    let yuanchengFeiYongId;
    let tailouFeiYongId;
    let acceptId;
    ([yuanchengFeiYongId, tailouFeiYongId, acceptId] = selectedServicePromiseIds);
    const yuanchengFeiyong = yuanchengFeiyongs.find(item => item.value === yuanchengFeiYongId);
    const tailouFeiyong = tailouFeiyongs.find(item => item.value === tailouFeiYongId);
    const diJingZheng = diJingZhengs.find(item => item.value === acceptId);
    if(yuanchengFeiyong) {
      text += `远程费：${yuanchengFeiyong.title} `
    }
    if(tailouFeiyong) {
      text += `抬楼费：${tailouFeiyong.title} `
    }
    if(diJingZheng) {
      text += `低竞争订单派单：${diJingZheng.title}`
    }
    
    return text;
  }

  render() {
    const { visible } = this.state;
    const { selectedServicePromiseIds } = this.props;
    let text = this.getText();
    return (
      <View style={styles.container}>
        <Title title="选择服务承诺" />
        <SelectInput
          text={text}
          onChange={this.showModal}
          placeholder="服务承诺"
        />
        <Modal
          isVisible={visible}
          onBackdropPress={this.closeModal}
          style={styles.bottomModal}
        >
          <ServicePromiseModel
            closeModal={this.closeModal}
            saveServicePromise={this.saveServicePromise}
            yuanchengFeiyongs={yuanchengFeiyongs}
            tailouFeiyongs={tailouFeiyongs}
            diJingZhengs={diJingZhengs}
            selectedServicePromiseIds={selectedServicePromiseIds}
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tips: {
    color: '#ccc',
    marginTop: 5,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default SelectServicePromise;