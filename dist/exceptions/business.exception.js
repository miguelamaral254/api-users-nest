"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessException = void 0;
const common_1 = require("@nestjs/common");
class BusinessException extends common_1.HttpException {
    constructor(message, status) {
        super({ message }, status);
    }
}
exports.BusinessException = BusinessException;
//# sourceMappingURL=business.exception.js.map