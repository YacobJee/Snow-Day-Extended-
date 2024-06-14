class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        //load the character's two sprites for walking and jumping
        this.load.image("character00", "tile_0000.png");
        this.load.image("character01", "tile_0001.png");
        this.load.image("bullet", "snowball.png");

        // Load tilemap information
        this.load.image("tilemap_backgrounds", "tilemap-backgrounds_packed.png");
        this.load.image("tilemap_tiles", "tilemap_packed.png");
        this.load.image("tilemap_tiles_extended", "tilemap_packed_extended.png");
        this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj");   // Tilemap in JSON
        this.load.tilemapTiledJSON("platformer-level-2", "platformer-level-2.tmj");
        this.load.tilemapTiledJSON("platformer-level-3", "platformer-level-3.tmj");

        // Load the tilemap as a spritesheet
        this.load.spritesheet("tilemap-background_sheet", "tilemap-backgrounds_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });
        this.load.spritesheet("tilemap_sheet", "tilemap_packed.png", {
            frameWidth: 18,
            frameHeight: 18
        });
        this.load.spritesheet("tilemap_sheet_extended", "tilemap_packed_extended.png", {
            frameWidth: 18,
            frameHeight: 18
        });

        // The multiatlas was created using TexturePacker and the Kenny
        // Particle Pack asset pack.
        this.load.multiatlas("kenny-particles", "kenny-particles.json");

        // sfx
        this.load.audio("coin", "powerUp6.ogg");
        this.load.audio("jump", "phaseJump5.ogg");
        this.load.audio("victory", "threeTone2.ogg");
        this.load.audio("death", "explosionCrunch_000.ogg");
        this.load.audio("shoot", "lowFrequency_explosion_001.ogg");

        
    }

    create() {
        this.anims.create({
            key: 'walk',
            frames: [
                { key: "character01" },
                { key: "character00" },
            ],
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [
                { key: "character00" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: [
                { key: "character01" }
            ],
        });

        // ...and pass to the next Scene
        this.scene.start("level1");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}