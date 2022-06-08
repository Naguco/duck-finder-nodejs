import { User } from "../entities/user";

export abstract class UserProvider {
    abstract save(user: User): User;
    abstract getById(uuid: string): User;
    abstract delete(uuid: string): void;
    abstract getUsers(): User[];
}