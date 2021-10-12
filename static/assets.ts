export const assets = [
  { name: "logo", url: "bird.png" },
  { name: "bunnyHead", url: "bunnyHead.png" },
  { name: "bunnyArm", url: "bunnyArm.png" },
  { name: "bunnyBody", url: "bunnyBody.png" },
  { name: "bubble99", url: "Bubbles99px.png" },
  { name: "background", url: "background.png" },
  { name: "tree1", url: "tree1.png" },
];

// 소스코드에서 어셋 import해서 사용하는 방법
// // remember the assets manifest we created before? You need to import it here
// Loader.shared.add(assets);

// // this will start the load of the files
// Loader.shared.load();

// // In the future, when the download finishes you will find your entire asset like this
// Loader.shared.resources["the name you gave your asset in the manifest"];
// // You will probably want `.data` or `.texture` or `.sound` of this object
// // however for Pixi objects there is are better ways of creating them...
