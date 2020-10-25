import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {showMoreInfo} from "../actions";
import "../css/styles.css";
import AddTag from "./AddTag";
import Grade from "./Grade";

const StudentItem = () => {
	const students = useSelector((state) => state.students);
	const dispatch = useDispatch();
	
  const getStudentAverage = (grades) => {
		let sum = 0;
		for (const grade of grades) {
			sum += parseInt(grade);
		}
		return (sum/grades.length).toFixed(2);
  }

  const showGrades = (e) => {
		dispatch(showMoreInfo(e.target.dataset.value));
  }

  const renderStudents = students.map((student) => { 
		const plusOrMinus = student.isActive === true ? "-" : "+";
		const additionalInfo = student.isActive === false ? "show-more-info" : "";
    return (
      <div className={`student-container `} key={student.id}>
					
				<div className="image-container">
					<img src={student.pic} alt="profile"/>
				</div>
					
				<div className="student-info-container">
					<div className="student-info-upper-container">
            <div className="student-name">{student.firstName} {student.lastName}</div>
            <div className="collapsable-plus-sign" data-value={student.id} onClick={showGrades}>{plusOrMinus}</div>
					</div>

					<div className="student-info-lower-container">
						<div>Email: {student.email}</div>
						<div>Company: {student.company}</div>
						<div>Skill: {student.skill}</div>
						<div>Average: {getStudentAverage(student.grades)}%</div>
            <div className={additionalInfo} >
							<Grade grades={student.grades}/>
							<AddTag id={student.id} tags={student.tags}/>
            </div>
					</div>

				</div>
			</div>     
    );
  });

 
	return (<>{renderStudents}</>);
};

export default StudentItem;

