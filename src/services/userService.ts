// Всі HTTP запити до API
import { API_CONFIG } from "../config/constants";
import type { User, CreateUserData, UpdateUserData } from "../types/user.types";

class UserService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = API_CONFIG.BASE_URL;
    }

    // Отримання всіх користувачів
    async getAll(): Promise<User[]> {
        const response = await fetch(this.baseUrl)

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return await response.json();
    }

    // Створити користувача
    async create(userData: CreateUserData): Promise<User> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
        return await response.json();
    }

    // Оновити користувача
    async update(userId: string, userData: UpdateUserData): Promise<User> {
        const response = await fetch(`${this.baseUrl}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error("Failed to update user");
        }
        return await response.json();
    }

    // Видалення користувача
    async delate(userId: string): Promise<User> {
        const response = await fetch(`${this.baseUrl}/${userId}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
        return await response.json();
    }
}

export const userService = new UserService();