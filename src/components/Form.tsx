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

  /** 
   * Renders the form.
   */
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h1> Form </h1>
				<ul>
					{this.questionParse(this.state.questionNumber)}

					<button type="button" onClick={() => this.previousQuestion()}>
						Previous
					</button>

					<button type="submit">Next</button>
				</ul>
			</form>
		);
	}

  /**
   * Checks questionNumber for invalid value.
   * Decrements the state questionNumber by 1.
   */
	previousQuestion() {
		if (this.state.questionNumber == 1) {
			alert('Nu blev det fel!');
		} else {
			this.setState({
				questionNumber: this.state.questionNumber - 1
			});
		}
	}

  /**
   * Void is not assignable to onSubmit which expects a function.
   * When button "next" is pressed, onSubmit is executed.
   * If questionNumber is out of bounds, the form is finished.
   * !!!More documentation required!!! (Emma?, Jonte?)
   */
	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (this.state.questionNumber == 3) {
			alert('Visa resultat!');
		} else {
			e.preventDefault();
			console.log(this.state);
			const { firstValue } = this.state;
			localStorage.setItem('firstValue', firstValue);
			const { secondValue } = this.state;
			localStorage.setItem('secondValue', secondValue);
			this.setState({
				questionNumber: this.state.questionNumber + 1
			});
		}
	};

  /**
   * !!!More documentation required!!! (Emma?, Jonte?)
   */
	onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			firstValue: e.target.value
		});
	};

   /**
   * !!!More documentation required!!! (Emma?, Jonte?)
   */
	onRadioChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			secondValue: e.target.value
		});
	};
}

export default Form;
