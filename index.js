var events = require("bloody-events")

function getOffset(){
  var offset = window.pageYOffset
  if(typeof offset == "number") {
    return offset
  }
  return document.documentElement.scrollTop
}

module.exports = events.extend({
  constructor : function(){
    var listener = this.accessor("listener")
    events.constructor.call(this)
    if(window.addEventListener) {
      window.addEventListener("scroll", listener, false)
      return
    }
    window.attachEvent("onscroll", listener)
  },
  destructor : function(){
    var listener = this.accessor("listener")
    events.destructor.call(this)
    if(window.removeEventListener) {
      window.removeEventListener("scroll", listener, false)
      return
    }
    window.detachEvent("onscroll", listener)
  },
  _lastOffset : getOffset(),
  _direction : 1,
  listener : function(){
    var offset = getOffset()
    var diff = offset - this._lastOffset
    var direction = Math.abs(diff) / diff
    this._lastOffset = offset
    if(direction == this._direction) {
      return
    }
    this.emit("change", {direction:direction, offset:offset})
    this._direction = direction
  }
})
