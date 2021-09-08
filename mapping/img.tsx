/* eslint-disable @next/next/no-img-element */
export default function PostImage({ src, alt, ...props }) {
  return (
    <div className="flex justify-center mt-3 mb-3">
      <div className="border border-gray-400">
        <img src={src} alt={alt} {...props} />
      </div>
    </div>
  );
}
