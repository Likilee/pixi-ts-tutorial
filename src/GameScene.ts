import { Container } from "@pixi/display";
import { Sprite } from "@pixi/sprite";
import { Viewport } from "pixi-viewport";
import { Scene } from "./Scene";
import { Player } from "./Player";
import { Manager } from "./SceneManager";
import { IWorld } from "./IWorld";
import { Loader } from "@pixi/loaders";
import { keyboard } from "./Keyboard";

const resources = Loader.shared.resources;
export class GameScene extends Container implements Scene {
  private viewport: Viewport;
  private player: Player;

  constructor() {
    super();
    const world = new IWorld(resources["background"].texture);
    const viewport = new Viewport({
      // screenWidth: window.innerWidth,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: world.width,
      worldHeight: world.height,
      interaction: Manager.app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    });
    this.viewport = viewport;
    const player = new Player("bunny", viewport);
    this.player = player;
    viewport.drag().pinch().wheel().decelerate();

    this.addChild(viewport);
    viewport.addChild(world);
    viewport.addChild(player);
    viewport.fit();
    viewport.follow(player, {
      speed: 30,
      acceleration: 5,
      radius: 5,
    });
    viewport.moveCenter(world.width / 2, world.height / 2);
  }
  public update(framesPassed: number) {
    // console.log(this.player.position);
    // console.log(this.viewport.scale);
    // console.log(this.viewport.center);
  }
  resize() {}
}
