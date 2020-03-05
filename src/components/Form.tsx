import * as React from 'react';

import ResultForm from './ResultForm'

export interface FormState {
	firstValue: string;
	secondValue: string;
	thirdValue: string
	questionNumber: number;
}

class Form extends React.Component<{}, FormState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			questionNumber: 1,
			firstValue: '',
			secondValue: '',
			thirdValue: ''
		};
		this.questionParse = this.questionParse.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
	}

  /**
   * This function handles argument q and compares it to all question statements. 
   * Returns the correct question.
   */
	questionParse(q: number) {
		if (q == 1) {
			return (
				<div style={{ color: 'green' }} className="formQuestions">
					Fråga 1
					<section className="questionOne">
						<h2>How active are you?</h2>
						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === 'A'}
							onChange={this.onRadioChangeFirst}
							value="A"
						/>
						<label htmlFor="Very active">Very active </label>

						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === 'B'}
							onChange={this.onRadioChangeFirst}
							value="B"
						/>
						<label htmlFor="Not very active">Not very active </label>

						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === "C"}
							onChange={this.onRadioChangeFirst}
							value="C"
						/>
						<label htmlFor="I'm an athletic">I'm an athletic </label>
					</section>
				</div>
			);
		}

		if (q == 2) {
			return (
				<div style={{ color: 'blue' }} className="formQuestions">
					Fråga 2
					<section className="questionTwo">
						<h2>Do you have any special interest?</h2>
						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === "A"}
							onChange={this.onRadioChangeTwo}
							value="A"
						/>
						<label htmlFor="I'm interested in hunting, search or rescue training">I'm interested in hunting, search or rescue training</label>

						<input
							type="radio"
							name="interest"
							checked={
								this.state.secondValue === "B"
							}
							onChange={this.onRadioChangeTwo}
							value="B"
						/>
						<label htmlFor="I'm interested in herding sheep and living the farm life">I'm interested in herding sheep and living the farm life</label>

						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === 'C'}
							onChange={this.onRadioChangeTwo}
							value="C"
						/>
						<label htmlFor="I have no special interest">I have no special interest </label>
					</section>
				</div>
			);
		}
		if (q == 3) {
			return (
				<div style={{ color: 'red' }} className="formQuestions">
					Fråga 3
					<section className="questionThree">
						<h2>Do you like dawgs?</h2>
						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'A'}
							onChange={this.onRadioChangeThird}
							value="A"
						/>
						<label htmlFor="Very mucho!">Very mucho! </label>

						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'B'}
							onChange={this.onRadioChangeThird}
							value="B"
						/>
						<label htmlFor="Not at all">Not at all </label>

						<input
							type="radio"
							name="likes"
							checked={this.state.thirdValue === 'C'}
							onChange={this.onRadioChangeThird}
							value="C"
						/>
						<label htmlFor="Yaaas ofc!">Yaaas ofc! </label>
						
					</section>
				
				</div>
			);
		}
		return null;
	}

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
