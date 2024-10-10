import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto, UserDtoType } from 'src/dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService,
    ) { }

    async getIdFromToken(token: string): Promise<number> {
        const userToken = token.split(' ')[1];
        const decoded = this.jwtService.verify(userToken);
        return decoded.sub;
    }

    async setAllergen(token: string, allergenIds: number[]): Promise<UserDtoType> {
        const userId = await this.getIdFromToken(token);

        if (allergenIds.length === 0) {
            throw new BadRequestException('Allergens are required');
        }

        const updatedUser = await this.prismaService.user.update({
            where: { id: userId },
            data: {
                allergens: {
                    set: allergenIds.map((allergenId) => ({ id: allergenId })),
                },
            },
            select: {
                id: true,
                email: true,
                name: true,
                gender: true,
                age: true,
                allergens: true,
            }
        });

        // Utilisez le DTO pour exclure le mot de passe
        const userDto = UserDto.parse(updatedUser);
        return userDto;
    }

   
}