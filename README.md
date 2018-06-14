# Enhanced Applications.extension

#### PhotoGrid+Redux

Your first version of the grid using React seems promising,
but you have a new bunch of features coming in, and would like to avoid state-related issues.

##### Organise your current state

Starting now, your components won't include any fetching logic,
they will only rely on `dispatch` to trigger those actions.

- Define what your actions are (basically, at this point you should be using a piece of paper).
Think of them as atomically as possible.
- Add a Redux store to your application (it will lay in a `store` folder))
- Write the reducer function for your pictures (it will lay in a `reducers` folder)
- Write the actions creators you need (they will lay in an `actions` folder)

hint: strings, as they can not be minified, are expensive, as all of our action types are strings,
a simple way to avoid gaining too much size is by using constants.

##### Bind with the view

For this part, you will need to add `react-redux` to your dependencies.

Using `connect`'s `mapStateToProps`  function, bind your PhotoGrid to your store.
From now on, you cannot have any reference to `this.state` on your PhotoGrid.
When mounting, your PhotoGrid must `dispatch` an action that will trigger fetching data.

##### Add

Add a form to your app that will allow for adding a new Picture.

##### Remove

Each of your pictures must now include a way (a cross, a button...) to be deleted.

#### Bonus

* Add ESLint to your project and use the right loader to hook it into your webpack configuration. Use AirBnB's configuration.
* If you did implement an infinite scrolling logic during the last project, try applying it here
* Use Jest to add Snapshot testing on your project
* Add Flowtype to your project.
* Describe your UI as routes and use react-router/react-router-redux to implement it.
* If you have experience with Redux, come talk to me about Generators and how they can improve your flow and the way you application scales.
