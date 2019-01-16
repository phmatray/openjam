# Components folder

The global/common components folder. Every component that might be used in two or more views are put in this folder. Every component has its own folder, index.js and styles.module.scss for the component styles. I'll come on the styles.module.scss part later. For now, just keep reading.

I prefer to keep components simple, declared as arrow functions. This way, I somehow manage to "polite myself" against abusing the component responsibility (i.e. overusing state). It's a rare case when components do use state, but sometimes it is necessary. Also, some may include nested components (like a dropdown menu or so).

## Naming conventions

```
"ComponentName.js"
```

**A component must:**

- use CamelCase for component name
- use .js extension
- contains only one component
- should be stateless
- should prefer Hooks

## Architecture

- [Fractal - A react app structure for infinite scale - Shivek Khurana - 09/2017](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)
