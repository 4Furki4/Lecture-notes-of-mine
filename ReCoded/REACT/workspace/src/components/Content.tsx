import ContentProps from '../models/Content.props'
import { ListItem } from './List/ListItem'
export default function Content({ items, deleteItem, handleClick }: ContentProps) {

    return (
        <main className='container'>
            {items.length
                ?
                (
                    <ul className="list">
                        {items.map(item =>
                            <ListItem item={item}
                                deleteItem={deleteItem}
                                handleClick={handleClick}
                                key={item.id}
                            />)}
                    </ul>
                )
                :
                (
                    <p>No items found!</p>
                )
            }
        </main>
    )
}