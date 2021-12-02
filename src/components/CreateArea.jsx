import React, { useState } from "react";

function CreateArea(props) {
  const [newNoteInput, setNewNoteInput] = useState({
    title: "",
    content: ""
  });

  function changeText(e) {
    const { name, value } = e.target;
    setNewNoteInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    props.createNote(newNoteInput);
    e.preventDefault();
    setNewNoteInput({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={changeText}
          value={newNoteInput.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeText}
          value={newNoteInput.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
