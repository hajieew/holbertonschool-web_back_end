export default function getListStudentIds(list) {
  if (!Array.isArray(list)) return [];

  const ids = list.map((student) => {
    return student.id;
  });

  return ids;
}
