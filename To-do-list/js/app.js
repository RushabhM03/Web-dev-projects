document.addEventListener('DOMContentLoaded', function(){
    // Grabbing important elements from the DOM
    const input = document.querySelector('.input input');
    const add = document.querySelector('.input button');
    const list = document.querySelector('.list');
    const clear = document.querySelector('.footer button');

    // Clear all
    clear.addEventListener('click', function(e){
        list.innerHTML='';
    });

    // Add task and delete in the same onclick function event
    add.addEventListener('click', function(e){
        e.preventDefault();
        const task = input.value
        if(task==''){
            alert("Fields cannot be empty");
        }
        else{
            const li = document.createElement('li');
            li.innerHTML = task;
            const span1 = document.createElement('span')
            const i = document.createElement('i');
            i.classList.add('fas', 'fa-trash-alt');
            span1.appendChild(i);
            li.appendChild(span1);
            list.appendChild(li);
            input.value='';
            span1.onclick = function(){
                var listItem = this.parentElement;
                var ul = listItem.parentElement;
                ul.removeChild(listItem); 
            }
            del = document.querySelectorAll('.list li span');
            console.log(del);
        }
    });

})