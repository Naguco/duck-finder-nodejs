import { Injectable } from '@nestjs/common';
import { UserProvider } from '../interfaces/user-provider.interface';
import { User, UserBuilder } from '../entities/user';
import { genereateUuid } from '../helpers/helpers'

@Injectable()
export class StaticUser extends UserProvider {

    private users: User[] = new Array();

    constructor() {
        super();
        let user: User = 
            new UserBuilder()
                .reset()
                .setEmail('naguco@gmail.com')
                .setIsAdmin(true)
                .setSignUpMethod('mail')
                .setUuid(genereateUuid())
                .build()
        this.users.push(user)
    }
    
    save(user: User): User {
        this.users.push(user);
        return user;
    }

    getById(uuid: string): User {
        let user = this.users.find(user => uuid === user.getUuid());
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    delete(uuid: string): void {
        let index = this.users.findIndex(user => user.getUuid() === uuid);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

}

