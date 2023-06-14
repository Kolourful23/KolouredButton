function KolourfulButton(options){
    let buttons = document.querySelectorAll('.KolourfulButton')
    if(options.type === 'dark'){
        options.type = 'black';
        options.txt = 'white';
    }else{
        options.type = 'white';
        options.txt = 'black';
    }
    buttons.forEach(button =>{
        button.style.background = `${options.type}`;
        button.style.color = `${options.txt}`;
    })
}