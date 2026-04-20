import React, { useState } from "react";
//import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';  

function CreateArea(props) {

  const[isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded? 3 : 1}
        />

        <Zoom in={isExpanded}>
  <button onClick={submitNote}>
    <AddIcon />
  </button>
</Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
