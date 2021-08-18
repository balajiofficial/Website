export function sortByDate(a, b) {
  const a_date = new Date(a.frontmatter.date);
  const b_date = new Date(b.frontmatter.date);

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
