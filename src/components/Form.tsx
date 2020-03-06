import * as React from 'react';

export interface FormState {
	firstValue: string;
	secondValue: string;
	questionNumber: number;
}

class Form extends React.Component<{}, FormState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			questionNumber: 1,
			firstValue: '',
			secondValue: ''
		};
		this.questionParse = this.questionParse.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
	}

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
							checked={this.state.firstValue === 'Very active'}
							onChange={this.onRadioChangeFirst}
							value="Very active"
						/>
						<label htmlFor="Very active">Very active </label>

						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === 'Not very active'}
							onChange={this.onRadioChangeFirst}
							value="Not very active"
						/>
						<label htmlFor="Not very active">Not very active </label>

						<input
							type="radio"
							name="active"
							checked={this.state.firstValue === "I'm an athletic"}
							onChange={this.onRadioChangeFirst}
							value="I'm an athletic"
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
							checked={this.state.secondValue === "I'm interested in hunting, search or rescue training"}
							onChange={this.onRadioChangeTwo}
							value="I'm interested in hunting, search or rescue training"
						/>
						<label htmlFor="I'm interested in hunting, search or rescue training">
							I'm interested in hunting, search or rescue training{' '}
						</label>

						<input
							type="radio"
							name="interest"
							checked={
								this.state.secondValue === "I'm interested in herding sheep and living the farm life"
							}
							onChange={this.onRadioChangeTwo}
							value="I'm interested in herding sheep and living the farm life"
						/>
						<label htmlFor="I'm interested in herding sheep and living the farm life">
							I'm interested in herding sheep and living the farm life{' '}
						</label>

						<input
							type="radio"
							name="interest"
							checked={this.state.secondValue === 'I have no special interest'}
							onChange={this.onRadioChangeTwo}
							value="I have no special interest"
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
							checked={this.state.firstValue === 'Very mucho!'}
							onChange={this.onRadioChangeFirst}
							value="Very mucho!"
						/>
						<label htmlFor="Very mucho!">Very mucho! </label>

						<input
							type="radio"
							name="likes"
							checked={this.state.firstValue === 'Not at all'}
							onChange={this.onRadioChangeFirst}
							value="Not at all"
						/>
						<label htmlFor="Not at all">Not at all </label>

						<input
							type="radio"
							name="likes"
							checked={this.state.firstValue === 'Yaaas ofc!'}
							onChange={this.onRadioChangeFirst}
							value="Yaaas ofc!"
						/>
						<label htmlFor="Yaaas ofc!">Yaaas ofc! </label>
					</section>
				</div>
			);
		}
		return null;
	}

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

	previousQuestion() {
		if (this.state.questionNumber == 1) {
			alert('Nu blev det fel!');
		} else {
			this.setState({
				questionNumber: this.state.questionNumber - 1
			});
		}
	}

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

	onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			firstValue: e.target.value
		});
	};
	onRadioChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			secondValue: e.target.value
		});
	};
}

export default Form;
