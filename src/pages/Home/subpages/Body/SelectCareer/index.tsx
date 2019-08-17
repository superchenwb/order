import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Career from './Career';
import Title from '../../../../../components/Title';
import {
  ICareer,
} from '../../../../../model/data';

interface IProps {
  careerList: ICareer[];
  selectedCareerId: number;
  isSelectedCareer: boolean;
  onChangeCareer: (career: ICareer) => void;
}

/**
 * 职业组件
 */
class SelectCareer extends React.PureComponent<IProps> {
  
  onPress = (career: ICareer) => {
    const { onChangeCareer } = this.props;
    onChangeCareer(career);
  }

  renderItem = (career: ICareer) => {
    const { selectedCareerId, isSelectedCareer } = this.props;
    const checked = selectedCareerId === career.id;
    if(isSelectedCareer && !checked) return null;
    return (
      <Career
        key={career.id}
        career={career} 
        onPress={this.onPress}
        checked={checked}
        isShowChangeText={isSelectedCareer}
      />
    )
  }
  
  render() {
    const { careerList } = this.props;
    return (
      <View>
        <Title title="请选择擅长的服务" tips="（最多一个）" />
        <View style={styles.container}>
          {
            careerList.map(this.renderItem)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
})

export default SelectCareer;