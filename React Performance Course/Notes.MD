# React Performance Course Notes

## First Things First

- Do not optimize your app without measuring it first. Use the React Profiler to measure your app's performance.

- Once you measure you app performace, measure it again to make sure :D Then start optimizing.

## React Rerendering

### Dev Tools

- You can inspect your performance using the React Profiler. It will show you the components that are being rendered and how long it takes to render them.
    - It's good to activate the "Highlight Updates" option to see which components are being rerendered.

- Performance Tab in Chrome Dev Tools: You can use this to see how long it takes to render your app.

### Golden Rule

- Not Doing Stuff is Faster Than Doing Stuff

  - Preventing renders, memoizing and other stuff is faster than doing them.


### How does React do what it does ? 

#### Rendering Cycle

- React typically watches for changes generally triggered by state changes. Then it goes into Render Phase and calls all the functions or invokes all the classes and looks what's different than the list time. Then it goes into the Commit Phase and updates the DOM. And Passive Effects like useEffect are called before the Cleanup Phase.


- In react 18, batching will be enabled by default. So, if you change the state of a component multiple times, it will only render once. Beacuse it will batch all the changes and render them at once.

- A rendering happens in a parent state will trigger a render in all of its children. So, the first thing you should try to do is to push the state down as much as possible to prevent unnecessary renders. It's not always attainable but it's one of the things you should try to do first. The second important thing is that stopping rerendering cycles from happening before it triggers, idk, down more 50 levels of children that is not changed actually. So, push it down as much as possible and stop it from happening as much as possible.


### State Initialization

- You should pass the function to the useState hook to initialize the state. This way, the function will only be called once and not on every render.


### Pushing State Down

- You should push the state down as much as possible to prevent unnecessary renders. 

### Pulling The Content Up

- It's not important that where the component is in the DOM, the important thing is that where the component is written. So, you can pull a component up and pass it as a children to another component to prevent unnecessary renders as oppose to writing that component directly in that another component. For instance, you can pull a middle component up and pass it as a children to the parent component to prevent unnecessary renders.

- Once you have a list of items and you pull the content up, it will cause the parent rerender and children components gets rerendered. For example, once you remove an element from an array of elements, the array gets changed and all children components get rerendered. Make sure you don't pull the content up when unnecessary.

### Memoization

- You can use the useMemo hook to memoize the value of a function. This way, the function will only be called when the dependencies change. But be careful, memoization can be a double-edged sword. It can be a performance boost but it can also be a performance hit. First, use the technique above to prevent unnecessary renders and then use memoization if you need to. The problem with memoization is that when props are passed as reference, it will always change and the memoized function will always be called. So, be careful with memoization.

### useMemo and useCallback

- useMemo can be used to calculate expensive values and useCallback can be used to create memoized functions. They both take a function and an array of dependencies. They will only be called when the dependencies change.

### useReducer and dispatch

- Instead of passing functions returned by useCallback to a component, you can use useReducer to create a dispatch function. This way, the components will get the same dispatch function and it will not be recreated on every render.
  - Since useState is a wrapper around useReducer, you can pass the useState setter function and do your logic in the children components as well.

### ContextAPI

- the problem with using contextAPI is that you can instantly lose all the performance gain above if you provide your context with an object. The reason is the same: objects are passed by reference and each time your list changes, the static dispatch will change as well. Or if your context provider covers more than one state, re-rendering one property will cause re-rendering for other property(ies). So, make sure you have multiple context and use the Single Responsibility technique for contextAPI actually.