sendButton.addEventListener('click',() =>{
    const userData  = document.querySelector('#userData').value;
    const names = userData.split(" ");

    for(let i = 0; i<names.length; i++) {
        names[i] = names[i].toLowerCase();
        names[i] = names[i][0].toUpperCase() + names[i].substr(1);
    }

      document.querySelector('#name').value = names[0];
      document.querySelector('#family').value = names[1];
      document.querySelector('#patronymic').value = names[2];
      
     });

  