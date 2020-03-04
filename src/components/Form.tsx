import * as React from "react";

export interface FormState {
  chosenValue: string
}

class Form extends React.Component<{}, FormState> {

  constructor(props?: any) {
    super(props);
    this.state = { 
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
          
          <li>
            <label htmlFor="Yes">Yes</label>
            <input
              type="radio"
              name="active"
              checked={this.state.chosenValue === "Yes"}
              onChange={this.onRadioChange}
              value="Yes" />
          </li>
          <li>
            <label htmlFor="No">No</label>
            <input
              type="radio"
              name="active"
              checked={this.state.chosenValue === "No"}
              onChange={this.onRadioChange}
              value="No" />
          </li>

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
  // togglePrev: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  //toggleNext: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  /*
  
render() {
  return (*/
  // <div className="wrapper">
  //   <div className="form-wrapper">

  //     {/* <button className="toggle-prev" onClick={this.togglePrev}>Previous</button> */}
  //     {/* <button className="toggle-next" onClick={this.toggleNext}>Next</button> */}
  //   </div>
  // </div>
  /*);
}
 

  displayRadioValue(id: string){ 
    const radios: HTMLInputElement = document.getElementById("active") as HTMLInputElement; // list of radio buttons 
    var value = localStorage.getElementById("active").value; // local storage value
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value == value){
          radios[i].checked = true; // marking the required radio as checked
          
        }
      
    }
                     
      } */
}





//   handleSubmit() {
//     // hantera submit all values 
//   }

//   handleTogglePrev() {
//       console.log("something worked toggle prev");
//       // gå till nästa fråga
//   }

//   handleToggleNext() {
//       console.log("something worked toggle next");
//       // gå tillbaka till fråga
//   }

export default Form;
