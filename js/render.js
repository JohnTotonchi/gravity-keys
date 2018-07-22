let world;
let engine;
let shape;
let ground;
let shape_holder = [];

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

    shape_holder.forEach((shape) => {
        shape.show();
    })
};

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

// push shape in shape_holder array
mouseClicked = () => {
    shape_holder.push(new Key(mouseX, mouseY, 100, 100));
};

