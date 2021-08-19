export function sortByDate(a, b) {
  let a_date = new Date(a[2]);
  let b_date = new Date(b[2]);
  if (a_date.getFullYear() == b_date.getFullYear()) {
    if (a_date.getMonth() == b_date.getMonth()) {
      return b_date.getDate() - a_date.getDate();
    } else {
      return b_date.getMonth() - a_date.getMonth();
    }
  } else {
    return b_date.getFullYear() - a_date.getFullYear();
  }
}
