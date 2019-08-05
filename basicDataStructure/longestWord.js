// Basic Algorithm Scripting: Find the Longest Word in a String
// solution 1
function findLongestWordLength(str) {
    var strSplited = str.split(' '),
        longestWord = 0, i;
      for(i = 0; i < strSplited.length; i += 1) {
        if(strSplited[i].length > longestWord){
          longestWord = strSplited[i].length;
        }
      }
  
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
//  solution 2
//  how to find hte longest world in the string
function findLongestWordLength(str) {
  var longestWorld = str.split(' ').sort(function (a,b) {

       return b.length-a.length;
  });
  return longestWorld[0].length;
} 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  