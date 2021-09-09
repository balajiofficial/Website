export default function PostUnorderedList({ children, ...props }) {
  return (
    <ul className="list-disc" {...props}>
      {children}
    </ul>
  );
}
