
function urlifyString(str) {
  str = str.trim();
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      output += '%20';
    } else {
      output += str[i];
    }
  }
  return output;
}

console.log(urlifyString('  tauhida parveen'));

//Input: tauhida parveen

//Output: tauhida%20parveen

//Input: www.thinkful.com /tauh ida parv een

//Output: www.thinkful.com%20/tauh%20ida%20parv%20een
