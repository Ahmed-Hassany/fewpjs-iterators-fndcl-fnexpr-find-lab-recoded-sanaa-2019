const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let found = arr.find(function(item){
    return item.result === "W";
  });
  if(found)
  return found.year;
  else
  return found;
}