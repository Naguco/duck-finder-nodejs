import { Module } from '@nestjs/common';
import { StaticUser } from './providers/static-user';
import { UsersServiceService } from './services/users-service/users-service.service';
import { UserController } from './user.controller';
import { UserProvider } from './interfaces/user-provider.interface';
import { MongoUser } from './providers/mongo-user';

const configUserProvider =  {
    provide: UserProvider,
    useClass: 
        process.env.NODE_ENV === 'development'
        ? StaticUser
        : MongoUser

}

@Module({
    controllers: [UserController],
    providers: [UsersServiceService, configUserProvider]
})
export class UsersModule {}
