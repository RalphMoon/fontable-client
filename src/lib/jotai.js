import { atom, createStore } from "jotai";

export const store = createStore();

export const unicodeAtom = atom(0);

export const unicodePathsAtom = atom([]);

export const upperAlphabetsAtom = atom((get) => {
  const unicodePaths = get(unicodePathsAtom);
  const upperAlphabets = unicodePaths.slice(32, 58);

  return upperAlphabets;
});

export const lowerAlphabetsAtom = atom((get) => {
  const unicodePaths = get(unicodePathsAtom);
  const lowerAlphabets = unicodePaths.slice(64, 90);

  return lowerAlphabets;
});

export const numbersAtom = atom((get) => {
  const unicodePaths = get(unicodePathsAtom);
  const numbers = unicodePaths.slice(15, 25);

  numbers.push(numbers.shift());

  return numbers;
});

export const othersAtom = atom((get) => {
  const unicodePaths = get(unicodePathsAtom);
  const others = [
    ...unicodePaths.slice(0, 15),
    ...unicodePaths.slice(18, 25),
    ...unicodePaths.slice(25, 32),
    // ...unicodePaths.slice(90, 95),
  ];

  return others;
});

export const currentCharsAtom = atom((get) => {
  const unicode = get(unicodeAtom);
  let currentChars;

  if ((unicode > 32 && unicode < 65) || (unicode > 90 && unicode < 127)) {
    currentChars = get(othersAtom);
  }

  if (unicode > 47 && unicode < 58) {
    currentChars = get(numbersAtom);
  }

  if (unicode > 64 && unicode < 91) {
    currentChars = get(upperAlphabetsAtom);
  }

  if (unicode > 96 && unicode < 123) {
    currentChars = get(lowerAlphabetsAtom);
  }

  return currentChars ?? [];
});

export const charAtom = atom((get) => {
  const chars = get(currentCharsAtom);
  const unicode = get(unicodeAtom);
  const char = chars.find((alphabet) => alphabet.unicode === unicode) ?? {};

  return char;
});

export const replacePathsAtom = atom(null, (get, set, newPaths) => {
  const chars = get(currentCharsAtom);
  const unicode = get(unicodeAtom);
  const index = chars.findIndex((char) => char.unicode === unicode);

  if (index === -1) return;

  chars[index].pathString += newPaths;
  set(currentCharsAtom, chars);
});

export const sentenceDomAtom = atom(null);
