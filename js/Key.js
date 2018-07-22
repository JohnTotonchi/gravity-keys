class Key {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        this.option = {
            friction: 1,
            restitution: 0.7,
        };
        this.body = Matter.Bodies.rectangle(x, y, w, h, this.option);

        Matter.Body.applyForce(this.body, {
            x: this.body.position.x,
            y: this.body.position.y
        }, {
            x: random(-0.1, 0.1),
            y: -1.2
        });
        Matter.Body.setAngularVelocity(this.body, random(-0.2, 0.2));
        Matter.World.add(world, this.body);

    }

    show() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(240);
        strokeWeight(4);
        stroke(0);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop()
    };
}