import * as React from "react";

import { DogInfoProps } from "./DogInfo";

export interface DogImageState {
  imageSource: string,
}

export interface DogImageProps extends DogInfoProps {
  handleClick: () => void
}

class DogImage extends React.Component<DogImageProps, DogImageState> {
  state = {
    imageSource: "",
  }

  constructor(props: DogImageProps) {
    super(props);
    this.fetchImageData();
  }

  render() {
    return (
      <>
        <img src={this.state.imageSource} width="100%px" height="auto" onClick={this.returnData} />
      </>
    )
  }

  /**
   * Triggers handleClick method in parent, DogInfo.
   */
  returnData = () => {
    this.props.handleClick();
  }

  /**
   * Generates a random integer within a range.
   * @param limit Maximum number to randomize number to.
   * @returns Random integer.
   */
  getRandomInt(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  /**
   * Fetch dog image and set state imageSource.
   * @param dogType The group of which to get image paths from.
   */
  fetchImageData(): void {
    fetch("./src/components/dogimages.json")
      .then(response => response.json())
      .then(data => {
        return (
          this.setState({
            imageSource:
              this.getRandomImage(
                Object.keys(data[this.props.dogType]),
                Object.values(data[this.props.dogType])
              )
          })
        )
      })
      .catch(error => console.error(error))
  }

  /**
   * Method that returns image path as string.
   * @param dataAsKeys Dog type data as keys, fetched from JSON-file.
   * @param dataAsValues Dog type data as values, fetched from JSON-file.
   * @returns Image path OR error image.
   */
  getRandomImage(dataAsKeys: string[], dataAsValues: string[]): string {
    for (let i = 0; i < dataAsKeys.length; i++) {
      if (this.props.breed != undefined && dataAsKeys[i] == this.props.breed) {
        return dataAsValues[i][this.getRandomInt(dataAsKeys.length)];
      } else {
        return dataAsValues[this.getRandomInt(dataAsKeys.length)][this.getRandomInt(dataAsKeys.length + 1)]
      }
    }
    return ".src/assets/images/errorloadimage.png";
  }
}

export default DogImage;