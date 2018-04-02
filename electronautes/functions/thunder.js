// Modified code from https://codepen.io/Supercopra/pen/emgNBb

/**
 * @param value
 * @constructor
 */
var Vector = function(value) {
  this.value = value;
  this.prev  = null;
  this.next  = null;
}

/**
 * @constructor
 */
var List = function() {
  var me      = this;
  var first   = null;
  var current = null;
  var last    = null;
  this.length = 0;

  /**
   * @param vector
   */
  var unbind = function(vector) {
    if (vector.prev && vector.next) {
      vector.prev.next = vector.next;
      vector.next.prev = vector.prev;
    } else if (vector.prev) {
      vector.prev.next = null;
      last             = vector.prev;
    } else if (vector.next) {
      vector.next.prev = null;
      first            = vector.next;
    }

    if (first && current === vector) {
      current = first;
    }
    me.length--;
  }

  /**
   * @param vector
   * @param range
   */
  var remove = function(vector, range) {
    if (range && (range > 1 || range < -1)) {
      var rcb     = getRangeCb(range);
      var current = vector;
      do {
          unbind(current);
      } while (current = rcb(current))
    } else {
      unbind(vector);
    }
  }

  /**
   * @param range
   * @returns {Function}
   */
  var getRangeCb = function(range) {
    var stepMax = Math.abs(range);
    var step    = 1;
    var key     = 'prev';

    if (range > 1) {
      key = 'next';
    }

    return function(current) {
      if (step < stepMax && current[key]) {
        step++;
        return current[key];
      }
      return false;
    }
  }

  /**
   * @param cb
   * @returns {List}
   */
  var each = function(cb) {
    if (first) {
      var debugCurrent = first;

      do {
        current = debugCurrent;
        if (cb(debugCurrent) === false) {
            break;
        }
      } while (debugCurrent = debugCurrent.next)
    }
    return this;
  }

  /**
   * @param cb
   * @returns {List}
   */
  this.each = function(cb) {
    each(function(vector) {
      cb.call(vector, vector.value);
    });
    return this;
  }

  /**
   * @param value
   * @returns {List}
   */
  this.add = function(value) {
    var vector = new Vector(value);
    if (!first) {
      first = last = current = vector;
    } else {
      vector.prev = last;
      last = last.next = vector;
    }
    this.length++;
    return this;
  }

  /**
   * @param value
   * @param range
   * @returns {List}
   */
  this.remove = function(value, range) {
    if (current === value) {
      remove(current, range);
    } else {
      each(function(vector) {
        if (vector.value === value) {
          remove(vector, range);
          return false;
        }
      });
    }
    return this;
  }
} // End List.

var Branch = function(manager, chance, x, y) {
  var me   = this;
  var path = [{
    x : x,
    y : y,
    endX : (0.5 - Math.random()) * (manager.h / 10) + x,
    endY : (0.7 - Math.random()) * (manager.w / 20) + y
  }];

    var size        = parseInt(chance) + parseInt(Math.random() * 10);
    var subBranches = [];

    this.process = function() {
        var rdy = true;

        if (path.length < size) {
            for (var i = 0; i < 3; i++) {
                path.push({
                    x : path[path.length - 1].endX,
                    y : path[path.length - 1].endY,
                    endX : (0.5 - Math.random()) * (manager.h / 10) + path[path.length - 1].endX,
                    endY : Math.random() * (manager.w / 25) + path[path.length - 1].endY
                });

                if (Math.random() < chance / 15) {
                    subBranches.push(new Branch(manager, chance / 2, path[path.length - 1].x, path[path.length - 1].y));
                }
            }

            rdy = false;
        }

        for (var i = 0; i < path.length; i++) {
            manager.can.beginPath();
            manager.can.lineWidth = chance * 0.4;
            manager.can.moveTo(path[i].x, path[i].y);
            manager.can.lineTo(path[i].endX, path[i].endY);
            manager.can.stroke();
            manager.can.closePath();
        }

        for (var i = 0; i < subBranches.length; i++) {
            subBranches[i].process();
        }

        return rdy;
    }
}

var Bolt = function(manager) {
  var me         = this;
  var opa        = 1;
  var opaDown    = 0.1 - (Math.random() / 15);
  var mainBranch = new Branch(manager, 5, Math.random() * manager.w, -50);

  this.process = function() {
    manager.can.strokeStyle = 'rgba(255, 255, 255, ' + opa + ')';
    manager.can.fillStyle = manager.can.strokeStyle;

    if (mainBranch.process()) {
      opa -= opaDown;
    }

    return opa > 0;
  }
}

var BoltManager = function( bgColor ) {
  
  var me       = this;

  this.$can = $('#can');
  this.can  = this.$can.get(0).getContext('2d');

  this.w    = window.innerWidth;
  this.h    = window.innerHeight;

  var bolts = new List();

  this.run = function() {
    init();
    run();
  }

  var run = function() {
    clear();

    if (Math.random() < 0.05) {
      bolts.add(new Bolt(me));
      var ranColor = parseInt(Math.random() * 10);
      //bgColor      = 'rgb(' + ranColor + ',' + ranColor + ',' + (ranColor + 30) + ')';
    }

    bolts.each(function(bolt) {
      if (!bolt.process()) {
        bolts.remove(this);
      }
    });

    setTimeout(run, 1000 / 30);
  }

  var init = function() {
    me.$can.prop({
      width  : me.w,
      height : me.h
    }).css({
      width  : me.w,
      height : me.h
    });

    clear();
  }

  var clear = function() {
    me.can.fillStyle = bgColor//'rgb(0,0,0)';
    me.can.fillRect(0, 0, me.w, me.h);
  }
}


/*$(function() {
    var b = new BoltManager( bgColor );
    b.run();
});*/


    