import * as React from "react";

import DogImage from "./DogImage";
import DogText from "./DogText";

export interface DogInfoState {
  showText: boolean
}

export interface DogInfoProps {
  dogType: string
  source: string[]
}

/** Renders DogInfo consisting of DogImage and DogText. */
class DogInfo extends React.Component<DogInfoProps, DogInfoState> {
  state = {
    showText: true
  }

  constructor(props: DogInfoProps) {
    super(props);
    this.setShowTextState = this.setShowTextState.bind(this);
  }

  render() {
    return (
      <div className="DogInfo">
        <DogImage dogType={this.props.dogType} source={Object.values(this.props.source[1])} handleClick={this.setShowTextState} />
        <DogText dogType={this.props.dogType} showDogText={this.state.showText} source={this.props.source} />
      </div>
    );
  }

  /**
   * Catches errors and logs in the console.
   * @param error The error that occured.
   * @param errorInfo Info on said error.
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
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