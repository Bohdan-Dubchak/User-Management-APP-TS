// Обробник дії з користувачами 
import { userService } from "../services/userService";
import { store } from "../state/store";
import { MESSAGES } from "../config/constants";
import { populateDialog } from "../components/editDialog";

// Обробник видалення користувача
export const handleDeleteUser = async (userId: string): Promise<void> => {
    const confirmed = confirm(MESSAGES.CONFIRM_DELETE);
    if (!confirmed) return

    try {
        await userService.delate(userId);
        store.removeUser(userId);
        alert(MESSAGES.SUCCESS_DELETE);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.log(MESSAGES.ERROR_DELETE, errorMessage);
        alert(MESSAGES.ERROR_DELETE);
    }
};

// Обробник відкриття діалогу редагування
export const handleEditUser = (userId: string, dialog: HTMLDialogElement): void => {
    populateDialog(userId, dialog);
    dialog.showModal();
};

// Делегування події для контейнера
export const handleContainerClick = (
    e: MouseEvent,
    dialog: HTMLDialogElement
): void => {
    const target = e.target as HTMLElement;

    // Видалення
    if (target.hasAttribute("data-user-remove-btn")) {
        const userId = target.dataset.userId;
        if (userId) {
            handleDeleteUser(userId);
        }
        return;
    }

    // Редагування
    if (target.hasAttribute("data-user-edit-btn")) {
        const userId = target.dataset.userId;
        if (userId) {
            handleEditUser(userId, dialog);
        }
    }
};