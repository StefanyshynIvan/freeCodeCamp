//Basic Algorithm Scripting: Confirm the Ending solution1
function confirmEnding(str, target) {
    return str.slice(-target.length)=== target;
  }
  
  confirmEnding("Bastian", "n");

//solution 2 by using endsWith() method;
function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  confirmEnding("Bastian", "n");