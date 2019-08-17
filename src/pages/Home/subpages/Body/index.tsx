import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import SelectCareer from './SelectCareer';
import {
  careerList, ICareer
} from '../../../../model/data';

interface IState {
  selectedCareerId: number;
  isSelectedCareer: boolean;
}

class Body extends React.PureComponent<null, IState> {

  state = {
    selectedCareerId: 0,
    isSelectedCareer: false,
  }

  onChangeCareer = (career: ICareer) => {
    const { isSelectedCareer } = this.state;
    this.setState({
      selectedCareerId: career.id,
      isSelectedCareer: !isSelectedCareer,
    })
  }

  render() {
    const { selectedCareerId, isSelectedCareer } = this.state;
    return (
      <View>
        <SelectCareer 
          careerList={careerList}
          selectedCareerId={selectedCareerId}
          isSelectedCareer={isSelectedCareer}
          onChangeCareer={this.onChangeCareer}
        />
      </View>
    )
  }
}

export default Body;