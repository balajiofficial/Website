export const searchAlgo = (
  post: { title: string; desc: string; id: string; date: string },
  searchText: string
) => {
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