"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getZipCode(user) {
    return user.info?.address?.zipCode ?? "00000";
}
const user1 = {
    info: {
        address: {
            zipCode: "1207"
        }
    }
};
const user2 = {};
console.log(getZipCode(user1)); // 1207
console.log(getZipCode(user2)); // 00000
//# sourceMappingURL=DataFetcher.js.map