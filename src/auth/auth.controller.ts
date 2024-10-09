import { Controller, Post, Body, UsePipes, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, CreateUserDtoType } from '../dtos/create-user.dto';
import { ZodValidationPipe } from './zod-validation.pipe';
import { LoginuserDto, LoginUserDtoType } from 'src/dtos/login-user.dto';


@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @UsePipes(new ZodValidationPipe(LoginuserDto))
  async login(@Body() body: LoginUserDtoType) {
    return this.authService.signin(body);
  }

  @Post('signup')
  @UsePipes(new ZodValidationPipe(CreateUserDto))
  async register(@Body() body: CreateUserDtoType) {
    return this.authService.signup(body);
  }

  @Post('token')
  async verify(@Body() body: any) {
    return this.authService.verifyToken(body.token);
  }
}