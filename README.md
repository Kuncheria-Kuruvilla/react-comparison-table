# react-comparison-table
A comparison table component for react.

## Install
```
npm install react-comparison-table --save

```
## Demo
Click
**[here]( https://kuncheria-kuruvilla.github.io/react-comparison-table/) for demo.**

## Usage
Here is how to get things started.

```js
import React from 'react';
import { render } from 'react-dom';
import CompareChart from '../../src';
var data = [
    { Name: "Product 1", id: "1", 
    image: "https://goo.gl/Wk14oo",
    feature1: "feature 1 of product 1", 
    feature2: "feature 2 of product 1", 
    feature3: "feature 3 of product 1" },

    { Name: "Product 2", id: "2" ,
    image: "https://goo.gl/Wk14oo",
    feature2: "feature 2 of product 2", 
    feature3: "feature 3 of product 2"},

    { Name: "Product 3", id: "3", 
    image: "https://goo.gl/Wk14oo",
    feature1: "feature 1 of product 3", 
    feature2: "feature 2 of product 3", 
    feature3: "feature 3 of product 3" },

    { Name: "Product 4", id: "4",
    image: "https://goo.gl/Wk14oo", 
    feature1: "feature 1 of product 4", 
    feature2: "feature 2 of product 4", 
    feature3: "feature 3 of product 4" }
];
const App = () => (
    <div style={{width:"75%", marginLeft:"auto", marginRight:"auto"}}>
    <CompareChart 
    data={data} 
    features={["feature1","feature3"]}/>
    </div>
);

render(<App />, document.getElementById("root"));

```
### Item hiding
This option gives you the option to hide products. To enable the item hiding option use the property 
```js 
hideItemOption
```
.

```js
    <CompareChart 
    data={data} 
    features={["feature1","feature3"]} 
    hideItemOption = {true}
    />
```

On enabling the option a trash icon appears next item names in the chart. By default clicking the trash icon removes that item from the list of items provided to the 
```js 
data
``` 
property.

You can override this behavior by using the
```js
onHide
```
property.

```js
const App = () => (
    <div style={{width:"75%", marginLeft:"auto", marginRight:"auto", marginTop: "5%"}}>
    <CompareChart 
    data={data} 
    features={["feature1","feature3"]} 
    hideItemOption = {true}
    onHide = {onHideCallback}
    />
    </div>
);
const onHideCallback = (product_id) => {
    console.log("Hide product with id - " + product_id);
}
``` 