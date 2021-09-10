import { useState, useEffect } from "react";

export default function Typing({ children }: { children: string[] }) {
  const [typed, setTyped] = useState("");
  const [backwards, setBackwards] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const prefixes = [];
  for (let i = 1; i < children.length; i++) {
    for (let j = 0; j < children[i].length; j++) {
      if (children[i][j] !== children[i - 1][j]) {
        prefixes.push(children[i].substring(0, j));
        break;
      }
    }
  }
  prefixes.push(children[children.length - 1]);
  useEffect(() => {
    if (typed.length !== children[wordIdx].length) {
      if (backwards) {
        setTimeout(() => {
          const cut = typed.slice(0, -1);
          if (cut === prefixes[wordIdx]) {
            setWordIdx(wordIdx + 1);
            setBackwards(false);
            setTyped(cut);
          } else {
            setTyped(cut);
          }
        }, 75);
      } else {
        setTimeout(() => {
          setTyped(typed + children[wordIdx][typed.length]);
        }, 100);
      }
    } else {
      setTimeout(() => {
        setBackwards(true);
        if (wordIdx !== children.length - 1) {
          setTyped(typed.slice(0, -1));
        }
      }, 2000);
    }
  }, [typed]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="text-3xl sm:text-4xl 2xl:text-5xl font-semibold -translate-y-1 sm:-translate-y-1.5 inline-block">
        {typed}
      </div>
      <span className="cursor-blink text-3xl sm:text-4xl 2xl:text-6xl font-semibold -translate-y-1 sm:-translate-y-1.5 inline-block">
        |
      </span>
    </>
  );
}
