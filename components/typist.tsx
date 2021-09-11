import React, { useState, useEffect, Fragment } from "react";

const words = [
  "Hello! My name is Balaji.",
  "Bonjour! Je m'appelle Balaji.",
  "你好！ 我叫巴拉吉。",
  "¡Hola! Mi nombre es Balaji.",
  "नमस्कार! मेरा नाम बालाजी है।",
  "Привет! Меня зовут Баладжи.",
  "Halo! Nama saya Balaji.",
  "Hello! My name is Balaji.",
];

export default function Typist() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((index + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex(subIndex + (reverse ? -1 : 1));
      },
      reverse ? 75 : subIndex === words[index].length ? 1500 : 75
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <Fragment>
      <div className="inline-block">{words[index].substring(0, subIndex)}</div>
      <div className="inline-block cursor-blink text-6xl">|</div>
    </Fragment>
  );
}
