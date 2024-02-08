import React ,{useState}from 'react';
export default function TextForm(props) {
    const handleUpClick = () => {
      // console.log("uppercase was clicked" +text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted To UpperCase","success");
    };
  
    const handleOnChange = (event) => {
      // console.log("on change");
      setText(event.target.value);
      
    };
    
  
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    };
  
    const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared ","success");
    };
  
    const handleExtraSpaces=()=>
    {
      let newText=text.split(/[ ]+/) 
      //using rejex here will split all the spaces into an array and then combine them in one single space
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Cleared ","success");
    }
  
    // const handleCopyChange = (event) => {
    //   // console.log("on change");
    //   setText(event.target.value);
  
    // };
    const copy = async () => {
      await navigator.clipboard.writeText(text);
      alert("TEXT COPIED !");
      
    };
    const [text, setText] = useState("");
    //  text ="Fire the text !" //wrong way to change
    //  setText("newtext Fire the text !"); //correct way to change the text
    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="mybox" className="form-label"></label>
  
            <textarea
              className="form-control "
              value={text}
              onChange={handleOnChange}
              id="mybox"
              rows="8"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "light" ? "black" : "white",
              }}
            ></textarea>
          </div>
  
          <button className="btn btn-dark mx-1 my-1" onClick={copy} disabled={!text}>
            Copy 
          </button>
  
          <button className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>
            UpperCase
          </button>
  
          {/* <br></br> */}
  
          <button className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>
            LowerCase
          </button>
  
          <button className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>
            Clear
          </button>
  
          <button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
  
        </div>
  
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h2>Your Text Summary !</h2>
  
          <p>
            {text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters
          </p>
  
          <p>{0.008 * text.split(" ").length - 0.008} Minutes read</p>
        </div>
      </>
    );
  }
  