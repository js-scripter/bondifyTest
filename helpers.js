module.exports.isPalindrome = function (str){
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

module.exports.removeDuplicates = function(array){
	let unique=[]
  emptyStringFound=0
  for(let i=0; i<array.length; i++){
      let found = unique.find(element => element == array[i]);
      // console.log("is "+array[i]+" found "+found)
      if(found==undefined){
        unique.push(array[i])
      }else if(found==0 && emptyStringFound==0){
        unique.push(array[i])
        emptyStringFound++
      }
  }
  // console.log(unique)
  return unique
}

module.exports.contains =function(nestedObject, search){
  console.log(`search term ${search}`)
  returnValue=false
  while (typeof nestedObject === 'object' && nestedObject !== null) {

    Object.keys(nestedObject).forEach(key => {

      console.log(`key: ${key}, value: ${nestedObject[key]}`)

      if(nestedObject[key]===search){
        console.log("value equal to search " + nestedObject[key])
        returnValue = true
        // break;
      }
      nestedObject = nestedObject[key]
    })
    if(returnValue==true){
      break
    }
  }
  return returnValue
}
