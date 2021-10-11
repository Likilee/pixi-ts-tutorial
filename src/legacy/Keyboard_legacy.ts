//키보드 이런식으로 사용하면 아주 나이스 할듯
//https://www.pixijselementals.com/#keyboard

export class Keyboard {
  private constructor() {}
  public static readonly state: Map<string, boolean>;
  public static initialize(): void {
    // The `.bind(this)` here isn't necesary as these functions won't use `this`!

    document.addEventListener("keydown", Keyboard.keyDown);
    document.addEventListener("keyup", Keyboard.keyUp);
  }

  private static keyDown(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, true);
    // console.log(Keyboard.state.get(e.code));
  }

  private static keyUp(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, false);
    // console.log(Keyboard.state.get(e.code));
  }

  // public static getState(key: string) {
  //   return Keyboard.state.get(key);
  // }
}
