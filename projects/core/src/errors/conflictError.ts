import { Errors } from '../enums/errors';

export class ConflictError extends Error {
    public message!: string;
    public readonly type = Errors.Conflict;

    constructor(message?: string) {
        super();
        if(message) {
            this.message = message;
        }
    }
}