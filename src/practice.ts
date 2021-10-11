import {
  Application,
  Sprite,
  Container,
  Graphics,
  Text,
  TextStyle,
  filters,
  ParticleContainer,
  Texture,
  InteractionEvent,
} from "pixi.js";

import * as particles from "@pixi/particle-emitter";
import * as particleSettings from "./emitter.json";
import { sound } from "@pixi/sound";
import { Viewport } from "pixi-viewport";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  resizeTo: window,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  antialias: true,
  width: 640,
  height: 480,
});

const viewport: Viewport = new Viewport({
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  worldWidth: 1000,
  worldHeight: 1000,
  interaction: app.renderer.plugins.interaction,
});

app.stage.addChild(viewport);

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
conty.pivot.set(100);

app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("bunny_head.png");
clampy.x = 100;
clampy.y = 100;
conty.addChild(clampy);

const clampy2: Sprite = Sprite.from("bunny_head.png");
clampy2.x = 200;
clampy2.y = 100;
clampy2.anchor.set(0.5, 0.5);
conty.addChild(clampy2);
clampy2.tint = 0x123456;

const clampy3: Sprite = Sprite.from("bunny_head.png");
clampy3.x = 100;
clampy3.y = 200;
conty.addChild(clampy3);

const graphy: Graphics = new Graphics();

graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25);
graphy.endFill();

app.stage.addChild(graphy);
graphy.x = 100;
graphy.y = 100;

const styly: TextStyle = new TextStyle({
  align: "center",
  fill: "#314c24",
  fontSize: 42,
});

const texty: Text = new Text("기글포레스트 파이팅 ><", styly);
app.stage.addChild(texty);

texty.x = 200;
texty.y = 200;

const myBlurFilter = new filters.BlurFilter(5, 3, 2);

conty.filters = [myBlurFilter];

const particleContainer = new ParticleContainer();
app.stage.addChild(particleContainer);

const emitter = new particles.Emitter(
  particleContainer,
  particles.upgradeConfig(particleSettings, Texture.from("Bubbles99px.png"))
);

emitter.autoUpdate = true;
emitter.updateSpawnPos(500, 100);
emitter.emit = true;
conty.interactive = true;

conty.once("Hello", onHello);
function onHello(e) {
  console.log(e);
  console.log("onHello");
}

conty.emit("Hello");
conty.on("pointerdown", onClicky);
function onClicky(e: InteractionEvent) {
  console.log("You interacted with Conty!!");
  console.log("The data of your interaction is super interesting", e);
  console.log(e.data.global);
  console.log(e.data.getLocalPosition(e.target));
  console.log(e.data.pointerType);
}

document.addEventListener("keydown", onKeyDown);

function onKeyDown(e: KeyboardEvent) {
  console.log("KeyDown event fired!", e);
}
app.ticker.add((delta) => {
  conty.angle += 0.1 * delta;
});
