import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(newNoteInput) {
    setItems((prevItems) => {
      return [...prevItems, newNoteInput];
    });
  }

  function deleteItem(id) {
    setItems((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={addNote} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
