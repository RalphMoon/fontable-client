import { atom, createStore } from "jotai";

export const store = createStore();

export const unicodeAtom = atom(0);

export const upperAlphabetsAtom = atom(
  Array.from({ length: 26 }, (_, index) => ({ unicode: index + 65, paths: [] }))
);

export const lowerAlphabetsAtom = atom(
  Array.from({ length: 26 }, (_, index) => ({ unicode: index + 97, paths: [] }))
);

export const totalCharsAtom = atom((get) => {
  const upperAlphabets = get(upperAlphabetsAtom);
  const lowerAlphabets = get(lowerAlphabetsAtom);

  const totalChars = [ ...upperAlphabets, ...lowerAlphabets ];

  return totalChars;
});

export const currentCharsAtom = atom((get) => {
  const unicode = get(unicodeAtom);
  let currentChars;

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

  const prevPath = chars[index].paths;

  chars[index].paths = [ ...prevPath, newPaths ];

  set(currentCharsAtom, chars);
});
