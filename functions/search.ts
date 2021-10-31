export function search(
  post: {
    slug: string;
    title: string;
    date: string;
    desc: string;
    time: string;
  },
  searchText: string
) {
  return (
    post.title.toLowerCase().includes(searchText.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchText.toLowerCase())
  );
}
