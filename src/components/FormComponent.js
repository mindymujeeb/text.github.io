import React, { useState } from 'react'

export default function FormComponent(props) {
  // upperCase() --->
  const textToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }
  
  // fontStyle() --->
  const fontStyle = {
    fontStyle:"italic"
  }

  // lowerCase() --->
  const textToLowercase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }
  
  // remove spaces() --->
  const removeSpaces = () => {
    const spaces = text.replace(/\s+/g," ");
    setText(spaces);
  }

  // capitalizeCase() --->
  const capitalizeCase = () => {
    let changedText = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    setText(changedText);
  }
  
  // Toggle the mode - light or Dark --->
  const darkMode = () => {
    if(bg.color === "black"){
      const changedColor = {
        color:"white",
        backgroundColor:"#0E0E0E",
        newText:"Light-Mode",
        textAreaColor :"white",
        textAreaBackgroundColor :"#0E0E0E"
      };
      const textArea = document.querySelector("#myForm");
      document.body.style.backgroundColor = changedColor.backgroundColor;
      document.body.style.color = changedColor.color;
      textArea.style.backgroundColor = changedColor.textAreaBackgroundColor;
      textArea.style.color = changedColor.textAreaColor;
      setbg(changedColor);
    }
    else{
      const changedColor = {
        color:"black",
        backgroundColor:"white",
        newText:"Dark-Mode",
        textAreaColor :"black",
        textAreaBackgroundColor :"white"
      };
      const textArea = document.querySelector("#myForm");
      document.body.style.backgroundColor = changedColor.backgroundColor;
      document.body.style.color = changedColor.color;
      textArea.style.backgroundColor = changedColor.textAreaBackgroundColor;
      textArea.style.color = changedColor.textAreaColor;
      setbg(changedColor);
    }
  }

  // clear the text area
  const clearText = () => {
    text = "";
    setText(text);
  }

  // onChange() method but not onClick() method ---> to collect the text from the text area
  const changeText = (e) => {
    setText(e.target.value);
  }

  // defining the initial state
  let [text, setText] = useState("");
  let [bg,setbg] = useState({
    color:"black",
    backgroundColor:"white",
    newText:"Dark-Mode"
  });

  // returning the JSX to App component
  return (
    <div>
      <br />
      <div className='container my-2'>
        <h3 style={fontStyle}>Type the text in the Text-Box below</h3>
        <div className="mb-3 my-2">
          <textarea className="form-control" onChange={changeText} value={text} id="myForm" rows="8"></textarea>
        </div>
        <button className='btn btn-primary my-2' onClick={textToUppercase} type='submit'>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={textToLowercase} type='submit'>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1 my-2' onClick={removeSpaces} type='submit'>Remove Extra spaces</button>
        <button className='btn btn-primary mx-1 my-2' onClick={clearText} type='submit'>Clear Text</button>
        <button className='btn btn-primary mx-1 my-2' onClick={capitalizeCase} type='submit'>Capitalize</button>
        <button className='btn btn-primary mx-1 my-2' onClick={darkMode} type='submit'>{bg.newText}</button>
      </div>
      <br />
      <hr />
      <div className='container my-2' style={fontStyle}>
      <h3>Preview</h3>
      {text}
        <p>It consists of <b>{text.length}</b> letters and <b>{text.match(/(\w+)/g)?text.match(/(\w+)/g).length:0}</b> words</p>
      </div>
    </div>
    )
  }
