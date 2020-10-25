import React,{useState} from "react";
import {addtag} from "../actions";
import { useDispatch } from "react-redux";

const AddTag = ({id, tags}) => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addtag(e.target.dataset.value, term));
    setTerm("");
  };
  const renderTags = tags.map((tag,index) => {
    return(
      <div className="ui button" key={index}>{tag}</div>
    );
  });

  const checkRenderTags = renderTags ? renderTags : null;
  return (
    <div>
      <form onSubmit={onFormSubmit} data-value={id}>
        <div className="tag-container">
          {checkRenderTags}
        </div>
        <div>
          <input 
            onChange={(e) => setTerm(e.target.value)} 
            value={term} 
            type="text" 
            placeholder="Add a Tag"
            className="tag-input"
          />
        </div> 
      </form>
    </div>
  );
};

export default AddTag;