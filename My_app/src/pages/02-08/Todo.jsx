// import React, { useState } from "react";
// import Delete from "./Delete";

// const Todo = () => {
//   const [todos, setTodos] = useState(["wake up a 6:00am"]);
//   const [newTodo, setNewTodo] = useState("");
//   function handleChange(event) {
//     setNewTodo(event.target.value);
//     const [showPopup, setShowPopup] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);

//   const handleChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleClick = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([...todos, newTodo]);
//       setNewTodo("");
//     }
//   };

//   const confirmDelete = (idx) => {
//     setDeleteIndex(idx); 
//     setShowPopup(true); 
//   };

//   const handleConfirmDelete = () => {
//     setTodos(todos.filter((_, index) => index !== deleteIndex));
//     setShowPopup(false); 
//     setDeleteIndex(null);
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };
//     // console.log(event.target.value, "event.target.value");
//   }
//   function handleSubmit() {
//     setTodos([...todos, newTodo]);
//     setNewTodo("");
//   }
//   return (
//     <div>
//       {/* <h1>{newTodo}</h1> */}
//       <input type="text" value={newTodo} onChange={handleChange} />
//       <button onClick={handleSubmit}>Add Todo</button>
//       <h1>My Todos :-</h1>
//       {todos.map((todo, i) => (
//         <h5 key={todo}>
//           {i + 1}. {todo}
//         </h5>
        
//       {todos.map((todo, idx) => (
//         <h2 key={idx}>
//           {idx + 1}. {todo}{" "}
//           <button onClick={() => confirmDelete(idx)}>Delete</button>
//         </h2>
//       ))}

//       {showPopup && (
//         <Delete
//           onConfirm={handleConfirmDelete}
//           onCancel={handleCancel}
//       ))}
      
//     </div>
//   );
// };

// export default Todo;



// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import Delete from "./Delete"; // Import Delete component


// const Todo = () => {
//   const [todos, setTodos] = useState(["code", "eat"]);
//   const [newTodo, setNewTodo] = useState("");


//   const [showPopup, setShowPopup] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);

//   const handleChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleClick = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([...todos, newTodo]);
//       setNewTodo("");
//     }
//   };

//   const confirmDelete = (idx) => {
//     setDeleteIndex(idx); 
//     setShowPopup(true); 
//   };

//   const handleConfirmDelete = () => {
//     setTodos(todos.filter((_, index) => index !== deleteIndex));
//     setShowPopup(false); 
//     setDeleteIndex(null);
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="add todo"
//         value={newTodo}
//         onChange={handleChange}
//       />
//       <button onClick={handleClick}>Add</button>

//       {todos.map((todo, idx) => (
//         <h2 key={idx}>
//           {idx + 1}. {todo}{" "}
//           <button onClick={() => confirmDelete(idx)}>Delete</button>
//         </h2>
//       ))}

//       {showPopup && (
//         <Delete
//           onConfirm={handleConfirmDelete}
//           onCancel={handleCancel}
//         />
//       )}
//     </>
//   );
// };

// export default Todo;



import React, { useState } from "react";
import Delete from "./Delete";

const Todo = () => {
  const [todos, setTodos] = useState(["wake up at 6:00am"]);
  const [newTodo, setNewTodo] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const confirmDelete = (idx) => {
    setDeleteIndex(idx);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setTodos(todos.filter((_, index) => index !== deleteIndex));
    setShowPopup(false);
    setDeleteIndex(null);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div>

        <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Todo</button>

      <h1>My Todos:</h1>
      {todos.map((todo, idx) => (
        <h2 key={idx}>
          {idx + 1}. {todo}{" "}
          <button onClick={() => confirmDelete(idx)}>Delete</button>
        </h2>
        
      ))}

      {showPopup && (
        <Delete onConfirm={handleConfirmDelete} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default Todo;
