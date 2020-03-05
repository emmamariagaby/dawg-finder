import * as React from "react";

interface DogImageState {
  imageSource: string,
}

interface DogImageProps {
  breed?: string
  dogType: string
}

interface ImageProps {
  [key: string]: string
}

//json https://www.json-generator.com/#
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
        <img src={this.state.imageSource} width="100%" height="auto" />
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
  fetchImageData(): void {
    fetch("./src/components/dogimages.json")
      .then(response => response.json())
      .then(data => {
        return (
          this.setState({
            imageSource:
              this.getRandomImage(data)
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
  getRandomImage(data: ImageProps): string {
    for (let i = 0; i < Object.keys(data[this.props.dogType]).length; i++) {
      if (Object.keys(data[this.props.dogType])[i] == this.props.breed) {
        return Object.values(data[this.props.dogType])[i][this.getRandomInt(Object.keys(data[this.props.dogType]).length)];
      } else {
        let newImg = Object.values(data[this.props.dogType])
        let randomInd = this.getRandomInt(Object.values(data[this.props.dogType]).length);
        let scnRnd = this.getRandomInt(Object.keys(data[randomInd]).length)
        console.log(Object.values(data[randomInd]).length)
        console.log(Object.keys(data[this.props.dogType]))
        // return newImg[randomInd][0]
        return Object.values(data[this.props.dogType])[this.getRandomInt(Object.values(data[this.props.dogType]).length)][this.getRandomInt(Object.keys(data).length)]  
      }
    }
    return ".src/assets/images/errorloadimage.png";
  }
}

export default DogImage;