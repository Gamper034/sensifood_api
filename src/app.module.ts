import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [LogModule, UserModule, ProductModule, PrismaModule, AuthModule, PassportModule.register({ defaultStrategy: 'jwt' }), UserModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
