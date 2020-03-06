import * as React from "react";

// import { DogInfoProps } from "./DogInfo";

export interface DogTextState {
  textSource: string
}

export interface DogTextProps {
  dogType: string
  showDogText: boolean
  showText?: boolean
}

class DogText extends React.Component<DogTextProps, DogTextState> {
  state = {
    textSource: "",
  }

  constructor(props: DogTextProps) {
    super(props);
    this.fetchDogText();
  }

  render() {
    return (
      this.props.showDogText ?
        <div>
          <h3>{this.props.dogType}</h3>
          <p>{this.state.textSource}</p>
        </div> : null
    );
  }

  /**
   * Fetches dog info text from JSON-file.
   * @returns sets textSource in state.
   */
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

  /**
   * Get text from fetched data.
   * @param dataAsValues Dog type data as values, fetched from JSON-file.
   * @returns Dog text OR error message as string.
   */
  getDogText(dataAsValues: string[]) {
    for (let i = 0; i < dataAsValues.length; i++) {
      return dataAsValues[i];
    }
    return "No info found."
  }
}

export default DogText;