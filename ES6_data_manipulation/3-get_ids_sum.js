export default function getStudentIdsSum(list) {
  return Array.isArray(list)
    ? list.reduce((sum, student) => sum + student.id, 0)
    : 0;
}
