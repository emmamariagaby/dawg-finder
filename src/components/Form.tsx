import * as React from "react";

export interface FormState {
  firstValue: string
  secondValue: string
}

class Form extends React.Component<{}, FormState> {

  constructor(props?: any) {
    super(props);
    this.state = { 
      firstValue: "",
      secondValue: ""
    }
   this.questionParse = this.questionParse.bind(this);
  }

questionParse(q: number) {
  if (q == 1) {
  return (
        <div style={{color: 'green'}} className="formQuestions"> 
        Fråga 1
<section className="questionOne">
          <h2>How active are you?</h2>
            <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "Very active"}
              onChange={this.onRadioChangeFirst}
              value="Very active" />
              <label htmlFor="Very active">Very active </label>
          
            <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "Not very active"}
              onChange={this.onRadioChangeFirst}
              value="Not very active" />
               <label htmlFor="Not very active">Not very active </label>

              <input
              type="radio"
              name="active"
              checked={this.state.firstValue === "I'm an atletic"}
              onChange={this.onRadioChangeFirst}
              value="I'm an atletic"/>
               <label htmlFor="I'm an atletic">I'm an atletic </label>
               </section>

        </div>
        )
        }

        if (q == 2) {
  return (
        <div style={{color: 'green'}} className="formQuestions"> 
        Fråga 2
        </div>
        )
        } 
        return (null);
}


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Form </h1>
        <ul>

     {this.questionParse(1)}
     
          
              <section className="questionTwo">
               <h2>Do you have any special interest?</h2>
              <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I'm interested in hunting, search or rescue training"}
              onChange={this.onRadioChangeTwo}
              value="I'm interested in hunting, search or rescue training" />
              <label htmlFor="I'm interested in hunting, search or rescue training">I'm interested in hunting, search or rescue training </label>
          
            <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I'm interested in herding sheep and living the farm life"}
              onChange={this.onRadioChangeTwo}
              value="I'm interested in herding sheep and living the farm life" />
               <label htmlFor="I'm interested in herding sheep and living the farm life">I'm interested in herding sheep and living the farm life </label>

              <input
              type="radio"
              name="interest"
              checked={this.state.secondValue === "I have no special interest"}
              onChange={this.onRadioChangeTwo}
              value="I have no special interest"/>
               <label htmlFor="I have no special interest">I have no special interest </label>
               </section>

          <button type="button">Previous</button>
          <button type="submit">Next</button>
        
        </ul>
      </form>
    );
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(this.state)
    const { firstValue } = this.state;
    localStorage.setItem('firstValue', firstValue);
    const { secondValue } = this.state;
    localStorage.setItem('secondValue', secondValue);
  }

  onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstValue: e.target.value,
    })
  }
      onRadioChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        secondValue: e.target.value
      })

  }
}
  
export default Form;
