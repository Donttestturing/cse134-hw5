    //initialization function, attempts to get from local storage, if empty, add prepopulated blog posts to local storage and then call loadfromlocalstorage
    function init() {

        let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        let postDate = JSON.parse(localStorage.getItem('Post Dates'));
        let postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        if(postTitles === null || postDate === null  || postSummary === null || postSummary.length===0 || postDate.length===0 || postTitles.length===0){
            localStorage.setItem('Post Titles', JSON.stringify(['First Post', 'Second Post', 'Trials of the Mind']));
            localStorage.setItem('Post Dates', JSON.stringify(['2023-02-20', '2023-02-21', '2023-02-22']));
            localStorage.setItem('Post Summaries', JSON.stringify(['I made my first blog post today. It went ok.', 'My second blog post went a lot better than my first. Perhaps Practice makes perfect', 'I tried to set up a CRUD application today, I am feeling like... Well you know what...']));

            postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            postDate = JSON.parse(localStorage.getItem('Post Dates'));
            postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        } 

        loadFromLocalStorage();
    
    }
    init();

    //helper function to load from local storage and render entries to the screen
    function loadFromLocalStorage(){

        let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        let postDate = JSON.parse(localStorage.getItem('Post Dates'));
        let postSummary = JSON.parse(localStorage.getItem('Post Summaries'));

        let blogPosts = document.getElementsByTagName('output');

        for (let index = 0; index < postTitles.length; index++) {
            blogPosts[0].innerHTML += '<li>' + postTitles[index] +  ': ' + postDate[index] + ' — ' + postSummary[index] + " |"  + "<button class='editButton'> Edit </button> " + "<button class='deleteButton'> Delete </button>"  +  ' </li>';

        }
        

    }  

//using dom to access elements
    let blogPosts = document.getElementsByTagName('output');
    let deleteButtons = blogPosts[0].getElementsByClassName('deleteButton');
//items' delete buttons
    for (let index = 0; index < deleteButtons.length; index++) {
        //clicking delete for each entry brings up user dialog field related to that specific entry by index
        deleteButtons[index].addEventListener('click', () =>{
            let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            let postDates = JSON.parse(localStorage.getItem('Post Dates'));
            let postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));

            //confirm delete field
            let userDialogField = document.getElementById('userDialogField');
            userDialogField.open = true;
            userDialogField.innerHTML = ` <p> <b> Do you want to delete this entry? </b> </p> <br> 
                                        <button id="delConfirmButton">
                                            Delete
                                        </button>
                                        <button id="cancelButton">
                                            Cancel
                                        </button>`;

            //cancel sub-button for deleting, just closes the field and does nothing to localstorage
            cancelButton.addEventListener('click', ()=>{
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });

            //confirm delete sub-button, removes that entry from local storage
            let delConfirmButton = document.getElementById('delConfirmButton');
            delConfirmButton.addEventListener('click', ()=>{
                postTitles.splice(index, 1);
                postDates.splice(index, 1);
                postSummaries.splice(index, 1);

                localStorage.setItem('Post Titles', JSON.stringify(postTitles));
                localStorage.setItem('Post Dates', JSON.stringify(postDates));
                localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));

                //closing field
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                //reloading window to rerender changes to localstorage, MPA basically
                window.location.reload();
            });

          
        });
        
    } 
