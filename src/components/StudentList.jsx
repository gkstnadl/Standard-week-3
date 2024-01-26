import React from "react";

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ students }) {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} / 나이 : {student.age}, 성적 : {student.grade}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
