"use strict";
// const Colors = {
//   Primary: "RED",
//   Secondary: "BLUE"
// } as const;
Object.defineProperty(exports, "__esModule", { value: true });
// type ValidColor = typeof Colors[keyof typeof Colors];
// function setColor(c: ValidColor) {
//   console.log("Selected color:", c);
// }
const Colors = { Primary: "RED", Secondary: "BLUE" };
function setColor(c) {
    console.log(`Setting color to ${c}`);
}
//# sourceMappingURL=LiteralTypes.js.map