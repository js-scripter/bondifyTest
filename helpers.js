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
