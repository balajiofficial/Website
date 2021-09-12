export default function pl3() {
  return (
    <div className="pl-6 bg-blue-600 rounded-b-lg pb-3 pt-2">
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
            className="text-cyan-200 font-medium text-xl leading-relaxed"
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}
