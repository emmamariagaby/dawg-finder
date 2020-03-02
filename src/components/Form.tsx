import * as React from "react";

class Form extends React.Component {
   // togglePrev: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    //toggleNext: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="A">Val A</label>
            <input type="radio" name="A" />
            <label htmlFor="B">Val B</label>
            <input type="radio" name="B" />
            <label htmlFor="C">Val C</label>
            <input type="radio" name="C" /> 
          </form>
          {/* <button className="toggle-prev" onClick={this.togglePrev}>Previous</button> */}
          {/* <button className="toggle-next" onClick={this.toggleNext}>Next</button> */}
        </div>
      </div>
    );
  }

   data = [
    {
     
    }
];

  handleSubmit() {
    // spara value
  }

  handleTogglePrev() {
      console.log("something worked toggle prev");
      // gå till nästa fråga
  }

  handleToggleNext() {
      console.log("something worked toggle next");
      // gå tillbaka till fråga
  }
}

export default Form;
