# Giving Form

Responsive Giving Form using React, Redux Form, Node, and card-react.




### To Run
In the root folder, run these commands:
```sh
$ npm install

$ npm start
```


### Code Samples

Input Validation

```
...

if (!values.CCexpiry|| !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(values.CCexpiry)) {
  errors.CCexpiry = 'Required';
}
if (!values.CCcvc || !/^[0-9]{3,4}$/.test(values.CCcvc)) {
  errors.CCcvc = 'Required';
}
return errors;
```
Redux Store
```
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
```

### Screenshots

<img src="https://github.com/anushkadoyan/Giving-Form/blob/master/src/screenshots/first-page.png" width="400">
<img src="https://github.com/anushkadoyan/Giving-Form/blob/master/src/screenshots/second-page.png" width="400">
<img src="https://github.com/anushkadoyan/Giving-Form/blob/master/src/screenshots/third-page.png" width="400">



