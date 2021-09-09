export default function PostH4({ children, ...props }) {
  return (
    <h4 className="text-2xl font-inter font-semibold mb-2 mt-2" {...props}>
      {children}
    </h4>
  );
}
