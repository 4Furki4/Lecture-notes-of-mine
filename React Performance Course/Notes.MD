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