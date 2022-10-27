const wordSearch = (letters, word) => {
  const emptyArr = [];

  for (let i = 0; i < letters[0].length; i++) {
    let temp = [];
    for (let j = 0; j < letters.length; j++) {
      temp.push(letters[j][i]);
    }
    emptyArr.push(temp);
  }

  // filter through horizontal array
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // filter through vertical array
  const verticalJoin = emptyArr.map(ls => ls.join(''));
  for (const m of verticalJoin) {
    if (m.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;