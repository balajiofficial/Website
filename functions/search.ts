export const search = (
  post: { title: string; desc: string; slug: string; date: string },
  searchText: string
): boolean => {
  searchText = searchText.toLowerCase();
  if (
    post.title.toLowerCase().includes(searchText) ||
    post.desc.toLowerCase().includes(searchText) ||
    post.date.toLowerCase().includes(searchText)
  ) {
    return true;
  } else {
    return false;
  }
};
