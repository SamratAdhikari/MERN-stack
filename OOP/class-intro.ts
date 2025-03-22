class Player {
    health: number;
    velocity: number;
    ammo: number;

    greet() {
        console.log("Hello, I am a player");
    }
}

// ? Class: blueprint from which objects are created

// * instance variable -> class knows
// health, velocity, ammo

// * methods -> class does
// greet

const Baddie86 = new Player();
Baddie86.health = 90;
Baddie86.velocity = 10;
Baddie86.ammo = 50;

console.log(Baddie86);


