import * as React from "react";

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
        return (
          <div className="ResultForm"><p>Something worked</p></div>
        );
    }

    whatIsChecked() {
      Object.getOwnPropertyNames(this.props.answers).map(
        (key) => { // )
        })   
    }

}

export default ResultForm;