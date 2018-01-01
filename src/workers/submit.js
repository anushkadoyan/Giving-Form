import axios from 'axios';
import {dispatch} from 'react';
import {reset} from 'redux-form';

export default(async function showResults(values) {

  axios.post(`http://localhost:8080`, JSON.stringify(values, null, 2), {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response);
      alert(response.data);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
});
