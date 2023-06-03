# React Notes



## useEffect

- useEffect hook takes a callback function and a dependency.
- What it does is that it calls the callback function when the dependent changes
````ts
useEffect(() => {
    console.log('load time')
}, []) // [] never changes after rendering the component.
useEffect(() => {
    console.log('items are changed')
}, items)


useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items))
}, [items]) // Instead of creating a function to set and save our items to LS, we can create a useEffect hook to save the items to LS when items change ! THAT ROCKS! 
````

- With that said, useEffect hook is a async function and it runs either when the entire content gets rendered or its dependency gets changed.