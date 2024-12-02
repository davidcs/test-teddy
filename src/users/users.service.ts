import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Users } from './user.entity';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository <Users>
    ) {}

    async findAllUsers(): Promise<Users[]>{
        const users = await this.usersRepository.find();
        return users;
    }

    async createUser(userDTO: UsersDto): Promise <UsersDto>{
        const createUser = await this.usersRepository.save(userDTO);
        return createUser;
    }
    async getUserById(id: string): Promise<Users> {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    

    async updateUser(id: string, userDTO: UsersDto): Promise<Users> {
        const user = await this.getUserById(id);
        const updatedUser = this.usersRepository.merge(user, userDTO);
        return await this.usersRepository.save(updatedUser);
    }

    async deleteUser(id: string): Promise<void> {
        const user = await this.getUserById(id);
        await this.usersRepository.remove(user);
    }
}
