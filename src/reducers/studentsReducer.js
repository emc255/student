import { FETCH_STUDENTS, 
  SEARCH_STUDENTS,
  SHOW_MORE_INFO,
  ADD_TAG,
  SEARCH_BY_TAG,
  UPDATE_DATA
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action.payload;
    
    case SHOW_MORE_INFO:
      let datas = [];
      state.forEach(element => {
        if(element.id === action.payload) {
          element.isActive = !element.isActive;
        }
        datas.push(element);
      });
      return datas;

    case SEARCH_STUDENTS:
      const term = action.payload;
      const newState = state.filter(student => student.firstName.toLowerCase().includes(term.toLowerCase(), 0)|| student.lastName.toLowerCase().includes(term.toLowerCase(), 0));
      return newState;
    
    case ADD_TAG:
      let dataTag = [];
      state.forEach(element => {
        if(element.id === action.payload.id) {
          element.tags.push(action.payload.tagName)
        }
        dataTag.push(element);
      });
      return dataTag;

      case SEARCH_BY_TAG:
        const tag = action.payload;
        let tagList = [];
        state.forEach(element => {
          element.tags.forEach(ele => {
            if(ele.toLowerCase().includes(tag.toLowerCase(), 0)){
              tagList.push(element);
            }
          });
          
        });
        return tagList;
      case UPDATE_DATA:
        let updateDatas = [];
        state.forEach(element => {
          updateDatas.push(element);
        });
        return updateDatas;
        
      default:
      return state;

     ;
  }
};