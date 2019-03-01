# Boxes

![](boxes.gif)

## To play the game

Before you do these steps, make sure you have `Node.js` installed in your computer.
You will need to have a `package.json` file in the directory there the package will be installed, 
if you don't have one then run this:

```
npm init
```
this command will create a ´package.json´ file in your directory.
    
    

#### 1. Install the packgage

```
npm install kanyas-boxes
```

#### 2. Create `index.js` file

```
touch index.js
```

#### 3. Open the file

```
open index.js
```

#### 4. Write the code below in `index.js`

```js
var boxes = require('kanyas-boxes');

boxes();
```

#### 5. Start the game

```
node index.js
```

## How to quit the game 

press `0` (the 'ctrl + c' won't work in this case)