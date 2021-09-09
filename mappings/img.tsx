/* eslint-disable @next/next/no-img-element */
export default function PostImage({ src, alt, ...props }) {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <img src={src} alt={alt} {...props} />
    </div>
  );
}