//items' edit buttons
    let editButtons = blogPosts[0].getElementsByClassName('editButton');
    //clicking edit for each entry brings up user dialog field related to that specific entry by index
    for (let index = 0; index < editButtons.length; index++) {
        editButtons[index].addEventListener('click', () => {
            //parsing from local storage
            let postTitles = JSON.parse(localStorage.getItem('Post Titles'));
            let postDates = JSON.parse(localStorage.getItem('Post Dates'));
            let postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));

            //getting user field and making it visible
            let userDialogField = document.getElementById('userDialogField');
            userDialogField.open = true;

            //giving entry fields with prepopulated values
            userDialogField.innerHTML = ` <label for="postTitle">Edit Title:</label>
                        <input type="text" id="postTitle" name="postTitle" value="${postTitles[index]}" required>
        
                        <label for="Date">Edit Date:</label>
                        <input type="date" id="Date" name="Date" value=${postDates[index]} required>
                        <br>
                        <label for="summary">Edit Summary:</label> <br>
                        <textarea id="summary" name="summary" required> ${postSummaries[index]} </textarea>
                        <br>
                        <button id="saveButton">
                            Save
                        </button>
                        <button id="cancelButton">
                            Cancel
                        </button>`;


            //cancel sub-button in the user dialog field for edit
            cancelButton.addEventListener('click', ()=>{
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });

            //save sub-button in the user dialog field, saving edits for that user given entry to local storage in the same index
            saveButton.addEventListener('click', ()=>{
                let postTitleEle = document.getElementById('postTitle');
                let dateEle = document.getElementById('Date');
                let summaryEle = document.getElementById('summary');
        
                const postTitles = JSON.parse(localStorage.getItem('Post Titles'));
                const postDates = JSON.parse(localStorage.getItem('Post Dates'));
                const postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));
    
                //editing and sanitizing user inputs
                postTitles[index] = DOMPurify.sanitize(postTitleEle.value);
                postDates[index] = DOMPurify.sanitize(dateEle.value);
                postSummaries[index] = DOMPurify.sanitize(summaryEle.value);

                localStorage.setItem('Post Titles', JSON.stringify(postTitles));
                localStorage.setItem('Post Dates', JSON.stringify(postDates));
                localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));
            
                //closing field
                userDialogField.open = false;
                userDialogField.innerHTML = '';

                blogPosts[0].innerHTML = '';
                loadFromLocalStorage();
                window.location.reload();
            });


        });
        
    } 

//app's add button
  let addButtons = document.getElementsByClassName('addButton');
    //clicking add brings up user dialog field
  addButtons[0].addEventListener('click', () => {
    let userDialogField = document.getElementById('userDialogField');
    userDialogField.open = true;
    //giving default fields for adding to blog posts
    userDialogField.innerHTML = ` <label for="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" required>

                <label for="Date">Date:</label>
                <input type="date" id="Date" name="Date" required>
                <br>
                <label for="summary">Summary:</label> 
                <textarea id="summary" name="summary" required> </textarea>
                <br>
                <button id="saveButton">
                    Save
                </button>
                <button id="cancelButton">
                    Cancel
                </button>`;

    let saveButton = document.getElementById('saveButton');
    let cancelButton = document.getElementById('cancelButton');

     //cancel sub-button in the user dialog field, field closes and local storage is unchanged.
    cancelButton.addEventListener('click', ()=>{
        userDialogField.open = false;
        userDialogField.innerHTML = '';
    });

    //save sub-button in the user dialog field, appending user given entry to local storage 
    saveButton.addEventListener('click', ()=>{
        let postTitleEle = document.getElementById('postTitle');
        let dateEle = document.getElementById('Date');
        let summaryEle = document.getElementById('summary');

        const postTitles = JSON.parse(localStorage.getItem('Post Titles'));
        const postDates = JSON.parse(localStorage.getItem('Post Dates'));
        const postSummaries = JSON.parse(localStorage.getItem('Post Summaries'));


        postTitles.push(DOMPurify.sanitize(postTitleEle.value));
        postDates.push(DOMPurify.sanitize(dateEle.value));
        postSummaries.push(DOMPurify.sanitize(summaryEle.value));

        localStorage.setItem('Post Titles', JSON.stringify(postTitles));
        localStorage.setItem('Post Dates', JSON.stringify(postDates));
        localStorage.setItem('Post Summaries', JSON.stringify(postSummaries));
    
        //closing field
        userDialogField.open = false;
        userDialogField.innerHTML = '';

        document.getElementsByTagName('output')[0].innerHTML = '';
        loadFromLocalStorage();
        window.location.reload();
    });



  });


