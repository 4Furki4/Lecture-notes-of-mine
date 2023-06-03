import { Item } from "./Content.props";

export default interface ListItemProps {
    item: Item
    handleClick: (id: number) => () => void,
    deleteItem: (id: number) => () => void
}