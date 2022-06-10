# Questions
## What is the difference between Component and PureComponent? give an example where it might break my app.
A `PureComponent` implements the lifecycle method `shouldComponentUpdate` and does a shallow comparison of the new props and new state with the old version.
On the other hand, the 'component' is re-rendered if changes in state and props are detected. This way can improve the performance of the application, however it can break the application. An example would be if a property has just mutated, the shallow comparison will not detect the change and the component will not re-render

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
It could be dangerous to use `Context + ShouldComponentUpdate` for example when a component decides it doesn't need to re-render in the `shouldComponentUpdate` method, it will not re-render the child component tree. So if there were to be changes to any child components, since they were not provided
through the props, but through the context then they will not be re-rendered

## Describe 3 ways to pass information from a component to its PARENT.
Three ways to pass information to it's parent:
1. Using a same context in both components, when child component changes the data in the context, the parent
component can use it.
2. State management library, in this case all components may use and change the application state.
3. Using a callback passed from parent component to child as prop.

## Give 2 ways to prevent components from re-rendering.
1. Using `useMemo` with empty dependencies array
```
    useMemo(() => <ComponentName />, [])
```
2. Implement `shouldComponentUpdate` method and return false.

## What is a fragment and why do we need it? Give an example where it might break my app.
We use Fragment to wrap elements without adding a DOM element. Since React requires to return single root element from the react component.
I am not really sure how Fragment can break severely the app but I think that could cause problems with styles in some cases.

## Give 3 examples of the HOC pattern.
1. A component can inherit behaviors from another component and use it.
For instance when we use internationalization we can use a HOC like `withTranslation` to use the corresponding text according the selected language.
2. Another example is `withRouter` HOC that we can use to implement routing in the application.
3. Also we can use a HOC to use a `loading animation component` and call that component when something is loading in the component that implements it.

## what's the difference in handling exceptions in promises, callbacks and async...await.
In `callbacks` we can handle exceptions providing the error to the callback function when it happens.
Due to we can obtain a `callback hell` we have the option to use `Promises` that are better in my opinion, we can use `try/catch` blocks and the control jumps to the closest rejection handler when a promise rejects or even when any error happens, since is treated as a promise rejection.
The await/async option does not have implicit try/catch blocks as the Promises, so we need to add it explicitly in order to handle exceptions.


## How many arguments does setState take and why is it async.
It is asynchronous, because:
1. There may be updates from different sources at the same time
2. Calculations can be heavy in the setState
3. Calculations are done in batches that are processed asynchronously since otherwise it could cause changes in the child component, the parent, and then again in the child

## List the steps needed to migrate a Class to Function Component.
1. Remove the class keyword and the extends React.Component part and define it as a function or even as an arrow function. Remember use `props` argument or use object destructuring.

```
    class MyComponent extends React.Component {
```
To
```
    function MyComponent(props) {
```
Or
```
    const MyComponent = (props) => {
```
2. Move the content of the `render()` method to the body of the function. 
3. Convert all class methods to stand-alone functions or set `const`ants using arrow functions.
4. Remove the `constructor` and replace state definition to `useState` hooks.
5. Replace `setState` calls with `useState` setters.
6. Remove `this` and only use the name of the variables or functions.
7. Replace state update side effects and lifecycle methods with `useEffect` hooks

## List a few ways styles can be used with components.
Import CSS/SCSS/SASS/LESS files in the components and use the classes with className properties of the components. That way it would be rendered in the class attribute of DOM element and the styles applied according to the CSS.
We can set styles through the style property of the component accepting object with styles and rendering them into the style attribute.
Another way to apply styles is to use styling libraries like styled-components, which we can have pre-styled components, props-based styling and even use SCSS.

## How to render an HTML string coming from the server.
```
<div dangerouslySetInnerHTML={{__html: data}} />
```
Remember that using `dangerouslySetInnerHTML` is risky and can expose the app for a XSS atack.