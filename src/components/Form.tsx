import * as React from "react";



class Form extends React.Component {    
    
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
  
        </div>
      </div>
    );
  }
 

    displayRadioValue(){ 
      const radios: HTMLInputElement = document.getElementById("active") as HTMLInputElement; // list of radio buttons 
      var value = localStorage.getElementById("active").value; // local storage value
      
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == value){
            radios[i].checked = true; // marking the required radio as checked
            
          }
        
      }
                       
        } 
    } 
  

  
export default Form;
