import ContentProps from '../models/Content.props'
import { ListItem } from './List/ListItem'
export default function Content({ items, deleteItem, handleCheck }: ContentProps) {

    return (
        <>
            {items.length
                ?
                (
                    <ul className="list">
                        {items.map(item =>
                            <ListItem item={item}
                                deleteItem={deleteItem}
                                handleCheck={handleCheck}
                                key={item.id}
                            />)}
                    </ul>
                )
                :
                (
                    <p>No items found!</p>
                )
            }
        </>
    )
}