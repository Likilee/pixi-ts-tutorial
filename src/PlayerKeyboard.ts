import { Player } from "./Player";
import { keyboard } from "./keyboard";
import { Key } from "./Key";

export class PlayerKeyboard {
  public left: Key;
  public right: Key;
  public up: Key;
  public down: Key;

  constructor(player: Player) {
    this.left = keyboard("KeyA");
    this.right = keyboard("KeyD");
    this.up = keyboard("KeyW");
    this.down = keyboard("KeyS");

    this.initialize(player);
  }

  private initialize(player: Player) {
    this.left.press = () => {
      player.vx -= 5;
      player.scale.x = -1;

    };

    this.left.release = () => {
      player.vx += 5;
    };

    this.up.press = () => {
      player.vy -= 5;
    };
    this.up.release = () => {
      player.vy += 5;
    };

    this.right.press = () => {
      player.vx += 5;
      player.scale.x = 1;
    };
    this.right.release = () => {
      player.vx -= 5;
    };

    this.down.press = () => {
      player.vy += 5;
    };
    this.down.release = () => {
      player.vy -= 5;
    };
  }
}
