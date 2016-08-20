//
// rna-transcription.js
// Tested by rna-transcription.spec.js


var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(strand) {
  var rna = '';
  for (var i=0, len = strand.length; i < len; i ++) {
    if (strand[i] == 'G') {
        rna += 'C';
    } else if (strand[i] == 'C' ) {
        rna += 'G';
    } else if (strand[i] == 'T' ) {
        rna += 'A';
    } else if (strand[i] == 'A' ) {
        rna += 'U';
    } else {
        break; //on off-chance something else is input other than dna strand
    }
  }
  return rna;
};

module.exports = dnaTranscriber;
