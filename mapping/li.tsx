export default function PostListItem({ children, ...props }) {
  return (
    <li className="ml-10 mt-1 mb-1" {...props}>
      {children}
    </li>
  );
}
