// src/express.d.ts
import { UserDtoType } from './dtos/user.dto';

declare global {
    namespace Express {
        interface Request {
            user?: UserDtoType;
        }
    }
}