import { atom, createStore } from "jotai";

export const store = createStore();

export const unicodeAtom = atom(0);

export const upperAlphabetsAtom = atom(
  Array.from({ length: 26 }, (_, index) => ({ unicode: index + 65, paths: [] }))
);

export const lowerAlphabetsAtom = atom(
  Array.from({ length: 26 }, (_, index) => ({ unicode: index + 97, paths: [] }))
);

export const numbersAtom = atom(() => {
  const numbers = Array.from({ length: 10 }, (_, index) => ({
    unicode: index + 48,
    paths: [],
  }));

  numbers.push(numbers.shift());

  return numbers;
});

export const unicodePathsAtom = atom((get) => {
  const upperAlphabets = get(upperAlphabetsAtom);
  const lowerAlphabets = get(lowerAlphabetsAtom);

  const unicodePaths = [ ...upperAlphabets, ...lowerAlphabets ]
    .filter(({ paths }) => paths.length > 0)
    .map(({ unicode, paths }) => ({ unicode, pathString: paths.join(" ") }));

  return unicodePaths;
});

export const currentCharsAtom = atom((get) => {
  const unicode = get(unicodeAtom);
  let currentChars;

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

  chars[index].paths.push(newPaths);

  set(currentCharsAtom, chars);
});

export const sentenceDomAtom = atom(null);
