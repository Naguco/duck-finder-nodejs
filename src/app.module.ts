import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { StaticUser } from './user/providers/static-user';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, StaticUser],
})
export class AppModule {}
