export default function pl1() {
  return (
    <div className="pl-6 bg-gradient-to-r from-sky-500 to-purple-700 sm:rounded-b-lg pb-3 pt-1">
      {["C++", "Python", "Go", "Javascript", "Typescript", "Java", "SQL"].map(
        (e) => {
          return (
            <div
              key={e}
              className="text-white font-medium text-xl leading-relaxed"
            >
              {e}
            </div>
          );
        }
      )}
    </div>
  );
}
