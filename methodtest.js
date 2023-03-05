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
        /*    for (const value of formData.values()) {
                 console.log(value);
            } 
        */

        fetch("https://httpbin.org/post", {method: 'POST', body: formData})
        .then(response => response.json())
        .then(result => {
            console.log('POST Success:');
   
            setTimeout(()=>{
                outputArea.innerText = JSON.stringify(result, null, 3);
            }, 10);

        })
        .catch(error => {
            console.error('POST Error:', error);
        });





        });


//GET        
        buttons[1].addEventListener('click', () => {

            
        });


//PUT        
        buttons[2].addEventListener('click', () => {

            
        });


//DELETE    
        buttons[3].addEventListener('click', () => {

                    
        });