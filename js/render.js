let world;
let engine;
// let ground;
let keys = [];

setup = () => {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.parent("canvas");

    engine = Matter.Engine.create();
    world = engine.world;
    Matter.Engine.run(engine);

    // ground = Matter.Bodies.rectangle(300, height, width, 40, {isStatic: true});
    // Matter.World.add(world, ground)
};

draw = () => {
    background(255);

    for (let i = keys.length - 1; i >= 0; i--) {
        keys[i].show();
        if (keys[i].body.position.y > windowHeight * 2) {
            Matter.Composite.remove(world, keys[i].body);
            keys.splice(i, 1);
        }
    }
};

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

keyTyped = () => {
    let position = new KeyMapper().getPosition(key);

    if (Number.isInteger(position)) {
        keys.push(new Key(key,
            ((windowWidth / 13) * (position + 1)) + random(-windowWidth / 20, windowWidth / 20),
            windowHeight + 150,
            100,
            100));
    }
};

