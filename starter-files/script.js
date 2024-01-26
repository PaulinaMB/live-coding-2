// API
const API_ENDPOINT = 'https://yesno.wtf/api';
/*Retroalimentación:
La desarrolladora se mostro segura de si misma, mantuvo su camara prendida y relató el desarrollo del codigo. 
*/

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

//Retroalimentación: 
/* 
 */

fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => console.error('Ups', error));