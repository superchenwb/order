import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import SelectInput from '../../../../../components/SelectInput';
import Title from '../../../../../components/Title';
import ServiceAreaModel from './ServiceAreaModel';
import {
  areaList,
} from '../../../../../model/data';

interface IProps {
  selectedServiceAreaIds: number[][];
  saveServiceArea: (selectedPointAreaIds: number[], selectedOtherAreaIds: number[]) => void;
}

/**
 *  选择服务区域
 * 
 */
class SelectServiceArea extends React.PureComponent<IProps> {

  state = {
    visible: false,
  }

  saveServiceArea = (selectedPointAreaIds: number[], selectedOtherAreaIds: number[]) => {
    const { saveServiceArea } = this.props;
    saveServiceArea(selectedPointAreaIds, selectedOtherAreaIds);
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

  render() {
    const { visible } = this.state;
    const { selectedServiceAreaIds } = this.props;
    let text = "";
    if(selectedServiceAreaIds.length > 0) {
      const selectedPointAreaIds = selectedServiceAreaIds[0];
      text = areaList.filter(area => selectedPointAreaIds.indexOf(area.id) > -1).map(item => item.title).join(',');
    }
    return (
      <View style={styles.container}>
        <Title title="选择服务区域" />
        <SelectInput
          text={text}
          onChange={this.showModal}
          placeholder="服务区域"
        />
        <Modal
          isVisible={visible}
          onBackdropPress={this.closeModal}
          style={styles.bottomModal}
        >
          <ServiceAreaModel
            closeModal={this.closeModal}
            areaList={areaList}
            selectedServiceAreaIds={selectedServiceAreaIds}
            saveServiceArea={this.saveServiceArea}
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

export default SelectServiceArea;