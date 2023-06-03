import { FormEvent } from "react";

export default interface AddItemProps {
    newItem: string,
    setNewItem: (newItem: string) => void,
    handleSubmit: (e: FormEvent) => void
}