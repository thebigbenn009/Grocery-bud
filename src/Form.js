import React from "react";

import { useState } from "react";
import Alert from "./Alert";
function Form({ onSubmit, msg, type, isEdit}) {
  const [inputGrocery, setInputGrocery] = useState("");
  //   const [isEdit, setIsEdit] = useState(false)
  function handleInput(e) {
    const newInput = e.target.value;
    setInputGrocery(newInput);
  }
  function handleSubmit(e) {
    
    e.preventDefault();

    onSubmit(inputGrocery);
    setInputGrocery("");
  }
//   if(isEdit){
//     setInputGrocery("edithere")
//   }
  // if(isEdit){

  //     // function getEdit(id){
  //     //     const editId = list.find((item,index)=>id=== index)
  //     //     setInputGrocery(editId)
  //     // }
  // // const getEdit = list.find((item, index)=>id === index)
  // // setInputGrocery(getEdit)
  // }
  return (
    <form className="grocery-form">
      <Alert type={type} msg={msg} />
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. egg"
          value={inputGrocery}
          onChange={handleInput}
        />
        <button onClick={handleSubmit} type="submit" className="submit-btn">
          {isEdit ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
export default Form;
