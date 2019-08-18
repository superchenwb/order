import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import Title from '../../../../../components/Title';
import SelectInput from '../../../../../components/SelectInput';
import CategoryModal from './CategoryModal';
import {
  serviceCategoryList,
  serviceTypeList,
} from '../../../../../model/data';

interface IProps {
  canSelectLength: number;
  selectedCategoryIds: string[];
  selectedTypeIdLists: number[][];
  saveCategory: (selectedCategoryId: string, selectedTypeIds: number[], currentIndex: number) => void;
  clean: () => void;
}

class SelectCategory extends React.PureComponent<IProps> {
  
  state = {
    visible: false,
    currentIndex: 0,
  }

  onChange = (value: number) => {
    this.setState({
      visible: true,
      currentIndex: value,
    });
  }

  closeModal = () => {
    this.setState({
      visible: false,
    });
  }

  saveCategory = (selectedCategoryId: string, selectedTypeIds: number[]) => {
    const { saveCategory } = this.props;
    const { currentIndex } = this.state;
    saveCategory(selectedCategoryId, selectedTypeIds, currentIndex);
    this.setState({
      currentIndex: currentIndex + 1,
    });
  }

  renderInput = (item: number) => {
    const { selectedTypeIdLists, selectedCategoryIds } = this.props;
    let text = '';
    
    if(selectedCategoryIds) {
      const selectedCategoryId = selectedCategoryIds[item];
      const category = serviceCategoryList.find(item => item.id === selectedCategoryId);
      if(category) {
        text = category.title;
      }
    }

    if(selectedTypeIdLists && selectedTypeIdLists[item]) {
      const selectedTypeIds = selectedTypeIdLists[item];
      const typeTitles = serviceTypeList.filter(type => selectedTypeIds.indexOf(type.id) > -1).map(type => type.title);
      if(typeTitles) {
        text += ` - ${typeTitles.join()}`;
      }
    }

    return (
      <SelectInput
        text={text}
        key={item}
        value={item}
        onChange={this.onChange}
      />
    )
  }
  
  render() {
    const { visible, currentIndex } = this.state;
    const { 
      canSelectLength,
      selectedCategoryIds,
      selectedTypeIdLists,
      clean,
    } = this.props;
    const canSelectList = Array.from({ length: canSelectLength }, (item, i) => i);
    return (
      <View>
        <Title 
          title="选择最擅长的品类"
          tips={`（最多可选${canSelectLength}项）`}
          subTitle="保证金师傅最多可选5个，非保证金师傅最多可选3个"
        />
        {
          canSelectList.map(this.renderInput)
        }
        <Modal
          isVisible={visible}
          style={styles.bottomModal}
        >
          <CategoryModal
            closeModal={this.closeModal}
            serviceCategoryList={serviceCategoryList}
            typeList={serviceTypeList}
            currentIndex={currentIndex}
            saveCategory={this.saveCategory}
            selectedCategoryIds={selectedCategoryIds}
            selectedTypeIdLists={selectedTypeIdLists}
            isLast={canSelectLength === currentIndex + 1}
            clean={clean}
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  }
})

export default SelectCategory;