import * as EmailValidator from 'email-validator';
import { v4 as uuidv4 } from 'uuid';

export function validateEmail(email: string): boolean {
    return EmailValidator.validate(email);
}

export function genereateUuid(): string {
    return uuidv4();
}