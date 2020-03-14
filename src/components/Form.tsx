import * as React from 'react';

import ResultsContainer from "./ResultsContainer";

export interface FormState {
	firstValue: string;
	secondValue: string;
	thirdValue: string;
	fourthValue: string;
	fifthValue: string;
	sixthValue: string;
	seventhValue: string;
	eightValue: string;
	ninthValue: string;
	tenthValue: string;
	eleventhValue: string;
	questionNumber: number;
	isFormFinished: boolean;
	formResult: string;
	showEmptyInputWarning: boolean;
}

class Form extends React.Component<{}, FormState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			questionNumber: 1,
			firstValue: '',
			secondValue: '',
			thirdValue: '',
			fourthValue: '',
			fifthValue: '',
			sixthValue: '',
			seventhValue: '',
			eightValue: '',
			ninthValue: '',
			tenthValue: '',
			eleventhValue: '',
			isFormFinished: false,

			formResult: '',
			showEmptyInputWarning: false,
		};
		this.questionParse = this.questionParse.bind(this);
		this.previousQuestion = this.previousQuestion.bind(this);
	}

	/** 
   	 * Renders the form.
   	 */
	render() {
		return (
			this.state.isFormFinished ?
				<ResultsContainer result={this.state.formResult} /> :
				<form onSubmit={(
					event: React.FormEvent<HTMLFormElement>) => {
					this.onSubmit(document.querySelectorAll('input'), event)
				}}>
					{this.questionParse(this.state.questionNumber)}
					{this.state.showEmptyInputWarning ? <p className="errorPopup fadeInOut"><i>Woof!</i> Please answer before proceeding to the next question.</p>
						: null}
					<div className="rowButtons">
						{this.state.questionNumber == 1 ? null :
							<button type="button" onClick={() => this.previousQuestion()}>Previous</button>}
						<button type="submit">Next</button>
					</div>
				</form>
		);
	}

	/**
	 * This function handles argument q and compares it to all question statements. 
	 * Returns the correct question.
	 * @param q The question index as number.
	 * @returns HTML-element with question and input fields.
	 */
	questionParse(q: number) {
		if (q == 1) {
			return (
				<div className="formQuestions">
					<h2>What is your experience with dogs?</h2>
					<div>
						<input
							type="radio"
							name="experience"
							checked={this.state.firstValue === 'A'}
							id="New to dogs"
							onChange={this.onRadioChangeFirst}
							value="A" />
						<label htmlFor="New to dogs">New to dogs </label>
					</div>

					<div>
						<input
							type="radio"
							name="experience"
							checked={this.state.firstValue === 'B'}
							id="Currently own a dog"
							onChange={this.onRadioChangeFirst}
							value="B"
						/>
						<label htmlFor="Currently own a dog">Currently own a dog </label>
					</div>

					<div>
						<input
							type="radio"
							name="experience"
							checked={this.state.firstValue === "C"}
							id="I'm very well-experienced with dogs"
							onChange={this.onRadioChangeFirst}
							value="C"
						/>
						<label htmlFor="I'm very well-experienced with dogs">I'm very well-experienced with dogs </label>
					</div>
				</div>
			);
		}
		if (q == 2) {
			return (
				<div className="formQuestions">
					<h2>How active are you?</h2>
					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.secondValue === "A"}
							id="Not very active"
							onChange={this.onRadioChangeSecond}
							value="A"
						/>
						<label htmlFor="Not very active">Not very active </label>
					</div>

					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.secondValue === "B"}
							id="Very active"
							onChange={this.onRadioChangeSecond}
							value="B"
						/>
						<label htmlFor="Very active">Very active </label>
					</div>

					<div>
						<input
							type="radio"
							name="active"
							checked={this.state.secondValue === 'C'}
							id="I’m an athletic"
							onChange={this.onRadioChangeSecond}
							value="C"
						/>
						<label htmlFor="I’m an athletic">I’m an athletic </label>
					</div>
				</div>
			);
		}
		if (q == 3) {
			return (
				<div className="formQuestions">
					<h2>What energy do you prefer?</h2>
					<div>
						<input
							type="radio"
							name="energy"
							checked={this.state.thirdValue === "A"}
							id="Low"
							onChange={this.onRadioChangeThird}
							value="A"
						/>
						<label htmlFor="Low">Low </label>
					</div>

					<div>
						<input
							type="radio"
							name="energy"
							checked={this.state.thirdValue === "B"}
							id="Medium"
							onChange={this.onRadioChangeThird}
							value="B"
						/>
						<label htmlFor="Medium">Medium </label>
					</div>

					<div>
						<input
							type="radio"
							name="energy"
							checked={this.state.thirdValue === 'C'}
							id="High"
							onChange={this.onRadioChangeThird}
							value="C"
						/>
						<label htmlFor="High">High </label>
					</div>
				</div>
			);
		}
		if (q == 4) {
			return (
				<div className="formQuestions">
					<h2>Do you want a cuddle buddy?</h2>
					<div>
						<input
							type="radio"
							name="cuddle"
							checked={this.state.fourthValue === "A"}
							id="Yes would love that"
							onChange={this.onRadioChangeFourth}
							value="A"
						/>
						<label htmlFor="Yes would love that">Yes would love that </label>
					</div>

					<div>
						<input
							type="radio"
							name="cuddle"
							checked={this.state.fourthValue === "B"}
							id="No thanks, I’m independent"
							onChange={this.onRadioChangeFourth}
							value="B"
						/>
						<label htmlFor="No thanks, I’m independent">No thanks, I’m independent </label>
					</div>

					<div>
						<input
							type="radio"
							name="cuddle"
							checked={this.state.fourthValue === 'C'}
							id="Doesn’t matter"
							onChange={this.onRadioChangeFourth}
							value="C"
						/>
						<label htmlFor="Doesn’t matter">Doesn’t matter </label>
					</div>
				</div>
			);
		}
		if (q == 5) {
			return (
				<div className="formQuestions">
					<h2>How is your living area?</h2>
					<div>
						<input
							type="radio"
							name="living"
							checked={this.state.fifthValue === "A"}
							id="Small space living"
							onChange={this.onRadioChangeFifth}
							value="A"
						/>
						<label htmlFor="Small space living">Small space living </label>
					</div>

					<div>
						<input
							type="radio"
							name="living"
							checked={this.state.fifthValue === "B"}
							id="Not small, but not big. But the nature is around my corner"
							onChange={this.onRadioChangeFifth}
							value="B"
						/>
						<label htmlFor="Not small, but not big. But the nature is around my corner">Not small, but not big. But the nature is around my corner </label>
					</div>

					<div>
						<input
							type="radio"
							name="living"
							checked={this.state.fifthValue === 'C'}
							id="Big space living inside and out"
							onChange={this.onRadioChangeFifth}
							value="C"
						/>
						<label htmlFor="Big space living inside and out">Big space living inside and out </label>
					</div>
				</div>
			);
		}
		if (q == 6) {
			return (
				<div className="formQuestions">
					<h2>Where do you live?</h2>
					<div>
						<input
							type="radio"
							name="live"
							checked={this.state.sixthValue === "A"}
							id="In the city or the suburbs"
							onChange={this.onRadioChangeSixth}
							value="A"
						/>
						<label htmlFor="In the city or the suburbs">In the city or the suburbs </label>
					</div>

					<div>
						<input
							type="radio"
							name="live"
							checked={this.state.sixthValue === "B"}
							id="I'm living in the middle of the woods"
							onChange={this.onRadioChangeSixth}
							value="B"
						/>
						<label htmlFor="I'm living in the middle of the woods">I'm living in the middle of the woods </label>
					</div>

					<div>
						<input
							type="radio"
							name="live"
							checked={this.state.sixthValue === 'C'}
							id="At the country side"
							onChange={this.onRadioChangeSixth}
							value="C"
						/>
						<label htmlFor="At the country side">At the country side </label>
					</div>
				</div>
			);
		}
		if (q == 7) {
			return (
				<div className="formQuestions">
					<h2>Do you have a yard?</h2>
					<div>
						<input
							type="radio"
							name="yard"
							checked={this.state.seventhValue === "A"}
							id="Yes a small one, or no yard at all"
							onChange={this.onRadioChangeSeventh}
							value="A"
						/>
						<label htmlFor="Yes a small one, or no yard at all">Yes a small one, or no yard at all </label>
					</div>

					<div>
						<input
							type="radio"
							name="yard"
							checked={this.state.seventhValue === "B"}
							id="Yes the woods is my yard"
							onChange={this.onRadioChangeSeventh}
							value="B"
						/>
						<label htmlFor="Yes the woods is my yard">Yes the woods is my yard </label>
					</div>

					<div>
						<input
							type="radio"
							name="yard"
							checked={this.state.seventhValue === 'C'}
							id="My farm is my yard"
							onChange={this.onRadioChangeSeventh}
							value="C"
						/>
						<label htmlFor="My farm is my yard">My farm is my yard </label>
					</div>
				</div>
			);
		}
		if (q == 8) {
			return (
				<div className="formQuestions">
					<h2>How much daily exercise will you give your dog?</h2>
					<div>
						<input
							type="radio"
							name="exercise"
							checked={this.state.eightValue === "A"}
							id="Almost one hour every day or more, obedience is fun"
							onChange={this.onRadioChangeEight}
							value="A"
						/>
						<label htmlFor="Almost one hour every day or more, obedience is fun">Almost one hour every day or more, obedience is fun </label>
					</div>

					<div>
						<input
							type="radio"
							name="exercise"
							checked={this.state.eightValue === "B"}
							id="A lot of exercise, mostly related to hunting or search work"
							onChange={this.onRadioChangeEight}
							value="B"
						/>
						<label htmlFor="A lot of exercise, mostly related to hunting or search work">A lot of exercise, mostly related to hunting or search work </label>
					</div>

					<div>
						<input
							type="radio"
							name="exercise"
							checked={this.state.eightValue === 'C'}
							id="We are going to focus on specific training and work every week related to herding"
							onChange={this.onRadioChangeEight}
							value="C"
						/>
						<label htmlFor="We are going to focus on specific training and work every week related to herding">We are going to focus on specific training and work every week related to herding </label>
					</div>
				</div>
			);
		}
		if (q == 9) {
			return (
				<div className="formQuestions">
					<h2>What dog size do you prefer?</h2>
					<div>
						<input
							type="radio"
							name="size"
							checked={this.state.ninthValue === "A"}
							id="Small size"
							onChange={this.onRadioChangeNinth}
							value="A"
						/>
						<label htmlFor="Small size">Small size </label>
					</div>

					<div>
						<input
							type="radio"
							name="size"
							checked={this.state.ninthValue === "B"}
							id="Medium size"
							onChange={this.onRadioChangeNinth}
							value="B"
						/>
						<label htmlFor="Medium size">Medium size </label>
					</div>

					<div>
						<input
							type="radio"
							name="size"
							checked={this.state.ninthValue === 'C'}
							id="Big size"
							onChange={this.onRadioChangeNinth}
							value="C"
						/>
						<label htmlFor="Big size">Big size </label>
					</div>
				</div>
			);
		}
		if (q == 10) {
			return (
				<div className="formQuestions">
					<h2>What dog coat do you prefer?</h2>
					<div>
						<input
							type="radio"
							name="coat"
							checked={this.state.tenthValue === "A"}
							id="Naked"
							onChange={this.onRadioChangeTenth}
							value="A"
						/>
						<label htmlFor="Naked">Naked </label>
					</div>

					<div>
						<input
							type="radio"
							name="coat"
							checked={this.state.tenthValue === "B"}
							id="Short"
							onChange={this.onRadioChangeTenth}
							value="B"
						/>
						<label htmlFor="Short">Short </label>
					</div>

					<div>
						<input
							type="radio"
							name="coat"
							checked={this.state.tenthValue === 'C'}
							id="Long"
							onChange={this.onRadioChangeTenth}
							value="C"
						/>
						<label htmlFor="Long">Long </label>
					</div>
				</div>
			);
		}
		if (q == 11) {
			return (
				<div className="formQuestions">
					<h2>Do you have any special interest?</h2>
					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.eleventhValue === 'A'}
							id="I have no special interest"
							onChange={this.onRadioChangeEleventh}
							value="A"
						/>
						<label htmlFor="I have no special interest">I have no special interest. </label>
					</div>

					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.eleventhValue === 'B'}
							id="I’m interested in hunting, search or rescue training"
							onChange={this.onRadioChangeEleventh}
							value="B"
						/>
						<label htmlFor="I’m interested in hunting, search or rescue training">I’m interested in hunting, search or rescue training. </label>
					</div>

					<div>
						<input
							type="radio"
							name="interest"
							checked={this.state.eleventhValue === 'C'}
							id="I’m interested in herding sheep and living the farm life"
							onChange={this.onRadioChangeEleventh}
							value="C"
						/>
						<label htmlFor="I’m interested in herding sheep and living the farm life">I’m interested in herding sheep and living the farm life. </label>
					</div>
				</div>
			);
		}
		return null;
	}

	/**
   	 * Function created for handling selected answers in form
   	 */
	handleResult() {
		let A = 0;
		let B = 0;
		let C = 0;
		Object.getOwnPropertyNames(this.state).map(
			answer => {
				if (this.state[answer] === 'A') {
					A++;
				} else if (this.state[answer] === 'B') {
					B++;
				} else if (this.state[answer] === 'C') {
					C++;
				}
			})
		this.countResult(A, B, C)
	}

	/**
	 * Function created for counting result in form
	 * @param A input value A
	 * @param B input value B
	 * @param C input value C
	 */
	countResult(A: number, B: number, C: number) {
		if (A > B && A > C) {
			this.answersA();
		} else if (B > A && B > C) {
			this.answersB();
		} else if (C > A && C > B) {
			this.answersC();
		} else {
			console.log("alla hundar passar dig")
			this.answersABC();
		}
	}

	/**
   	 * Functions for showing result
   	 */
	answersA() {
		console.log("En sällskapshunds skulle passa dig");
		this.setState({
			formResult: "sällskapshund"
		});
	}

	answersB() {
		console.log("En jakthund skulle passa dig");
		this.setState({
			formResult: "jakthund"
		});
	}

	answersC() {
		console.log("En vallhund skulle passa dig");
		this.setState({
			formResult: "vallhund"
		});
	}

	answersABC() {
		console.log("Alla hundraser passar dig");
		this.setState({
			formResult: "hundraser"
		});
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
	 * When button "next" is pressed, onSubmit is executed.
	 * If questionNumber is out of bounds, the form is finished.
	 * If any radio button has been checked, it saves the value.
	 * If conditions above have not been met, show error pop-up.
	 * @param inputs All currently rendered radio button inputs.
	 * @param event Submit event from form, only used to prevent page refresh.
	 */
	onSubmit = (inputs: NodeListOf<HTMLInputElement>, event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { firstValue, secondValue, thirdValue } = this.state;

		// Checks if last question has been submitted
		if (this.state.eleventhValue != "") {
			localStorage.setItem('firstValue', firstValue);
			localStorage.setItem('secondValue', secondValue);
			localStorage.setItem('thirdValue', thirdValue);
			const { fourthValue } = this.state;
			localStorage.setItem('fourthValue', fourthValue);
			const { fifthValue } = this.state;
			localStorage.setItem('fifthValue', fifthValue);
			const { sixthValue } = this.state;
			localStorage.setItem('sixthValue', sixthValue);
			const { seventhValue } = this.state;
			localStorage.setItem('seventhdValue', seventhValue);
			const { eightValue } = this.state;
			localStorage.setItem('eightValue', eightValue);
			const { ninthValue } = this.state;
			localStorage.setItem('ninthValue', ninthValue);
			const { tenthValue } = this.state;
			localStorage.setItem('tenthValue', tenthValue);
			const { eleventhValue } = this.state;
			localStorage.setItem('eleventhValue', eleventhValue);

			this.setState({
				isFormFinished: true
			});

			this.handleResult();

		} // Checks if any radio button is checked in form is.
		else if (Array.from(inputs).some(input => input.checked == true)) {
			localStorage.setItem('firstValue', firstValue);
			localStorage.setItem('secondValue', secondValue);
			localStorage.setItem('thirdValue', thirdValue);
			const { fourthValue } = this.state;
			localStorage.setItem('fourthValue', fourthValue);
			const { fifthValue } = this.state;
			localStorage.setItem('fifthValue', fifthValue);
			const { sixthValue } = this.state;
			localStorage.setItem('sixthValue', sixthValue);
			const { seventhValue } = this.state;
			localStorage.setItem('seventhdValue', seventhValue);
			const { eightValue } = this.state;
			localStorage.setItem('eightValue', eightValue);
			const { ninthValue } = this.state;
			localStorage.setItem('ninthValue', ninthValue);
			const { tenthValue } = this.state;
			localStorage.setItem('tenthValue', tenthValue);
			const { eleventhValue } = this.state;
			localStorage.setItem('eleventhValue', eleventhValue);

			this.setState({
				questionNumber: this.state.questionNumber + 1
			});
		} else {
			this.setState({
				showEmptyInputWarning: true,
			})
			setTimeout(() => {
				this.setState({
					showEmptyInputWarning: false
				})
			}, 4800);
		}
	};

	/**
	 * Event handlers for each question in form
	 */
	onRadioChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			firstValue: e.target.value
		});
	};

	onRadioChangeSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			secondValue: e.target.value
		});
	};

	onRadioChangeThird = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			thirdValue: e.target.value
		});
	};
	onRadioChangeFourth = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			fourthValue: e.target.value
		});
	};
	onRadioChangeFifth = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			fifthValue: e.target.value
		});
	};
	onRadioChangeSixth = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			sixthValue: e.target.value
		});
	};
	onRadioChangeSeventh = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			seventhValue: e.target.value
		});
	};
	onRadioChangeEight = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			eightValue: e.target.value
		});
	};
	onRadioChangeNinth = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			ninthValue: e.target.value
		});
	};
	onRadioChangeTenth = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			tenthValue: e.target.value
		});
	};
	onRadioChangeEleventh = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			eleventhValue: e.target.value
		});
	};
}

export default Form;
