export default function pl3() {
  return (
    <div className="pl-6 bg-gradient-to-r from-sky-500 to-purple-700 sm:rounded-b-lg pb-3 pt-1">
      {[
        "React",
        "Next.js",
        "Electron",
        "Matplotlib",
        "Tkinter",
        "Tailwind CSS",
      ].map((e) => {
        return (
          <div
            key={e}
            className="text-white font-medium text-xl leading-relaxed"
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}
