export function sortByDate(
  a: { slug: string; date: string; title: string; desc: string; time: string },
  b: { slug: string; date: string; title: string; desc: string; time: string },
): number {
  let a_date = new Date(a.date);
  let b_date = new Date(b.date);
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
