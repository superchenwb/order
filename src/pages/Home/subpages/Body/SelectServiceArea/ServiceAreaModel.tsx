import React from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Footer';
import Title from '../../../../../components/Title';
import CheckboxButton from '../../../../../components/CheckboxButton';

class CategoryModel extends React.PureComponent {

  constructor(props) {
    super(props);
    let selectedPointAreaIds = [];
    let selectedOtherAreaIds = [];
    if(props.selectedServiceAreaIds.length > 0) {
      ([selectedPointAreaIds, selectedOtherAreaIds = [] ] = props.selectedServiceAreaIds)
    }
    this.state = {
      selectedPointAreaIds,
      selectedOtherAreaIds,
    }
  }

  // 切换类别
  changeServiceArea = (value, type) => {
    const { selectedPointAreaIds, selectedOtherAreaIds } = this.state;
    let newSelectedOtherAreaIds = [...selectedOtherAreaIds];
    
    if(type === 'point') {
      let newSelectedPointAreaIds = [...selectedPointAreaIds];
      const deleteIndex = selectedPointAreaIds.indexOf(value);
      if (deleteIndex === -1) {
        newSelectedPointAreaIds.push(value);
      } else {
        newSelectedPointAreaIds.splice(deleteIndex, 1);
      }
      // 如果选择的重点服务区域超过3项，则移除第一个
      if(newSelectedPointAreaIds.length > 3) {
        newSelectedPointAreaIds.shift();
      }
      this.setState({
        selectedPointAreaIds: newSelectedPointAreaIds,
        // 同一个地区在重点区域选中，则需要在其他服务区域删除
        selectedOtherAreaIds: newSelectedOtherAreaIds.filter(id => newSelectedPointAreaIds.indexOf(id) === -1),
      })
    } else {
      const deleteIndex = selectedOtherAreaIds.indexOf(value);
      if (deleteIndex === -1) {
        newSelectedOtherAreaIds.push(value);
      } else {
        newSelectedOtherAreaIds.splice(deleteIndex, 1);
      }
      
      this.setState({
        selectedOtherAreaIds: newSelectedOtherAreaIds,
      })
    }
  }

  finishedAndClose = () => {
    const { saveServiceArea } = this.props;
    const { selectedPointAreaIds, selectedOtherAreaIds } = this.state;
    if(selectedPointAreaIds.length === 0) {
      Alert.alert('提示', '请选择重点服务区域')
      return;
    }
    saveServiceArea(selectedPointAreaIds, selectedOtherAreaIds);
  }

  renderArea = (item, type) => {
    const { selectedPointAreaIds, selectedOtherAreaIds } = this.state;
    const selectedList = type === 'point' ? selectedPointAreaIds : selectedOtherAreaIds;
    const checked = selectedList.indexOf(item.id) > -1;
    return (
      <CheckboxButton
        key={item.id}
        title={item.title}
        value={item.id}
        checked={checked}
        onPress={value => this.changeServiceArea(value, type)}
      />
    )
  }

  renderMainArea = () => {
    return (
      <View>
        <Title title="核心服务区域" />
        <View style={styles.changeCategoryView}>
          <CheckboxButton
            title="汉阳区"
            value="汉阳区"
            checked
          />
          <View style={styles.changeCategoryBox}>
            <Text style={styles.cleanText}>
              如需修改，请先修改所在地址
            </Text>
          </View>
        </View>
      </View>
    )
  }

  renderPointArea = () => {
    const { areaList } = this.props;
    return (
      <View>
        <Title title="重点服务区域" tips="(可选三个)" />
        <View style={styles.categoryList}>
          {
            areaList.map(item => this.renderArea(item, 'point'))
          }
        </View>
      </View>
    )
  }

  renderOtherArea = () => {
    const { areaList } = this.props;
    const { selectedPointAreaIds } = this.state;
    // 在重点服务区域选中的地区在其他服务区域不显示
    const otherAreaList = areaList.filter(area => selectedPointAreaIds.indexOf(area.id) === -1);
    return (
      <View>
        <Title title="其他服务区域" tips="(不限数量)" />
        <View style={styles.categoryList}>
          {
            otherAreaList.map(item => this.renderArea(item, 'other'))
          }
        </View>
      </View>
    );
  }

  render() {
    const { closeModal } = this.props;
    return (
      <View style={styles.model}>
        <View style={styles.modalHeader}>
            <View style={styles.modalHeaderView}>
              <Text style={styles.modalHeaderText}>订单推送时，将会按照核心区域-重点区域-其他区域优先级推送</Text>
            </View>
            <TouchableOpacity onPress={closeModal}>
              <Icon name="close" size={18} color="#999" />
            </TouchableOpacity>
          </View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={styles.categoryModalContent}>
            {this.renderMainArea()}
            {this.renderPointArea()}
            {this.renderOtherArea()}
          </View>
        </ScrollView>
        <Footer 
          previousText="取消"
          onPressPrevious={closeModal}
          nextText="完成"
          onPressNext={this.finishedAndClose}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  model: {
    height: 500,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#F9F1C7',
  },
  modalHeaderView: {
    flex: 1,
    padding: 10,
    
  },
  modalHeaderText: {
    color: '#928967',
  },
  headerText: {

  },
  clean: {
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  cleanText: {
    color: '#999',
  },
  categoryModalContent: {

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
})

export default CategoryModel;