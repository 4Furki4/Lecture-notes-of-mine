import { FaPlus } from 'react-icons/fa'
import AddItemProps from '../models/AddItem.props'
import { useRef } from 'react'
export default function AddItem({ setNewItem, handleSubmit, newItem }: AddItemProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='addForm container' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                type="text"
                autoFocus
                ref={inputRef}
                placeholder='Add Item'
                id='addItem'
                value={newItem}
                required
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                onClick={() => inputRef.current?.focus()}
                aria-label='Add Item'>
                <FaPlus />
            </button>
        </form>
    )
}
