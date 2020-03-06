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
    this.setShowTextState = this.setShowTextState.bind(this);
  }

  render() {
    return (
      <div>
        <DogImage dogType={this.props.dogType} handleClick={this.setShowTextState} />
        <DogText dogType={this.props.dogType} showDogText={this.state.showText} />
      </div>
    );
  }

  /**
   * Conditionally sets showText state.
   */
  setShowTextState() {
    this.state.showText ?
    this.setState({
      showText: false
    }) : this.setState({
      showText: true
    })
  }

}

export default DogInfo;