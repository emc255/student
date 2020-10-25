import React, { useState, useEffect } from "react";

import {fetchStudents, searchStudents} from "../actions";
import { useDispatch } from "react-redux";


const Search = () => {
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
      dispatch(searchStudents(term));
      
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
          <input id="name-input" onChange={(e) => setTerm(e.target.value)} value={term} className="input" placeholder="Search By Name"/>
        </div>
      </div>
    </div>
  );
};



export default Search;
