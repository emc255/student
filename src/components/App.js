import React, {useEffect} from "react";
import {fetchStudents} from "../actions"
import {connect} from "react-redux"

import Search from "./Search";
import StudentItem from "./StudentItem";
import SearchByTag from "./SearchByTag";

const App = ({fetchStudents}) => {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className="ui container">
        <Search/>
        <SearchByTag />
        <StudentItem />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {students: state.students}
}

export default connect (mapStateToProps,{fetchStudents}) (App);