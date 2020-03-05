import * as React from "react";

export interface DogImageState {
  imageSource: string,
}

export interface DogImageProps {
  breed?: string
  dogType: string
}

export interface ImageProps {
  [key: string]: string

}

//json https://www.json-generator.com/#
class DogImage extends React.Component<DogImageProps, DogImageState> {
  state = {
    imageSource: "",

  }

  constructor(props: DogImageProps) {
    super(props);
    this.fetchImageData(this.props.dogType);

  }

  render() {
    return (
      <>
        <img src={this.state.imageSource} width="150px" height="auto" />

      </>
    )
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
  fetchImageData(dogType: string): void {
    fetch("./src/components/dogimages.json")
      .then(response => response.json())
      .then(data => {
        return (
          this.setState({
            imageSource:
              this.getRandomImage(data, dogType, this.props.breed)
          })
        )
      })
      .catch(error => console.error(error))
  }

  /**
   * Returns image path as string.
   * @param data Recieved data with images from JSON-file.
   * @param dogType The group of which to get image paths from.
   * @param breed Optional, shows a random image of a specified breed.
   * @returns Image path.
   */
  getRandomImage(data: ImageProps, dogType: string, breed?: string): string {
    for (let i = 0; i < Object.keys(data[dogType]).length; i++) {
      if (breed != null && Object.keys(data[dogType])[i] == breed) {
        return Object.values(data[dogType])[i][this.getRandomInt(Object.keys(data[dogType]).length)];
      } else {
        return Object.values(data[dogType])[this.getRandomInt(Object.keys(data).length)][this.getRandomInt(Object.keys(data).length)]
      }
    }
    return ".src/assets/images/errorloadimage.png";
  }
}

export default DogImage;