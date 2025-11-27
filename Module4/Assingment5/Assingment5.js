'use strict';
    console.log('the script starts');

    function synchronousFunction() {
      let number = 1;
      for(let i = 1; i < 100000; i++){
        number += i;
        console.log('synchronousFunction running');
      }
      console.log('regular function complete', number);
    }

    async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
        console.log('asynchronous download begins');
        try {                                               // error handling: try/catch/finally
            const response = await fetch('https://api.chucknorris.io/jokes/random');    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            console.log(jsonData.value);    // log the result to the console
             document.getElementById('target').textContent = jsonData.value; //added answer to also show in HTML
        } catch (error) {
            console.log(error.message);
        } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
            console.log('asynchronous load complete');
        }
    }

    synchronousFunction();
    asynchronousFunction();

    console.log('the script ends');

/*
Make an app that retrieves a random Chuck Norris joke and displays it in the console.
API to use: chucknorris.io
Send a request to https://api.chucknorris.io/jokes/random
and print only the joke to the console (that would be the 'value' property)
No need to add a form.
 */