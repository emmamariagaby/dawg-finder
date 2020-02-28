import * as React from "react";

import Button from "./Button";

export interface FormProps {
  question: number
}

class Form extends React.Component<FormProps, {}> {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="questionOne">Val 1</label>
            <input type="radio" name="questionOne" />
            <label htmlFor="B">Val 2</label>
            <input type="radio" name="B" />
            <label htmlFor="C">Val 3</label>
            <input type="radio" name="C" />
          </form>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    );
  }

  handleSubmit() {
    // spara value
  }
}

export default Form;
