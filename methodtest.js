window.addEventListener('DOMContentLoaded', init);
   
function init () {
        //date part
        let date = document.querySelector('#articleDate');
        date.value = new Date();



        //http part
        let buttons = document.getElementsByTagName('button');
        let outputArea = document.getElementById('response');

//POST
        buttons[0].addEventListener('click', () => {            
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const formData = new FormData(myForm);

            fetch("https://httpbin.org/post", {method: 'POST', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body:  formData})
            .then(response => response.json())
            .then(resultJSON => {
                console.log('POST Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = DOMPurify.sanitize(JSON.stringify(resultJSON, null, 5));
                }, 0);

            })
            .catch(error => {
                console.error('POST Error:', error);
            });


        });


//GET        
        buttons[1].addEventListener('click', () => {
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const formData = new FormData(myForm);

            const qString = new URLSearchParams(formData).toString();
    
            let getUrl = `https://httpbin.org/get?${qString}`;

            fetch(getUrl, {method: 'GET', Headers:{'Accept': 'application/json', 'Accept-Encoding':'application/json'} })
            .then(response => response.json()) 
            .then(resultJSON => {
                console.log('GET Success: ');
    
                setTimeout(()=>{
                    outputArea.innerText = DOMPurify.sanitize(JSON.stringify(resultJSON, null, 5));
                }, 0);

            })
            .catch(error => {
                console.error('GET Error: ', error);
            });

            
        });


//PUT        
        buttons[2].addEventListener('click', () => {
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const formData = new FormData(myForm);

            fetch('https://httpbin.org/put', {method: 'PUT', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body: formData })
            .then(response => response.json()) 
            .then(resultJSON => {
                console.log('PUT Success: ');
    
                setTimeout(()=>{
                    outputArea.innerText = DOMPurify.sanitize(JSON.stringify(resultJSON, null, 5));
                }, 0);

            })
            .catch(error => {
                console.error('PUT Error: ', error);
            });

            
        });


//DELETE    
        buttons[3].addEventListener('click', () => {
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const idRec = myForm.querySelector('#idRecord');


            const queryStr = `?idRecord=${idRec.value}`             //DELETE only using ID number

            fetch('https://httpbin.org/delete'+queryStr, {method: 'DELETE', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(response => response.json()) 
            .then(resultJSON => {
                console.log('DELETE Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = DOMPurify.sanitize(JSON.stringify(resultJSON, null, 5));
                }, 0);

            })
            .catch(error => {
                console.error('DELETE Error: ', error);
            });

                    
        });

}
