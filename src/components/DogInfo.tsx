import * as React from "react";

import DogImage from "./DogImage";
import DogText from "./DogText";

export interface DogInfoProps {
  breed?: string
  dogType: string
}

class DogInfo extends React.Component<DogInfoProps, {}> {
  render() {
    return (
      <>
        <DogImage dogType={this.props.dogType} />
        <DogText dogType={this.props.dogType} />
      </>
    );
  }
}

export default DogInfo;