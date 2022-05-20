// let str=""
// let result=false;

// result=isPalindrome(str)
// console.log(" for '' -> " + result)

// str="abcd"
// result=isPalindrome(str)
// console.log(" for abcd -> " + result)

// str="11/11/11"
// result=isPalindrome(str)
// console.log(" for 11/11/11 -> " + result)

// str="madam"
// result=isPalindrome(str)
// console.log(" for madam -> " + result)


// function isPalindrome(str){
//   // console.log("begening " + str)

//   let revStrArray=[]
//   for(let i=str.length-1; i>=0; i--){
//     revStrArray.push(str[i])
//   }
//   // console.log(revStrArray.length)
//   for(let j=0; j<str.length; j++){
//     // console.log("revStrArray "+ revStrArray[j])
//     // console.log("str "+ str[j])
//     if(revStrArray[j]!=str[j]){      
//       return false;
//     }
//   }
//   return true;

// }

//-------------------------------------------
let result = removeDuplicates([1, 2, 3, 4])
console.log(result)

result = removeDuplicates([])
console.log(result)

result = removeDuplicates([0, 0, 4, 4, 5, 5])
console.log(result)

result = removeDuplicates(["a", "b", "b", "ed", "ed", "f"])
console.log(result)



result = removeDuplicates([0, "", "", 1, 2, "em"])
console.log(result)

function removeDuplicates(array){
    let arrayLength=array.length
  let duplicates=[]

  for(let i=0; i<array.length; i++){
      let result = array.filter(element => element == array[i] && !duplicates.includes(array[i]))
      if(result.length > 1){
        duplicates.push(array[i])
      }
    }
  if(duplicates.length>0){
    return duplicates
  }else{
    return array
  }

}
