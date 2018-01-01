import axios from 'axios';

export default(async function showResults(values) {

  axios.post(`http://localhost:8080`, JSON.stringify(values, null, 2), {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response);
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
