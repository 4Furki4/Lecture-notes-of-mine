import { FormEvent, useState } from "react";
import Content from "./components/Content";
import { Item } from "./models/Content.props";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList') || '[]'))
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  function setAndSaveItemsToLS(newItems: Item[]) {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }
  function handleClick(id: number) {
    return () => {
      const newItems = items.map((item: Item) => item.id === id ? { ...item, checked: !item.checked } : item)
      setAndSaveItemsToLS(newItems)
    }

  }
  function deleteItem(id: number) {
    return () => {
      const newItems = items.filter((item: Item) => item.id !== id)
      setAndSaveItemsToLS(newItems)
    }
  }
  function addNewItem(itemName: string) {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const itemToAdd: Item = {
      id,
      checked: false,
      item: itemName
    }
    const newListofItems = [...items, itemToAdd]
    setAndSaveItemsToLS(newListofItems)

  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!newItem) return
    addNewItem(newItem)
    setNewItem('')
  }
  function itemsFilteredBySearch(items: Item[]) {
    return items.filter((item) => {
      return item.item.toLowerCase().includes(search.toLowerCase())
    })
  }
  return (
    <>
      <Header />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={itemsFilteredBySearch(items)}
        handleClick={handleClick}
        deleteItem={deleteItem}
      />
      <AddItem
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        newItem={newItem}
      />
      <Footer
        length={items.length}
      />
    </>
  )
}