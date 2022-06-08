import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// should place this at very first line
const envModule = ConfigModule.forRoot({
  isGlobal: true,
})

import { UserController } from './users/user.controller';
import { StaticUser } from './users/providers/static-user';
import { UsersServiceService } from './users/services/users-service/users-service.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    envModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
