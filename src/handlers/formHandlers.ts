// Обробка форми 
import { userService } from "../services/userService";
import { store } from "../state/store";
import { MESSAGES } from "../config/constants";
import type { UpdateUserData, UserFormData } from "../types/user.types";

// Обробник створення користувача
export const handleCreateUser = async (
    e: SubmitEvent,
    form: HTMLFormElement
): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData) as unknown as UserFormData;

    try {
        const newUser = await userService.create({
            name: userData.userName,
            city: userData.userCity,
            email: userData.userEmail,
            avatar: userData.userImageUrl
        });

        store.addUser(newUser);
        form.reset();
        alert(MESSAGES.SUCCESS_CREATE);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error(MESSAGES.ERROR_CREATE, errorMessage);
        alert(MESSAGES.ERROR_CREATE);
    }
};