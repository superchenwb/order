import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckboxButton from '../../../../../components/CheckboxButton';
import Footer from '../../Footer';
import { IPromise } from '../../../../../model/data';

interface IState {
  yuanchengFeiYongId: number;
  tailouFeiYongId: number;
  acceptId: number;
}

interface IProps {
  closeModal: () => void;
  saveServicePromise: (yuanchengFeiYongId: number, tailouFeiYongId: number, acceptId: number) => void;
  yuanchengFeiyongs: IPromise[];
  tailouFeiyongs: IPromise[];
  diJingZhengs: IPromise[];
  selectedServicePromiseIds: number[];
}

/**
 * 服务承诺选择组件
 */
class ServicePromiseModal extends PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    let yuanchengFeiYongId;
    let tailouFeiYongId;
    let acceptId;
    ([yuanchengFeiYongId, tailouFeiYongId, acceptId] = props.selectedServicePromiseIds)
    this.state = {
      yuanchengFeiYongId,
      tailouFeiYongId,
      acceptId,
    }
  }

  onChangeYuanchengFeiYong = (value: number) => {
    this.setState({
      yuanchengFeiYongId: value,
    })
  }

  onChangeTailouFeiYong = (value: number) => {
    this.setState({
      tailouFeiYongId: value,
    })
  }

  onChangeAccept = (value: number) => {
    this.setState({
      acceptId: value,
    })
  }

  // 完成
  saveServicePromise = () => {
    const { yuanchengFeiYongId, tailouFeiYongId, acceptId } = this.state;
    const { saveServicePromise } = this.props;
    if(!(yuanchengFeiYongId && tailouFeiYongId && acceptId)) {
      Alert.alert('提示', '请选择收费方式')
      return;
    }
    saveServicePromise(yuanchengFeiYongId, tailouFeiYongId, acceptId);
    this.closeModal();
  }

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  // 远程费用
  renderYuanCheng = () => {
    const { yuanchengFeiYongId } = this.state;
    const { yuanchengFeiyongs } = this.props;
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.headerText}>远程费用</Text><Text style={styles.headerTextRight}>超远距离可收取适当费用，每公里：</Text>
        </View>
        <View style={styles.changeCategoryView}>
          {
            yuanchengFeiyongs.map(item => {
              const checked = yuanchengFeiYongId === item.value;
              return (
                <CheckboxButton
                  key={item.value}
                  checked={checked} 
                  onPress={this.onChangeYuanchengFeiYong}
                  value={item.value} 
                  title={item.title} 
                />
              )
            })
          }
        </View>
      </View>
    )
  }

  // 抬楼费用
  renderTaiLou = () => {
    const { tailouFeiYongId } = this.state;
    const { tailouFeiyongs } = this.props;
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.headerText}>抬楼费用</Text><Text style={styles.headerTextRight}>3楼以下25公斤以内免收，超出部分每层收取：</Text>
        </View>
        <View style={styles.changeCategoryView}>
          {
            tailouFeiyongs.map(item => {
              const checked = tailouFeiYongId === item.value;
              return (
                <CheckboxButton
                  key={item.value}
                  checked={checked} 
                  onPress={this.onChangeTailouFeiYong}
                  value={item.value} 
                  title={item.title} 
                />
              )
            })
          }
        </View>
      </View>
    )
  }

  // 低竞争订单
  renderDiJingZheng = () => {
    const { acceptId } = this.state;
    const { diJingZhengs } = this.props;
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.headerText}>低竞争订单派单</Text><Text style={styles.headerTextRight}>超出服务范围或不熟悉的服务类目订单：</Text>
        </View>
        <View style={styles.changeCategoryView}>
          {
            diJingZhengs.map(item => {
              const checked = acceptId === item.value;
              return (
                <CheckboxButton
                  key={item.value}
                  checked={checked} 
                  onPress={this.onChangeAccept}
                  value={item.value} 
                  title={item.title} 
                />
              )
            })
          }
        </View>
      </View>
    )
  }

  renderBasicService = () => {
    return (
      <View style={styles.basic}>
        <Text style={styles.title}>基本服务承诺</Text>
        <View style={styles.grid}>
          <View style={[styles.row, styles.oddCol]}>
            <View style={styles.colLeft}>
              <Text>空跑费</Text>
            </View>
            <View style={styles.colRight}>
              <Text style={styles.colRightText}>配送50元/次，安装或维修30元/次</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text>安装/维修</Text>
            </View>
            <View style={styles.colRight}>
              <Text style={styles.colRightText}>1个月内免费检修</Text>
            </View>
          </View>
          <View style={[styles.row, styles.oddCol]}>
            <View style={styles.colLeft}>
              <Text>二次上门</Text>
            </View>
            <View style={styles.colRight}>
              <Text style={styles.colRightText}>提货+安装80元/次，安装或者维修40元/次</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text>免费核销</Text>
            </View>
            <View style={styles.colRight}>
              <Text style={styles.colRightText}>支持喵师傅/汪师傅核销</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.categoryModal}>
        <TouchableOpacity style={styles.closeView} onPress={this.closeModal}>
          <Icon name="close" size={22} color="#999" />
        </TouchableOpacity>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={styles.categoryModalContent}>
            {this.renderBasicService()}
            <View>
              <Text style={styles.title}>附加服务承诺</Text>
              {this.renderYuanCheng()}
              {this.renderTaiLou()}
              {this.renderDiJingZheng()}
            </View>
          </View>
        </ScrollView>
        <Footer
          nextText="完成"
          onPressNext={this.saveServicePromise}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tips: {
    color: '#ccc',
    marginTop: 5,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  categoryModal: {
    height: 550,
    backgroundColor: '#fff',
    
  },
  closeView: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 9999,
  },
  modalHeaderView: {
    flex: 1,
    padding: 10,
    
  },
  modalHeaderText: {
    color: '#fff',
  },
  categoryModalContent: {
    
  },
  basic: {
    // padding: 10,
  },
  title: {
    color: '#94BE49',
    // marginBottom: 10,
    margin: 10,
  },
  titleView: {
    padding: 10,
    flexDirection: 'row',
  },
  headerText: {
    width: 80,
  },
  headerTextRight: {
    color: '#666',
    flex: 1,
  },
  clean: {
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  cleanText: {
    color: '#999',
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
  changeCategoryView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  changeCategoryBox: {
    margin: 5,
  },
  grid: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#817936',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#817936',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#817936',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#817936',
  },
  oddCol: {
    backgroundColor: '#94BE49',
  },
  evenCol: {

  },
  colLeft: {
    width: 80,
    padding: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#817936',
  },
  colRight: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  colRightText: {
    color: '#666',
  },
});

export default ServicePromiseModal;