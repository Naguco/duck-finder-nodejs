import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user';
import { UserProvider } from 'src/users/interfaces/user-provider.interface';

@Injectable()
export class UsersServiceService {
    constructor(private _userProvider: UserProvider) {}

    getUsers(): User[] {
        return this._userProvider.getUsers()
    }

    deleteUser(uuid: string) {
        this._userProvider.delete(uuid);
    }

    getById(uuid: string): User {
        return this._userProvider.getById(uuid);
    }

    saveUser(user: User): User {
        return this._userProvider.save(user);
    }

}
