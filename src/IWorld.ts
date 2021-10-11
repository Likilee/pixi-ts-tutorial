import { Texture } from "@pixi/core";
import { Container } from "@pixi/display";
import { Sprite } from "@pixi/sprite";
import { World } from "./World";

export class IWorld extends Container implements World {
  public startPosition;

  //생성자 인자는 나중에 World를 구성하는 요소들을 묶어서 받아야 한다.(수정 필요)
  constructor(background: Texture) {
    super();

    const backgroundSprite = Sprite.from(background);
    this.addChild(backgroundSprite);
  }
}
