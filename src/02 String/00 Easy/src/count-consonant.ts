/**
 * @file count-consonant.ts
 * @description count the consonant of a string
 */
export {};

function countConsonant(str: string) {
  let count = 0;
  let vowel: string = "aeiou";
  for (const ch of str.toLocaleLowerCase()) {
    if (ch >= "a" && ch <= "z" && !vowel.includes(ch)) {
      count++;
    }
  }
  return count;
}
console.log(countConsonant("Mohammad123"));
