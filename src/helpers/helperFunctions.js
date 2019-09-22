//This function is a generic remover of duplicates in an array of objects
//all you have to do is pass a the original array, the property you want to filter
//and 
export function removeDuplicatesByObjKey(array, objKey){
  if(Array.isArray(array) && array.length > 0){
    const returnedArray = []
    const checkObj = {}
    for(let item of array){
      const checkedProp = item[objKey]
      if(!checkObj[checkedProp]){
        checkObj[checkedProp] = true
        returnedArray.push(item)
      }
    }
    return returnedArray
  }
  return []
}