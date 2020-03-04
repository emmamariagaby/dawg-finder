import * as React from "react";

export interface FormState {
  chosenValue: string
}

class Form extends React.Component<{}, FormState> {

  constructor(props?: any) {
    super(props);
    this.state = { 
      chosenValue: ""
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Form </h1>
        <ul>
          <h2>How active are you?</h2>
            <input
              type="radio"
              name="active"
              checked={this.state.chosenValue === "Very active"}
              onChange={this.onRadioChange}
              value="Very active" />
              <label htmlFor="Very active">Very active </label>
          
            <input
              type="radio"
              name="active"
              checked={this.state.chosenValue === "Not very active"}
              onChange={this.onRadioChange}
              value="Not very active" />
               <label htmlFor="Not very active">Not very active </label>

              <input
              type="radio"
              name="active"
              checked={this.state.chosenValue === "I'm an atletic"}
              onChange={this.onRadioChange}
              value="I'm an atletic"/>
               <label htmlFor="I'm an atletic">I'm an atletic </label>
          
          <button type="submit">Submit</button>
        </ul>
      </form>
    );
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state)
    const { chosenValue } = this.state;
    localStorage.setItem('chosenValue', chosenValue);
  }

  onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      chosenValue: e.target.value
    })
  }
}

export default Form;
