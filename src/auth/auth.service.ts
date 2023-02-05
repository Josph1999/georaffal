import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import Users from './entities/user.entity';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async createUser(user: CreateUserDto): Promise<Users> {
    try {
      const firebaseCreds = {
        displayName: `${user.first_name} ${user.last_name}`,
        password: user.password,
        email: user.email,
        emailVerified: false,
      };

      await admin.auth().createUser(firebaseCreds);

      const newUser = this.userRepository.create(user);

      await this.userRepository.save(newUser);

      return newUser;
    } catch (error) {
      return error;
    }
  }
}
