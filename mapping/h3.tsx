export default function PostH3({ children, ...props }) {
  return (
    <h3 className="text-4xl font-semibold mb-2 mt-2" {...props}>
      {children}
    </h3>
  );
}
