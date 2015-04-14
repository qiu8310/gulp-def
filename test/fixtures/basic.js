/**
 * 得到一个范围内的数字数组
 */
var range = def(function(self) {
  /**
   * @options { applySelf: false }
   * @defaults { start: 0, length: 10, step: 1 }
   * @rules () -> array
   * @rules (int start) -> array
   * @rules (int start, int length) -> array
   * @rules (int start, int length, int step) -> array
   */

  var i, result = [];
  for (i = self.start; i < self.length; i += self.step) {
    result.push(i);
  }

  return result;
});