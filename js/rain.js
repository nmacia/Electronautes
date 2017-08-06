function addRainToBackground( colorBackground ) {
    
    var rainyBackground = function ( r ) {
       
        var canvas;
        var drops = [];

        r.windowResized = function () {
            r.setup();
        }

        r.Drop = function () {
            this.x = r.random(r.width);
            this.y = r.random(-500, -50);
            this.z = r.random(0, 20);
            this.len = r.map(this.z, 0, 20, 10, 30);
            this.yspeed = r.map(this.z, 0, 20, 1, 20);

            this.fall = function() {
                this.y = this.y + this.yspeed;
                var grav = r.map(this.z, 0, 20, 0, 0.2);
                this.yspeed = this.yspeed + grav;

                if (this.y > r.height) {
                    this.y = r.random(-200, -100);
                    this.yspeed = r.map(this.z, 0, 20, 4, 10);
                }
            }

            this.show = function() {
                var thick = r.map(this.z, 0, 20, 1, 1.5);
                r.strokeWeight(thick);
                r.stroke(255, 255, 255, 50);
                r.line(this.x, this.y, this.x, this.y+this.len);
            }
        }

        r.setup = function () {
            canvas = r.createCanvas(r.windowWidth, r.windowHeight);
            canvas.position(0, 0);
            canvas.style('z-index', '-1');

            drops = [];
            for (var i = 0; i < r.windowWidth/2; i++) {
                drops[i] = new r.Drop();
            }
        }

        r.draw = function () {
            r.background( colorBackground );
            for (var i = 0; i < drops.length; i++) {
                drops[i].fall();
                drops[i].show();
            }
        }

    }
    
    var rainy = new p5(rainyBackground);

}