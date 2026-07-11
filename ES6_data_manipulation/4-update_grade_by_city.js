export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter(student => student.location == city)
    
    .map(student => {
      const result = newGrades.find(g => g.studentId == student.id);

      if (result) {
        return { ...student, grade: result.grade };
      }

      return { ...student, grade: "N/A" };
    });
}
