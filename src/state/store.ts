// Зберігання та управління станом
import type { User, StoreListener } from "../types/user.types";

class Store {
    private users: User[] = [];
    private listeners: StoreListener[] = [];

    // Отримання користувачів
    getUsers(): User[] {
        return this.users;
    }

    // Встановити користувачів
    setUsers(users: User[]): void {
        this.users = users;
        this.notify();
    }

    // Додати користувача
    addUser(user: User): void {
        this.users.unshift(user);
        this.notify();
    }

    // Оновити користувача
    updateUser(updatedUser: User): void {
        this.users = this.users.map(user => user.id === updatedUser.id ? updatedUser : user);
        this.notify();
    }

    // Видалення користувачча
    removeUser(userId: string): void {
        this.users = this.users.filter(user => user.id !== userId);
        this.notify();
    }

    // Підписка на зміни
    subscribe(callback: StoreListener): void {
        this.listeners.push(callback);
    }

    // Сповістити слухачів
    private notify(): void {
        this.listeners.forEach(callback => callback(this.users));
    }
}

export const store = new Store();