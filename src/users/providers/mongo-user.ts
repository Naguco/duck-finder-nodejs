import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserProvider } from '../interfaces/user-provider.interface';

@Injectable()
export class MongoUser extends UserProvider {
    save(user: User): User {
        throw new Error('Method not implemented.');
    }
    getById(uuid: string): User {
        throw new Error('Method not implemented.');
    }
    delete(uuid: string): void {
        throw new Error('Method not implemented.');
    }
    getUsers(): User[] {
        throw new Error('Method not implemented.');
    }

}
