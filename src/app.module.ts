import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ProductModule, PrismaModule, AuthModule, PassportModule.register({ defaultStrategy: 'jwt' }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
