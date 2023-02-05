import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateUserDto from './dto/createUser.dto';
import Users from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<Users> {
    return this.authService.createUser(user);
  }
}
