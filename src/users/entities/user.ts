import { SignUpMethod } from "../enums/signup-method";
import * as helpers from "../helpers/helpers";

export class User {

    private email: string;
    private uuid: string;
    private signUpMethod: SignUpMethod;
    private isAdmin: boolean;

    constructor(email: string, uuid: string, signUpMethod: SignUpMethod, isAdmin: boolean) {
        this.email = email;
        this.uuid = uuid;
        this.signUpMethod = signUpMethod;
        this.isAdmin = isAdmin;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setUuid(uuid: string) {
        this.uuid = uuid;
    }

    setSignUpMethod(signUpMethod: SignUpMethod) {
        this.signUpMethod = signUpMethod;
    }

    setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }

    getEmail(): string {
        return this.email;
    }

    getUuid(): string {
        return this.uuid;
    }

    getSignUpMethod(): SignUpMethod {
        return this.signUpMethod;
    }

    getIsAdmin(): boolean {
        return this.isAdmin;
    }

}

export class UserBuilder {

    private user: User;

    constructor() {
        this.reset();
    }

    reset(): this {
        this.user = new User("", "", "mail", false);
        return this;
    }

    setEmail(email: string): this {
        this.user.setEmail(email);
        return this;
    }

    setSignUpMethod(signUpMethod: SignUpMethod): this {
        this.user.setSignUpMethod(signUpMethod);
        return this;
    }

    setIsAdmin(isAdmin: boolean): this {
        this.user.setIsAdmin(isAdmin);
        return this;
    }

    setUuid(uuid: string): this {
        this.user.setUuid(uuid);
        return this;
    }

    build(): User {
        if (!helpers.validateEmail(this.user.getEmail())) {
            throw new Error('Invalid user email');
        }
        return this.user;
    }

}