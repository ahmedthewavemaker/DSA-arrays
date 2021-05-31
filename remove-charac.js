
function removeCharacters(string, chars) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let contained = true;
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        contained = false;
      }
    }
    if (contained) {
      output += string[i];
    }
  }
  return output;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
