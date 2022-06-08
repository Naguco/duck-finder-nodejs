import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteUserDto } from './dto/deleteUserDto';
import { User } from './entities/user';
import { UsersServiceService } from './services/users-service/users-service.service';

@Controller('users')
export class UserController {

    constructor(
        private userService: UsersServiceService
    ) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get(':uuid')
    async getUserByUuid(@Param() params): Promise<User> {
        return await this.userService.getById(params.uuid);
    }

    @Delete(':uuid')
    async deleteUser(@Body() deleteUserDto: DeleteUserDto) {
        return await this.userService.deleteUser(deleteUserDto.email);
    }

}
