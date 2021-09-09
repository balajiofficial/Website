export default function PostParagraph({ children, ...props }) {
  return (
    <p className="font-inter" {...props}>
      {children}
    </p>
  );
}
