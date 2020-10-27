import React, { useState, useEffect } from "react";

import {fetchStudents, searchByTag} from "../actions";
import { useDispatch } from "react-redux";


const SearchByTag = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const searchTerm = () => {
      dispatch(searchByTag(term));
      
    };
    if (debouncedTerm) {
      searchTerm();
    } else {
      dispatch(fetchStudents());
    }

  }, [debouncedTerm,dispatch,term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input id="tag-input" onChange={(e) => setTerm(e.target.value)} value={term} className="input add-tag-input" placeholder="Search By Tag"/>
        </div>
      </div>
    </div>
  );
};

export default SearchByTag;
