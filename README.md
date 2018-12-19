## Reduct-Builder 
Installing or linking this package globally will give you access to some terminal commands
for instantly producing React component files and folders. 

Each component is created as a directory with a "blown-out" component inside (the component is broken up into several individual files), and an index file to export the final component class or function. The named component folder will be inserted in the directory where the command was invoked, or in the directory specified by a relative path from the invocation directory, given as an argument.

To install: `npm install -g reduct-builder`  
*Note: This package has not yet been published to npm, so can't be installed using* `npm install` *just yet. To use it while it's still under development, you can clone this repo and link the package using* [`npm link`](https://docs.npmjs.com/cli/link.html)

### Commands
`create-component <component name or relative path>`

### Examples  
**With a name**  
Inside *project/src/client*  
`create-component MyComponent`  
Yields:  
project/src/client/MyComponent/*\*index.js and other files here\**

**With a relative path**  
Inside *project/src/client*  
`create-component components/MyComponent`  
Yields:  
project/src/client/components/MyComponent/*\*index.js and other files here\**

*Note that you need to be running Node version 10.12.0 or higher for the tool to automatically create any intermediate directories in your relative path if they don't already exist. Older versions will still work for creating components and pointing where to insert them, but will throw an error if any intermediate directory in the path doesn't exist.*
