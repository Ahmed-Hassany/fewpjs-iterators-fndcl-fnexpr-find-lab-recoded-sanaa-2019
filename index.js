const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  return arr.find(function(item){
    return item.result === "W";
  }).year
}