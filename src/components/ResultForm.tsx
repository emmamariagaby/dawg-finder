import * as React from "react";
import ResultsContainer from "./ResultsContainer";

export interface ResultFormState {
	
}

export interface ResultFormProps {
  answers: { [key: string]: string | number | boolean }
}

class ResultForm extends React.Component<ResultFormProps, {}> {
  constructor(props: ResultFormProps) {
    super(props)
    this.whatIsChecked()
  }

    render() {
      console.log("hello")
        return (
          <div className="ResultForm"><p>Something worked</p></div>
          
        );
    }

    whatIsChecked() {
      Object.getOwnPropertyNames(this.props.answers).map(
        (key) => { // )
        }) 
        // console.log(this.props.answers[key as string]
      
    }

    answersA() {
      <ResultsContainer result="sällskap" />
    }

    answersB() {
      <ResultsContainer result="jakt" />
    }

    answersC() {
      <ResultsContainer result="vallhund" />
    }
}

export default ResultForm;