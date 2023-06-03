export default interface ContentProps {
    items: Item[]
    handleCheck: (id: number) => () => void,
    deleteItem: (id: number) => () => void
}

export interface Item {
    id: number,
    checked: boolean,
    item: string
}