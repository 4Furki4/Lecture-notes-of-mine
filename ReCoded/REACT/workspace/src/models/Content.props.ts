export default interface ContentProps {
    items: Item[]
    handleClick: (id: number) => () => void,
    deleteItem: (id: number) => () => void
}

export interface Item {
    id: number,
    checked: boolean,
    item: string
}