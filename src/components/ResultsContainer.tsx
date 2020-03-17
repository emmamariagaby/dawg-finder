import * as React from "react";

import DogInfo from "./DogInfo";

export interface ResultsContainerState {
    source: [string, string][]
}

export interface ResultsContainerProps {
    result: string
}

/** Renders ResultsContainer consisting of DogInfo-components. */
class ResultsContainer extends React.Component<ResultsContainerProps, ResultsContainerState> {
constructor(props: ResultsContainerProps) {
        super(props);
        this.state = {
            source: []
        }
        this.fetchResultsData()
    }

    render() {
        return (
            <div className="FullScreen">
            <div className="ResultsContainer">
                {this.state.source.map((value, index) => {
                    console.log(value)
                    return <DogInfo key={index} dogType={this.props.result} source={value} />
                })}
            </div>
            </div>
        )
    }

    /**
     * Fetches DogInfo data and sets source state as the fetched data.
     */
    fetchResultsData() {
        fetch("./src/components/doginfo.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ source: Object.entries(data[this.props.result][0]) })
            })
            .catch(error => console.error(error))
    }
}

export default ResultsContainer;