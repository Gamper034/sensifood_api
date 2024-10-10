import { Controller, Post, Get, Headers, Body, UseGuards } from '@nestjs/common';
import { SetLogDtoType } from 'src/dtos/set-log.dto';
import { LogService } from './log.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('log')
@UseGuards(JwtAuthGuard)
export class LogController {

    constructor(
        private readonly logService: LogService,
    ) {}


    @Post()
    log(@Body() body: SetLogDtoType, @Headers('authorization') authorization: string) {
        return this.logService.setLog(body.ean, authorization);
    }

    @Get()
    getlog(@Headers('authorization') authorization: string) {
        console.log(authorization);
        return this.logService.getLogs(authorization);
    }
}
