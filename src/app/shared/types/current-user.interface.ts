export interface ICurrentUser {
    id: number;
    email: string;
    username: string;
    bio: string | null;
    image: string | null;
    token: string;
    createdAt: string;
    updatedAt: string;
};