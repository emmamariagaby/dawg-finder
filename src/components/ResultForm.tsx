import * as React from "react";

export interface ResultFormState {
	
}

export interface ResultFormProps {
  answers: { [key: string]: string }
}

class ResultForm extends React.Component<ResultFormProps, {}> {
  constructor(props: ResultFormProps) {
    super(props)
    this.whatIsChecked()
  }

    render() {
        return (
          <p>Something worked</p>
        );
    }

    whatIsChecked() {
      Object.getOwnPropertyNames(this.props.answers).map(
        (key) => { console.log(this.props.answers[key as string])
        })
      
    }
}



export default ResultForm;