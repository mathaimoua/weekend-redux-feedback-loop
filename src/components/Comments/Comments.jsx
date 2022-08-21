import "./Comments.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Comments() {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer);
  const history = useHistory();
  const [comments, setComments] = useState(data.comments);

  const handleNext = () => {
    event.preventDefault();
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
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={handleNext}>
        <textarea
          className="commentInput"
          type="text"
          onChange={handleComments}
          maxLength='175'
          value={comments}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Comments;
