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

            fetch("https://httpbin.org/post", {method: 'POST', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body: formData})
            .then(response => response.json())
            .then(result => {
                console.log('POST Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = JSON.stringify(result, null, 5);
                }, 10);

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
            //let data = [...formData.entries()];

            const qString = new URLSearchParams(formData).toString();

            let returnStr = `/?${qString}`
            console.log(returnStr);
        
            
            let getUrl = "https://httpbin.org/get" + returnStr;


            fetch(getUrl, {method: 'GET', Headers:{'Accept': 'application/json', 'Accept-Encoding':'application/json'} })
            .then(response => response.json()) //console.log(typeof response)
            .then(result => {
                console.log('GET Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = JSON.stringify(result, null, 5);
                }, 10);

            })
            .catch(error => {
                console.error('GET Error:', error);
            });

            
        });


//PUT        
        buttons[2].addEventListener('click', () => {
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const formData = new FormData(myForm);

            fetch('https://httpbin.org/put', {method: 'PUT', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body: formData })
            .then(response => response.json()) 
            .then(result => {
                console.log('PUT Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = JSON.stringify(result, null, 5);
                }, 10);

            })
            .catch(error => {
                console.error('PUT Error:', error);
            });


            
        });


//DELETE    
        buttons[3].addEventListener('click', () => {
            outputArea.innerText = '';

            const myForm = document.querySelector('form');
            const formData = new FormData(myForm);

            fetch('https://httpbin.org/delete', {method: 'DELETE', Headers:{'Content-Type': 'application/x-www-form-urlencoded'}, body: formData })
            .then(response => response.json()) 
            .then(result => {
                console.log('DELETE Success:');
    
                setTimeout(()=>{
                    outputArea.innerText = JSON.stringify(result, null, 5);
                }, 10);

            })
            .catch(error => {
                console.error('DELETE Error:', error);
            });



                    
        });

        