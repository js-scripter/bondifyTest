let str=""
let result=false;

result=isPalindrome(str)
console.log(" for '' -> " + result)

str="abcd"
result=isPalindrome(str)
console.log(" for abcd -> " + result)

str="11/11/11"
result=isPalindrome(str)
console.log(" for 11/11/11 -> " + result)

str="madam"
result=isPalindrome(str)
console.log(" for madam -> " + result)


function isPalindrome(str){
  // console.log("begening " + str)

  let revStrArray=[]
  for(let i=str.length-1; i>=0; i--){
    revStrArray.push(str[i])
  }
  // console.log(revStrArray.length)
  for(let j=0; j<str.length; j++){
    // console.log("revStrArray "+ revStrArray[j])
    // console.log("str "+ str[j])
    if(revStrArray[j]!=str[j]){      
      return false;
    }
  }
  return true;

}
