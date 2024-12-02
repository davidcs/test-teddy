import { Response } from 'express';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { UsersDto } from './users.dto';

@Controller('api/users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Get()
    async findAllUsers(@Res() response: Response){
        const users = await this.usersService.findAllUsers();
        return response.status(200).json(users);
    }

    @Post()
    async createUsers(@Res() response: Response, @Body() usersDto: UsersDto) {
        const userCreated = await this.usersService.createUser(usersDto);
        return response.status(201).json(userCreated);
    }


    @Get(':id')
    async getUserById(@Res() response: Response, @Param('id') id: string) {
        try {
            const user = await this.usersService.getUserById(id);
            return response.status(200).json(user);
        } catch (error) {
            return response.status(404).json({ message: error.message });
        }
    }

    @Patch(':id')
    async updateUser(
        @Res() response: Response,
        @Param('id') id: string,
        @Body() usersDto: UsersDto
    ) {
        try {
            const updatedUser = await this.usersService.updateUser(id, usersDto);
            return response.status(200).json(updatedUser);
        } catch (error) {
            return response.status(404).json({ message: error.message });
        }
    }

    @Delete(':id')
    async deleteUser(@Res() response: Response, @Param('id') id: string) {
        try {
            await this.usersService.deleteUser(id);
            return response.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return response.status(404).json({ message: error.message });
        }
    }

}
