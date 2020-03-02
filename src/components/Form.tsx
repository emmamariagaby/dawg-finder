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
            <input type="radio" name="test" value="value 1"/>
            <label htmlFor="B">Val B</label>
            <input type="radio" name="test" value="value 2"/>
            <label htmlFor="C">Val C</label>
            <input type="radio" name="test" value="value 3"/> 
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

  handleSaveValue() {
    var answ1 = document.querySelector('input[name="group"]:checked').value;

    if (answ1.value == 1){
          answ1.setAttribute("checked","checked");
          answ1.checked = true;
    }
    }

  handleSubmit() {
    // hantera submit all values 
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
