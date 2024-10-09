import * as bcrypt from 'bcryptjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDtoType } from '../dtos/create-user.dto';
import { LoginUserDtoType } from '../dtos/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async signup(user: CreateUserDtoType) {
    // Vérifier si l'email existe déjà
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('Cet email est déjà utilisé');
    }

    // Hacher le mot de passe avec un grain de sel
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Créer l'utilisateur avec le mot de passe haché
    const newUser = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashedPassword,
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
  }

  async signin(user: LoginUserDtoType) {
    // Récupérer l'utilisateur de la base de données en utilisant l'email
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existingUser) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    // Comparer le mot de passe fourni avec le mot de passe haché stocké dans la base de données
    const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    // Générer un token JWT
    const payload = { username: existingUser.email, sub: existingUser.id };
    const token = this.jwtService.sign(payload);

    return {
      user: {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
      },
      access_token: token,
    };
  }

  async verifyToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Token invalide');
    }
  }
}