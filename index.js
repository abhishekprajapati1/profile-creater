



const add_usr_btn = document.getElementById('add-profile-btn');

function get_and_update(){
    let myform = document.getElementById('add_detail_form');
    let usrname = document.getElementById('name').value;
    let usremail = document.getElementById('email').value;
    let usrphone = document.getElementById('phone').value;
    let usrage = document.getElementById('age').value;

    if(localStorage.getItem('user') == null){
        console.log("updating storage...");
        userArray = [];
        userArray.push([usrname, usremail, usrphone, usrage])
        localStorage.setItem('user', JSON.stringify(userArray));
        myform.reset();
    }
    else{
        userArrayStr = localStorage.getItem('user');
        userArray = JSON.parse(userArrayStr);
        userArray.push([usrname, usremail, usrphone, usrage]);
        localStorage.setItem('user', JSON.stringify(userArray));
        myform.reset();
    }
    update();
}


function update(){
    if(localStorage.getItem('user') == null){
        console.log("updating storage...");
        userArray = [];
        localStorage.setItem('user', JSON.stringify(userArray));
    }
    else{
        userArrayStr = localStorage.getItem('user');
        userArray = JSON.parse(userArrayStr);
    }

    // populating the profile container
    let profiler = document.getElementById('profiler');
    let str = '';
    userArray.forEach((element, index) => {
        str += `
        <div class='profile-card'>
            <div class='circle' id="fletter">${element[0].charAt(0)}</div>
            <p id="profile-name">${element[0]}<small>(Age:${element[3]})</small></p>
            <p><i>${element[1]}</i></p>
            <p><i>${element[2]}</i></p>
            <div class='buttons'>
                <button class='action-btn btn-primary edit' onclick="edited(${index}); return false;">Edit</button>
                <button class='action-btn delete btn-danger' onclick = "deleted(${index});return false;">Delete</button>
            </div>
        </div>`;

        
    });

    profiler.innerHTML = str;
 
}


function deleted(itemIndex){
    console.log('deleting.....');
    userArrayStr = localStorage.getItem('user');
    userArray = JSON.parse(userArrayStr);

    // delete itemIndex element from the array.
    userArray.splice(itemIndex, 1);

    localStorage.setItem('user', JSON.stringify(userArray));
    update();

}


function edited(itemIndex){
    var mI = itemIndex;
    


    const updateBtn = document.getElementById('update-profile-btn');

    if(updateBtn.classList.contains('hidden-button')){
        updateBtn.classList.remove('hidden-button');
    }

    console.log('editing....');
    if(localStorage.getItem('user') == null){
        console.log("updating storage...");
        userArray = [];
        localStorage.setItem('user', JSON.stringify(userArray));
    }
    else{
        userArrayStr = localStorage.getItem('user');
        userArray = JSON.parse(userArrayStr);
    }
    
    let d = userArray[itemIndex];

    let usrname = document.getElementById('name');
    let usremail = document.getElementById('email');
    let usrphone = document.getElementById('phone');
    let usrage = document.getElementById('age');

    usrname.value = d[0];
    usremail.value = d[1];
    usrphone.value = d[2];
    usrage.value = d[3];

    updateBtn.addEventListener('click', (itemIndex)=>{
        console.log("update button was clicked");
        
    })
    
}
























add_usr_btn.addEventListener('click', get_and_update);
update();






