import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, onClear, onDelete, onEdit }) => {
  function handleClear() {
    onClear(list);
  }

  return (
    <div className="grocery-container">
   
      <div className="grocery-list">
        {list.map((item, index) => {
          return (
            <article key={index} className="grocery-item">
              <p className="title">{item}</p>
              <div className="btn-container">
                <button
                  onClick={() =>{
                    onEdit(index)
                  } }
                  type="button"
                  className="edit-btn"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(index)}
                  type="button"
                  className="delete-btn"
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {list.length > 0 && (
        <button onClick={handleClear} className="clear-btn">
          clear items
        </button>
      )}
    </div>
  );
};

export default List;
