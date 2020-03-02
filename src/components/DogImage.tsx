import * as React from "react";


interface DogImageProps {
  source: string
}

interface DogImageState {
  breed: string,
  imageURL: string,
}

//json https://www.json-generator.com/#
class DogImage extends React.Component<DogImageProps, DogImageState> {
  state = {
    imageURL: "",
    breed: "",
  }

  constructor(props: DogImageProps) {
    super(props);

    this.getRandomImage();
  }
  render() {
    return (
      <>
        <img src={this.props.source} width="150px" height="auto" />
        <img src={this.state.imageURL} width="150px" height="auto" />
      </>
    )
  }

  getRandomNum(limit: number) {
    return Math.floor(Math.random() * limit);
  }

  getRandomImage() {
    fetch("./src/components/dogimages.json")
      .then(response => response.json())
      .then(data => {
        return (
          this.setState({ 
            imageURL: data.corgi[this.getRandomNum(data..length)] 
          })
        )
      })
      .catch(error => console.error(error))
  }
}

export default DogImage;