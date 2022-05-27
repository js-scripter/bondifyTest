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
// let result = removeDuplicates([1, 2, 3, 4])
// console.log(result)

// result = removeDuplicates([])
// console.log(result)

// result = removeDuplicates([0, 0, 4, 4, 5, 5])
// console.log("result "+result)

// result = removeDuplicates(["a", "b", "b", "ed", "ed", "f"])
// console.log(result)

// result = removeDuplicates([0, "", "", 1, 2, "em","em"])
// console.log("result "+result)

// function removeDuplicates(array){
//   let unique=[]
//   emptyStringFound=0
//   for(let i=0; i<array.length; i++){
//       let found = unique.find(element => element == array[i]);
      
//       if(found==undefined){
//         console.log("is "+array[i]+" found "+found)
//         unique.push(array[i])
//       }
//       // else if(found==0 && array[i]=="" && emptyStringFound==0){
//       //   console.log("in else if is "+array[i]+" found "+found)
//       //   unique.push(array[i])
//       //   emptyStringFound++
//       // }
//     }
//     // console.log(unique)
//     return unique
// }

// const nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             magicString: "bar",
//           },
//         },
//       },
//     },
//   },
// };

// let result = contains(nestedObject,44)
// console.log(result)

// function contains(nestedObject, search) {
//   console.log(`search term ${search}`)
//   returnValue=false
//   while (typeof nestedObject === 'object' && nestedObject !== null) {

//     Object.keys(nestedObject).forEach(key => {

//       console.log(`key: ${key}, value: ${nestedObject[key]}`)

//       if(nestedObject[key]===search){
//         console.log("value equal to search " + nestedObject[key])
//         returnValue = true
//         // break;
//       }
//       nestedObject = nestedObject[key]
//     })
//     if(returnValue==true){
//       break
//     }
//   }
//   return returnValue
// }


// function contains(nestedObject, search) {
//   console.log(`search term ${search}`)
//   returnValue=false
//   while (typeof nestedObject === 'object' && nestedObject !== null) {

//     Object.keys(nestedObject).forEach(key => {

//       console.log(`key: ${key}, value: ${nestedObject[key]}`)

//       if(nestedObject[key]===search){
//         console.log("value equal to search " + nestedObject[key])
//         returnValue = true
//         // break;
//       }
//       nestedObject = nestedObject[key]
//     })
//     if(returnValue==true){
//       break
//     }
//   }
//   return returnValue
// }

// function contains(nestedObject, search) {
//   // console.log(search)

//   Object.keys(nestedObject).forEach(key => {

//     console.log(`key: ${key}, value: ${nestedObject[key]}`)

//     if(nestedObject[key]===search){
//       console.log("value equal to search " + nestedObject[key])
//       return true
//     }
//     if (typeof nestedObject[key] === 'object' && nestedObject[key] !== null) {
//       contains(nestedObject[key],search)
//     }
//   })
//   // console.log("returning")
//   return false
    
// }


// let array = [3, 6, 7, 12, -1, -4]
// sumTarget=10

// let array = []
// sumTarget=0

// let array = [3, 6, 7, 12, -1, -4]
// sumTarget=100

// let array = [44, 5, 1, 6, -43, -1, 7]
// sumTarget=0


// let result = sumToTarget(array,sumTarget)
// console.log(result)

// function  sumToTarget (array, sumTarget){
//   let elementsFound=[]
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//     for (var j = 0 ; j < array.length; j++) {
//       if(j!==i && (array[i] + array[j] == sumTarget)){
//         elementsFound.push(array[i])
//         elementsFound.push(array[j])
//         return elementsFound        
//       }
//     }
//   }
//   return []
// }

// const a = 1
// const b = 2
// const c = a + b
// (a + b).toString()

// const hey = 'hey'
// const you = 'hey'
// const heyYou = hey + ' ' + you

// ['h', 'e', 'y'].forEach((letter) => console.log(letter))


// const a = 1
// const b = 2
// const c = a + b(a + b).toString()

// const Person = require('./person-class')

// const flavio = new Person('Flavio')
// let msg = flavio.hello()
// console.log(msg)


const tm1=require("./ticketManager-2.js")
const tm2=require("./ticketManager-1.js")



