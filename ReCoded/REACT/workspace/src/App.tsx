import { FormEvent, useState, useEffect } from "react";
import Content from "./components/Content";
import { Item } from "./models/Content.props";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import apiRequest from "./apiRequest";
import { Options, OptionsBuilder } from "./optionObjectBuilder";
export default function App() {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([] as Item[])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('could not received any data')
        const listItems: Item[] = await response.json()
        setItems(listItems)
        setFetchError(null)
      } catch (error: any) {
        setFetchError(error)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)

  }, [])
  function handleCheck(id: number) {
    return async () => {
      const newItems = items.map((item: Item) => item.id === id ? { ...item, checked: !item.checked } : item)
      setItems(newItems)
      const itemToUpdate = newItems.find((item: Item) => item.id === id)!
      let endPoint = `${API_URL}/${id}`
      let options: Options = new OptionsBuilder().setMethod('PATCH').setHeader({ "Content-Type": 'application/json' }).setBody({ checked: itemToUpdate.checked }).build()
      const response = await apiRequest(endPoint, options)
      if (response) setFetchError(response)
    }
  }
  function deleteItem(id: number) {
    return async () => {
      const newItems = items.filter((item: Item) => item.id !== id)
      setItems(newItems)
      let endPoint = `${API_URL}/${id}`
      let options: Options = new OptionsBuilder().setMethod('DELETE').setHeader({ "Content-Type": 'application/json' }).build()
      const response = await apiRequest(endPoint, options)
      if (response) setFetchError(response)
    }
  }

  async function addNewItem(itemName: string) {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const itemToAdd: Item = {
      id,
      checked: false,
      item: itemName
    }
    const newListofItems = [...items, itemToAdd]
    setItems(newListofItems)
    let options: Options = new OptionsBuilder().setMethod('POST').setHeader({ "Content-Type": 'application/json' }).setBody(itemToAdd).build()
    const errorMessageResponse = await apiRequest(API_URL, options)
    if (errorMessageResponse) setFetchError(errorMessageResponse)
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
      <main className='container'>
        {isLoading && <p className='loading text-center'>Loading...</p>}
        {fetchError && <p className='error text-center'>{(fetchError as any).message}</p>}
        {
          !fetchError
          &&
          !isLoading
          &&
          < Content
            items={itemsFilteredBySearch(items)}
            handleCheck={handleCheck}
            deleteItem={deleteItem}
          />}
      </main>
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