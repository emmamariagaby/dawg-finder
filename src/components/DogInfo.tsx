import * as React from "react";

import DogImage from "./DogImage";
import DogText from "./DogText";

export interface DogInfoState {
  showText: boolean
}

export interface DogInfoProps {
  breed?: string
  dogType: string
}

class DogInfo extends React.Component<DogInfoProps, DogInfoState> {
  constructor(props: DogInfoProps) {
    super(props);
    this.state = {
      showText: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <DogImage dogType={this.props.dogType} showText={this.handleClick} />
        <DogText dogType={this.props.dogType} />
      </div>
    );
  }

  hasBreakfast() {
    return true
  }

  handleClick() {
    this.setState({
      showText: true
    })
  }

}

export default DogInfo;