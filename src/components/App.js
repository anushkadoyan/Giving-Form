import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "../workers/store";
import GivingForm from './GivingForm.js';
import submit from "../workers/submit.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div id="form-container">
            <GivingForm onSubmit={submit}/>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
