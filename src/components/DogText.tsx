import * as React from "react";
import { DogInfoProps } from "./DogInfo";

export interface DogTextProps extends DogInfoProps {
  dogType: string
  showDogText: boolean
}

/** Renders DogText consisting of title and parapgraph. */
class DogText extends React.Component<DogTextProps, {}> {
  render() {
    return (
      this.props.showDogText ?
        <div className="DogText">
          <h3>{this.props.source[0]}</h3>
          <p>{Object.values(this.props.source[1])[0]}</p>
        </div> : null
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
}

export default DogText;