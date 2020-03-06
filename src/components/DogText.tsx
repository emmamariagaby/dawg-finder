import * as React from "react";

// import { DogInfoProps } from "./DogInfo";

export interface DogTextState {
  textSource: string
}

export interface DogTextProps {
  [key: string]: string
}

class DogText extends React.Component<DogTextProps, DogTextState> {
  state = {
    textSource: ""
  }

  constructor(props: DogTextProps) {
    super(props);
    this.fetchDogText();
  }

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
            textSource: this.getDogText(Object.values(data[this.props.dogType]))
          })
        )
      })
      .catch(error => console.error(error))
  }

  getDogText(dataAsValues: string[]) {
      for (let i = 0; i < dataAsValues.length; i++) {
        return dataAsValues[i]
      }
      return "No info found."
  }
}

export default DogText;