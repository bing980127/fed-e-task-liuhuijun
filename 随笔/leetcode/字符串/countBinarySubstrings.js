/**
 * 696. 计数二进制子串
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  const counts = [];
  let ptr = 0, n = s.length;
  while (ptr < n) {
      const c = s.charAt(ptr);
      
      let count = 0;
      while (ptr < n && s.charAt(ptr) === c) {
          ++ptr;
          ++count;
      }
      counts.push(count);
  }
  let ans = 0;
  console.log(counts,00)
  for (let i = 1; i < counts.length; ++i) {
      ans += Math.min(counts[i], counts[i - 1]);
      console.log(ans)
  }
  return ans;
};
console.log(countBinarySubstrings("0001110"))
