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
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository, authService) {
        this.usersRepository = usersRepository;
        this.authService = authService;
        this.saltOrRounds = 10;
    }
    async insert(user) {
        const hashPass = await bcrypt.hash(user.password, this.saltOrRounds);
        let data = {
            fullName: user.fullName,
            username: user.username,
            password: hashPass
        };
        return await this.usersRepository.insert(data);
    }
    async loginku(userku) {
        const user2 = await this.authService.findOneBy(userku.username);
        if (user2?.password !== userku.password) {
            const isMatch = await bcrypt.compare(userku.password, user2?.password);
            if (!isMatch) {
                throw new common_1.UnauthorizedException();
            }
            const payload = { sub: userku.username, email: userku.password };
            return {
                token: Math.floor(100000 + Math.random() * 900000),
            };
        }
    }
    async findOne(username) {
        this.usersRepository.find({
            select: ["password"],
            where: [{ "username": username }]
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map