function KolourfulButton(options){
    let buttons = document.querySelectorAll('.KolourfulButton');
    if(options.type === 'black'){
        options.type = 'black';
        options.txt = 'white';
    }else{
        options.type = 'white';
        options.txt = 'black';
    }
    buttons.forEach(button =>{
        button.style.appearance = 'none';
        button.style.background = `${options.type}`;
        button.style.color = `${options.txt}`;
    });
}

module.exports.KolourfulButton = KolourfulButton;

function KolourfulDiv(options){
    let divs = document.querySelectorAll('.KolourfulDiv');
    if(options.type === 'big'){
        options.type = '200px';
        options.complimentary = '50px';
    }else{
        options.type = '100px';
        options.complimentary = '30px';
    }
    divs.forEach(div =>{
        div.style.backgroundColor = 'indigo';
        div.style.color = 'white';
        div.style.width = `${options.type}`;
        div.style.height = `${options.complimentary}`;
        div.style.borderRadius = '20px';
    });
}

module.exports.KolourfulDiv = KolourfulDiv;