function addSnowToBackground( colorBackground ) {
    
    var snowBackground = function ( r ) {
       
        var canvas;
        var drops = [];

        r.windowResized = function () {
            r.setup();
        }

        r.Drop = function () {
            this.x = r.random(r.width);
            this.y = r.random(-500, -20);
            this.z = r.random(0, 20);
            this.len = r.map(this.z, 0, 20, 5, 8);
            this.yspeed = r.map(this.z, 0, 20, 0, .1);

            this.fall = function() {
                this.y = this.y + this.yspeed;
                this.x = this.x + r.random(-.5,+.5);
                var grav = r.map(this.z, 0, 20, 0, .01);
                this.yspeed = this.yspeed + grav;

                if (this.y > r.height) {
                    this.y = r.random(-200, -100);
                    this.x = r.random(r.width);
                    this.yspeed = r.map(this.z, 0, 20, 0, .1);
                }
            }

            this.show = function() {
                r.stroke(255, 255, 255, r.random(20,50));
                r.fill(255, 255, 255, r.random(20,225));
                r.ellipse(this.x, this.y, this.len, this.len);
            }
        }

        r.setup = function () {
            canvas = r.createCanvas(r.windowWidth, r.windowHeight);
            canvas.position(0, 0);
            canvas.style("z-index", "-1");

            drops = [];
            for (var i = 0; i < r.windowWidth/3; i++) {
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
    
    var snow = new p5(snowBackground);

}