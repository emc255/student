import React from "react";

const Grade = ({grades}) => {
  const renderGrades = grades.map((grade,index) => {
    return(
      <div key={index}>Test {index+1}: {grade}</div>
    );
  });

return(<div className="grades-container">{renderGrades}</div>)
};

export default Grade;