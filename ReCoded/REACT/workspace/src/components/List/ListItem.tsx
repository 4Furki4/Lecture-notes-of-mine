import { FaTrashAlt } from "react-icons/fa";
import ListItemProps from "../../models/ListItem.props";

export function ListItem({ item, handleCheck, deleteItem }: ListItemProps) {
    return (
        <>
            {<li className="list-item" key={item.id}>
                <input onChange={handleCheck(item.id)} type="checkbox" name="itemCheck" checked={item.checked} />
                <label htmlFor="itemCheck" onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                <FaTrashAlt aria-label={`Delete-${item.item}`} onClick={deleteItem(item.id)} className="trash-icon" role="button" tabIndex="0" /> </li>
            }
        </>
    )
}