import "./Comments.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [comments, setComments] = useState("");

  const handleNext = () => {
    dispatch({
      type: "SAVE_COMMENTS",
      payload: { comments: comments },
    });
    history.push('/review');
  };

  const handleComments = (event) => {
    setComments(event.target.value);
  };

  return (
    <div>
      <h1>Pour yo heart out, bruv.</h1>
      <form onSubmit={handleNext}>
        <input
          className="commentInput"
          type="text"
          onChange={handleComments}
          value={comments}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Comments;
