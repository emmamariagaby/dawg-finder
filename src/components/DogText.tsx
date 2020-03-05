import * as React from "react";

import { DogInfoProps } from "./DogInfo";

export interface DogTextState {
  textSource: string
}

export interface DogTextProps {
  [key: string]: string
}

class DogText extends React.Component<DogTextProps, DogTextState> {
  render() {
    return (
      <>
        <h3>{this.props.dogType}</h3>
        <p>{this.state.textSource}</p>
      </>
    );
  }

  fetchDogText() {
    fetch("./src/components/dogtext.json")
      .then(response => response.json())
      .then(data => {
        return (
          this.setState({
            textSource: this.getDogText(data) as string
          })
        )
      })
      .catch(error => console.error(error))
  }

  getDogText(data: DogTextProps) {
      for (let i = 0; i < Object.keys(data).length; i++) {
        return "hej"
      }
      return "då"
  }
}

export default DogText;