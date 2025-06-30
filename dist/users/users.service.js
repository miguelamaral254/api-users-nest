"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_exception_1 = require("../exceptions/business.exception");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let UsersService = class UsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(requestUserDto) {
        const newUser = this.userRepository.create(requestUserDto);
        return await this.userRepository.save(newUser);
    }
    async paginate(options) {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        queryBuilder.orderBy('user.firstName', 'DESC');
        return await (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new business_exception_1.BusinessException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map