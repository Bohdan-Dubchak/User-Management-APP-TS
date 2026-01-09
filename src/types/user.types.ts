// Інтерфейс користувача
export interface User {
    id: string;
    name: string;
    city: string;
    email: string;
    avatar: string;
}

// Днані для створення каричтувача
export interface CreateUserData {
    name: string;
    city: string;
    email: string;
    avatar: string;
}

// Дані для оновлення користувача
export interface UpdateUserData extends CreateUserData { };

// Тип callback функція для підписки на зміни Store
export type StoreListener = (users: User[]) => void;

// Дані форми користувача
export interface UserFormData {
    userName: string;
    userCity: string;
    userEmail: string;
    userImageUrl: string;
}

// Дані форми редагування
export interface EditFormData extends UserFormData {
    userId: string;
}