export default function getStudentIdsSum(list) {
  return list.reduce((sum, student) => student.id + sum, 0);
}