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
  let newArray2=[];
 sourceArray.forEach(item =>{
 newArray2.push(item*2);
})
return newArray2
}

function mapToSquare(sourceArray){
  return sourceArray.forEach(item =>{
    item**2
  })
}