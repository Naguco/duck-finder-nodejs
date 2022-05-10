import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticUser {
    private readonly users: User = [];
}
