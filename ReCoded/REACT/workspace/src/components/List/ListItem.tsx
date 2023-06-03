import { FaTrashAlt } from "react-icons/fa";
import ListItemProps from "../../models/ListItem.props";

export function ListItem({ item, handleClick, deleteItem }: ListItemProps) {
    return (
        <>
            {<li className="list-item" key={item.id}>
                <input onChange={handleClick(item.id)} type="checkbox" name="itemCheck" checked={item.checked} />
                <label htmlFor="itemCheck" onDoubleClick={() => handleClick(item.id)}>{item.item}</label>
                <FaTrashAlt aria-label={`Delete-${item.item}`} onClick={deleteItem(item.id)} className="trash-icon" role="button" tabIndex="0" /> </li>
            }
        </>
    )
}