## Views folder

For the components folder we defined our visual — or presentational — components, which rarely rely on state and/or another components orchestration. In the views folder, however, we define our container components, which will serve as, you guess: the views for our application. As you might think, these components most of the time rely on state, so no arrow functions here and extending from React.PureComponent instead of React.Component is recommended!
