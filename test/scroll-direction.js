var tape = require("tape")
var scrollDir = require("../")

var div = document.createElement("div")
div.style.height = "5000px"
document.body.appendChild(div)

tape("scroll-direction", function(test){
  var s = scrollDir.create()
  window.scrollTo(0, 30)
  setTimeout(function(){
    window.scrollTo(0, 0)
    setTimeout(function(){
      s.on("change", function(data){
        test.equal(data.direction, 1)
        test.equal(data.offset, 300)
        test.end()
        s.destroy()
      })
      window.scrollTo(0, 300)
    }, 0)
  }, 0)
})

tape("scroll-direction", function(test){
  var s = scrollDir.create()
  window.scrollTo(0, 700)
  setTimeout(function(){
    s.on("change", function(data){
      test.equal(data.direction, -1)
      test.equal(data.offset, 300)
      test.end()
      s.destroy()
    })
    window.scrollTo(0, 300)
  }, 0)
})
