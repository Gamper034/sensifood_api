import { Body, Controller, Headers, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from './user.service';
import { SetAllergensDto, SetAllergensDtoType } from 'src/dtos/set-allergens.dto';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('allergens')
    async setAllergen(@Body() body: SetAllergensDtoType, @Headers('authorization') authorization: string) {
        const parsedBody = SetAllergensDto.parse(body);
        console.log(body);
        console.log(authorization);
        return this.userService.setAllergen(authorization, parsedBody.allergens);
    }
}



