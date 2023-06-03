import { Item } from "./Content.props";

export default interface ListItemProps {
    item: Item
    handleCheck: (id: number) => () => void,
    deleteItem: (id: number) => () => void
}