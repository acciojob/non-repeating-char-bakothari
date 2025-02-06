function firstNonRepeatedChar(str) {
 // Write your code here
	 for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) === i && str.indexOf(str.charAt(i), i + 1) === -1) {
      return str.charAt(i);
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
