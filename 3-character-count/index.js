
/**
 * User enters some text
 * Program processes the text such that it can show a list of character
 * and how many times they were used int the input response string
 */
const io = require("../modules/io/index")
let charcount = {}

io.terminal.setPrompt("Enter a string to analyze: ")
io.terminal.prompt()
io.terminal.on("line", function (response) {
  let input = response
  let characters = input.split('')
  for (let character of characters){
    if (charcount[character]){
      charcount[character] ++
    } else {
      charcount[character] = 1
    }
  }
  io.terminal.close()
})
.on("close",function(){
  let charArr = []
  for (let character in charcount ){
    io.print (`${character} ${charcount[character]}`)
    charArr.push({char:character,count:charcount[character]})
    charArr.sort(function(a,b){
      if (a.count<b.count) return -1
      else if (a.count>b.count) return 1
      else return 0
    })
    console.table(charArr)
  }
  

})