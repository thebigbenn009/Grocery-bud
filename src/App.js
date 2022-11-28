import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Form from "./Form";

function App() {
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  function addItem(item) {
    //work to be done here
    if (item.trim().length === 0) {
      setAlert({
        show: true,
        msg: "please enter an item",
        type: "danger",
      });
      return;
    } else if (item && isEditing) {
    }
    setList((list) => {
      setAlert({
        show: true,
        msg: "item added to the list",
        type: "success",
      });
      return [...list, item];
    });
  }
  function deleteItem(id) {
    setAlert({
      show: true,
      msg: "item removed",
      type: "danger",
    });
    setList((list) => {
      return list.filter((item, index) => index !== id);
    });
  }

  function clearItem() {
    setAlert({
      show: true,
      msg: "empty list",
      type: "danger",
    });
    setList([]);
  }
  function editItem(id) {
    setIsEditing(true);
     const itemToEdit = list.find((item, index)=>id === index)
     console.log(itemToEdit);
    
  }
  return (
    <section className="section-center">
      <Form
        onSubmit={addItem}
        {...alert}
        isEdit={isEditing}
        list={list}
     
      />
      <List
        onClear={clearItem}
        list={list}
        onDelete={deleteItem}
        onEdit={editItem}
      />
    </section>
  );
}

export default App;
