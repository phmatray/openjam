# Must have

The root folder is a folder with the name of the "Component" in CamelCase.

## General

- use CamelCase for component name
- use .js extension
- contains only one component
- should be stateless
- should prefer Hooks

## This folder

- `<Component>` (folder)
  - `index.js`
    - the index.js file exports the component container _(or presenter if it doesn't exist)_
    - should call HOCs when needed with compose function
  - `<Component>.presenter.js`
    - should be a functional component
    - should implement a Props Type from flow
    - shouldn't call HOCs (**no** connect, withTheme...)
  - `<Component>.container.js` _(optional)_
    - must call a "Presenter" component
    - should be a class based component
    - should implement a Props Type from flow
    - should call HOCs (connect, withTheme...)
  - `sample.json` _(optional)_
    - contains the sample data used by the tests or storybook
  - `styled` _(optional)_
    - contains the styled-components used by the presenter
  - `children` _(optional)_
    - contains sub presenters
