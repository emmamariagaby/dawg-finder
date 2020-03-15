import * as React from "react";

import { DogInfoProps } from "./DogInfo"

export interface DogImageState {
  imageSource: string
  errorImage: string
}

export interface DogImageProps extends DogInfoProps{
  handleClick: () => void
}

/** Renders DogImage consisting of image HTML-element. */
class DogImage extends React.Component<DogImageProps, DogImageState> {
  constructor(props: DogImageProps) {
    super(props);
    
    this.state = {
      imageSource: 
        this.props.source[1][this.getRandomInt(this.props.source[1].length)],
      errorImage: "src/assets/images/errorloadimage.png"
    }
  }

  render() {
    return (
      <div className="ImageContainer">
      <img className="DogImage" src={this.state.imageSource} onClick={this.returnData} />
      <div className="overlay">
        <div className="overlayText">CURIOUS OF THIS DOG BREED?<br></br><br></br>CLICK ON IMAGE</div>
      </div>
    </div>
    );
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
}

export default DogImage;