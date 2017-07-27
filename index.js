function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName("target")[0]
}
function increaseRankBy(n){
    const lists = document.getElementsByClassName("ranked-list")
    var firstList = lists[0]
    var secondList = lists[1]
    var firstListItems = firstList.getElementsByTagName("li")
    var secondListItems = secondList.getElementsByTagName("li")
    for(var i = 0;i<firstListItems.length;i++){
      firstListItems[i].textContent = parseInt(firstListItems[i].textContent) + n
    }
    for(var i = 0;i<secondListItems.length;i++){
      secondListItems[i].textContent = parseInt(secondListItems[i].textContent) + n
    }
  }

function deepestChild(){
  const grandNode = document.getElementById("grand-node")
  grandNode.getElementsByTagName("div")[3]
  var boo = grandNode.getElementsByTagName("div")[3]
  return boo
}
