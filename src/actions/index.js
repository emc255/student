import hatchway from "../api/hatchways";
import { FETCH_STUDENTS, 
  SEARCH_STUDENTS,
  SHOW_MORE_INFO,
  ADD_TAG,
  SEARCH_BY_TAG,
  UPDATE_DATA
} from "./types";

export const fetchStudents = () =>  async (dispatch) => {
    const {data:{students}} = await hatchway.get("/students");
    let datas = [];

    students.forEach(element => {
      const isActive = false;
      const tags = []; 
      element = {...element, isActive, tags };
      datas.push(element);
    });
    
    dispatch({type: FETCH_STUDENTS, payload: datas})
  };

  export const showMoreInfo = (userId) => {
    return {
      type: SHOW_MORE_INFO,
      payload: userId,
    };
  };

  export const searchStudents = (term) => {
    return {
      type: SEARCH_STUDENTS,
      payload: term,
    };
  };

  export const addtag = (userId, term) => {
    const tagObj = {id: userId, tagName: term};
    return {
      type: ADD_TAG,
      payload: tagObj
    };
  };
  
  export const searchByTag = (term) => {
    return {
      type: SEARCH_BY_TAG,
      payload: term,
    };
  };

  export const updateData = () => {
    return {
      type: UPDATE_DATA,
    };
  };