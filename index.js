// Your code here
function mapToNegativize(sourceArray){
  let newArray = [];
  sourceArray.forEach(item => {
    newArray.push(item * -1)
  })
  return newArray
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
return  sourceArray.forEach(item *2)
}