//
// hamming.js
// Tested by hamming.spec.js


var hamming = function() {};

hamming.prototype.compute = function(strand1, strand2) {
  difference = 0;
  for (var i=0, len = strand1.length; i < len; i ++) {
    if (strand1[i] != strand2[i]) {
        difference ++;
    }
  }
  return difference;
};

module.exports = hamming;
