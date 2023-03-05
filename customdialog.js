// getting buttons, dialog fields, and result fields
let buttons = document.getElementsByTagName('button');
let dialogs = document.getElementsByTagName('dialog');
let results = document.getElementsByTagName('result');

//alert button
buttons[0].addEventListener('click', () =>{
    //change background for some contrast, similar to example
    let background = document.getElementsByTagName('html');
    background[0].style = ' background-color:rgb(70, 224, 224);';

    //set result areas to be blank, no style or content
    results[0].innerHTML = "";
    results[0].style = "";
    //give dialog field to user for alert.
    dialogs[0].innerHTML = "Alert Pressed! <br> <button id='alertOkButton'>Ok</button> ";
    dialogs[0].open = true;

    //user hits ok for alert prompt, and we change dialog to show this and change background back to regular, 
    //note I am mimicking the example video where there is only the 'ok' response to the alert dialog field
    let innerOkButton = document.getElementById('alertOkButton');
    innerOkButton.addEventListener('click', () =>{
        //closing dialog for prompt
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        background[0].style = 'background-color:rgb(200, 224, 224);';
    });

});

//confirm button
buttons[1].addEventListener('click', () =>{
    //change background for some contrast, similar to example
    let background = document.getElementsByTagName('html');
    background[0].style = ' background-color:rgb(110, 224, 224);';
    //set result areas to be blank, no style or content
    results[0].innerHTML = "";
    results[0].style = "";
    //give dialog field to user to confirm or not
    dialogs[0].innerHTML = "Do you confirm this? <br> <button id='confirmOkButton'>Ok</button> <button id='confirmCancelButton'>Cancel</button> ";
    dialogs[0].open = true;

    //set confirm result field to reflect clicking ok
    let innerOkButton = document.getElementById('confirmOkButton');
        innerOkButton.addEventListener('click', () =>{
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink;';
        results[0].innerHTML = confirmResultTemplateStr('true');
        background[0].style = 'background-color:rgb(200, 224, 224);';
    });

    //set confirm result field to reflect clicking cancel
    let innerCancelButton = document.getElementById('confirmCancelButton');
        innerCancelButton.addEventListener('click', () =>{
        //closing dialog for prompt
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink;';
        results[0].innerHTML = confirmResultTemplateStr('false');
        background[0].style = 'background-color:rgb(200, 224, 224);';
    });

});

//helper tagged template strings
function confirmResultTemplateStr(result){
    return `Confirm result: ${result}`
}
function promptResultTemplateStr(result){
    return `Prompt result: ${result}`
}

//Prompt button
buttons[2].addEventListener('click', () =>{
    let background = document.getElementsByTagName('html');
    background[0].style = ' background-color:rgb(170, 224, 224);';

    //set result areas to be blank, no style or content
    results[0].innerHTML = "";
    results[0].style = "";
     //give dialog field to user to enter prompt or not
    dialogs[0].innerHTML = "What is your name? <br> <textarea id='promptTextArea'> </textarea> <br> <button id='promptOkButton'>Ok</button> <button id='promptCancelButton'>Cancel</button> ";
    dialogs[0].open = true;

    let innerOkButton = document.getElementById('promptOkButton');

    //user clicks ok on prompt dialog field, grabs text inputted from user and populates result field, catches empty string given case
    innerOkButton.addEventListener('click', () =>{
        let promptTxtArea = document.getElementById('promptTextArea');   
        //sanitizing user input
        let txtFromUser = DOMPurify.sanitize(promptTxtArea.value);
        //if txt from user is blank, no name is given
        txtFromUser = txtFromUser===' ' ? "No name given" : txtFromUser;

        //closing dialog for prompt
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        //setting results values to txt from user.
        results[0].innerHTML = promptResultTemplateStr(txtFromUser);
        background[0].style = 'background-color:rgb(200, 224, 224);';
    });

    //user click cancel on prompt dialog field, populates results with that information
    let innerCancelButton = document.getElementById('promptCancelButton');
    innerCancelButton.addEventListener('click', () =>{
        //close dialog field
        dialogs[0].open = false;
        dialogs[0].innerHTML = "";
        results[0].style = 'border: solid 1px black; font-weight:500; background-color:pink';
        
        //populate result field to reflect user hit cancel
        results[0].innerHTML = promptResultTemplateStr('No name given, User hit cancel');
        background[0].style = 'background-color:rgb(200, 224, 224);';
    });

});
