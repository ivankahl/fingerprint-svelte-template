import * as db from '$lib/db';
import { hash, compare } from 'bcrypt';

type User = {
    email: string;
    visitorId: string;
}

export const loginUser = async(email: string, password: string): Promise<User> => {
    const result = await db.query('SELECT email, password, visitor_id, created_at FROM users WHERE email = $1', [email]);

    // Check if the user exists
    if (result.rows.length === 0) {
        throw new AuthenticationError('User not found');
    }

    const user = result.rows[0];
    
    // Check if the password matches
    if (!await compare(password, user.password)) {
        throw new AuthenticationError('Password incorrect');
    }

    return { email: user.email, visitorId: user.visitor_id };
}

export const registerUser = async(email: string, password: string, visitorId: string): Promise<User> => {
    await canRegisterUser(email, visitorId);

    const hashedPassword = hash(password, 10);
    const createdTimestamp = Date.now() / 1000;
    await db.query('INSERT INTO users (email, password, visitor_id, created_at) VALUES ($1, $2, $3, to_timestamp($4))', [email, hashedPassword, visitorId, createdTimestamp]);

    return { email, visitorId };
}

const canRegisterUser = async (email: string, visitorId: string): Promise<void> => {
    const result = await db.query('SELECT COUNT(*) FROM users WHERE email = $1', [email]);
    if (result.rows[0].count > 0) {
        throw new EmailAlreadyExistsError();
    }

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const startTimestamp = startDate.getTime() / 1000;
    
    const visitorIdResult = await db.query('SELECT COUNT(*) FROM users WHERE visitor_id = $1 AND created_at > to_timestamp($2)', [visitorId, startTimestamp]);
    if (visitorIdResult.rows[0].count > 5) {
        throw new VisitorIdUserTooManyTimesError();
    }
}

/**
 * Define custom errors that can be used to handle different error cases
 */
export class EmailAlreadyExistsError extends Error {
    constructor() {
        super('Email already exists');
        this.name = 'EmailAlreadyExistsError';
    }
}

export class VisitorIdUserTooManyTimesError extends Error {
    constructor() {
        super('Visitor ID has been used too many times.');
        this.name = 'VisitorIdUserTooManyTimesError';
    }
}

export class AuthenticationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AuthenticationError';
    }
}