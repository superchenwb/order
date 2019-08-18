import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../../../../components/Title';
import CheckboxButton from '../../../../../components/CheckboxButton';
import Footer from '../../Footer';

class CategoryModal extends React.PureComponent {
  
  constructor(props) {
    super(props);
    const { selectedCategoryIds, selectedTypeIdLists, currentIndex } = props;
    this.state = {
      selectedCategoryIds,
      selectedCategoryId: selectedCategoryIds[currentIndex],
      selectedTypeIds: selectedTypeIdLists[currentIndex] || [],
      isSelectedCategory: false,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.selectedCategoryIds !== prevState.selectedCategoryIds) {
      return {
        selectedCategoryIds: nextProps.selectedCategoryIds,
        selectedCategoryId: nextProps.selectedCategoryIds[nextProps.currentIndex],
        selectedTypeIds: nextProps.selectedTypeIdLists[nextProps.currentIndex] || [],
        isSelectedCategory: false,
      }
    }
    return null;
  }

  clean = () => {
    const { clean } = this.props;
    clean();
  }

  changeCategory = (value) => {
    const { isSelectedCategory } = this.state;
    this.setState({
      selectedCategoryId: value,
      isSelectedCategory: !isSelectedCategory,
    })
  }

  onChangeShowCategory = () => {
    this.setState({
      isSelectedCategory: false,
    })
  }

  changeType = (value) => {
    const { selectedTypeIds } = this.state;
    let newSelectedTypeIds = [ ...selectedTypeIds ];
    const deleteIndex = newSelectedTypeIds.indexOf(value);
    if(deleteIndex === -1) {
      newSelectedTypeIds.push(value);
    } else {
      newSelectedTypeIds.splice(deleteIndex, 1);
    }
    this.setState({
      selectedTypeIds: newSelectedTypeIds,
    })
  }

  // 完成按钮
  stepFinish = () => {
    const { saveCategory, closeModal } = this.props;
    const { selectedCategoryId, selectedTypeIds } = this.state;
    saveCategory(selectedCategoryId, selectedTypeIds);
    closeModal();
  }

  finishAndNext = () => {
    const { saveCategory } = this.props;
    const { selectedCategoryId, selectedTypeIds } = this.state;
    saveCategory(selectedCategoryId, selectedTypeIds);
  }

  renderCategory = (category) => {
    const { selectedCategoryId, isSelectedCategory } = this.state;
    const { selectedCategoryIds, currentIndex } = this.props;
    const checked = selectedCategoryId === category.id;
    if(isSelectedCategory) {
      if(checked) {
        return (
          <View key={category.id} style={styles.changeCategoryView}>
            <CheckboxButton
              title={category.title}
              value={category.id}
              checked={checked}
              disabled={false}
            />
            <TouchableOpacity onPress={this.onChangeShowCategory}>
              <Text style={styles.changeCategoryText}>点击切换</Text>
            </TouchableOpacity>
          </View>
        )
      }
    } else {
      const disabled = selectedCategoryIds.some((id, index) => index !== currentIndex && id === category.id)
      return (
        <CheckboxButton
          key={category.id}
          title={category.title}
          value={category.id}
          checked={checked}
          onPress={this.changeCategory}
          disabled={disabled}
        />
      )
    }
  }

  renderType = (type) => {
    const { selectedTypeIds } = this.state;
    const checked = selectedTypeIds.indexOf(type.id) > -1;
    
    return (
      <CheckboxButton
        key={type.id}
        title={type.title}
        value={type.id}
        checked={checked}
        onPress={this.changeType}
      />
    )
  }
  
  render() {
    const { selectedCategoryId } = this.state;
    const { closeModal, serviceCategoryList, typeList, isLast } = this.props;
    return (
      <View style={styles.modal}>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Icon name="close" size={22} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.clean} onPress={this.clean}>
          <Text style={styles.cleanText}>
            <Icon name="trash" size={18} color="#999" /> 清空
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <Title title="选择服务类目" />
          <View style={styles.categoryList}>
            {
              serviceCategoryList.map(this.renderCategory)
            }
          </View>
          {
            !!selectedCategoryId && (
              <>
                <Title title="选择服务类型" />
                <View style={styles.categoryList}>
                  {
                    typeList.map(this.renderType)
                  }
                </View>
              </>
            )
          }
          
        </ScrollView>
        <Footer 
          previousText="完成"
          nextText="保存并填写下一个"
          onPressPrevious={this.stepFinish}
          onPressNext={isLast ? undefined: this.finishAndNext}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 400,
    backgroundColor: '#ffffff',
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 9,
  },
  clean: {
    position: 'absolute',
    right: 40,
    top: 10,
    zIndex: 9,
  },
  cleanText: {
    color: '#999',
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  changeCategoryView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  changeCategoryText: {
    color: '#666',
    margin: 5,
  }
})

export default CategoryModal;