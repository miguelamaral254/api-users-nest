"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUserDTO = void 0;
class ResponseUserDTO {
    id;
    firstName;
    lastName;
    isActive;
    constructor(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.isActive = user.isActive;
    }
}
exports.ResponseUserDTO = ResponseUserDTO;
//# sourceMappingURL=response-user.dto.js.map