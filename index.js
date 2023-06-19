function KolourfulButton(options){
    let buttons = document.querySelectorAll('.KolourfulButton');
    if(options.type === 'black'){
        options.type = 'black';
        options.txt = 'white';
    }else if(options.type === 'white'){
        options.type = 'white';
        options.txt = 'black';
    }else{}
    buttons.forEach(button =>{
        button.style.appearance = 'none';
        button.style.background = `${options.type}`;
        button.style.color = `${options.txt}`;
        button.style.width = '100px';
        button.style.height = '50px';
        button.style.borderRadius = '15px';
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        button.style.alignItems = 'center';
        button.style.textAlign = 'center';
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
        div.style.margin = '10px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.textAlign = 'center';
    });
}

module.exports.KolourfulDiv = KolourfulDiv;

function KolourfulBackground(options){
    let divs = document.querySelectorAll('.KolourfulBackgroundGrid');
    let divs2 = document.querySelectorAll('.KolourfulBackgroundRadial');
    let divs3 = document.querySelectorAll('.KolourfulBackgroundRadialGradient');
    let divs4 = document.querySelectorAll('.KolourfulBackgroundDiagonal');
    let divs5 = document.querySelectorAll('.KolourfulBackgroundHex');
    divs.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.backgroundImage = "url('./KolourfulBackgroundGrid.jpg')";
    });
    divs2.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.backgroundImage = "url('./KolourfulBackgroundRadial.jpeg')";
    });
    divs3.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = `radial-gradient(circle, ${options.colorStart},${options.colorEnd})`;
    });
    divs4.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = `linear-gradient(to bottom right, ${options.colorStart},${options.colorEnd})`;
    });
    divs5.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.backgroundImage = "url('./KolourfulBackgroundHex.jpg')";
    });
}

module.exports.KolourfulBackground = KolourfulBackground;

function KolourfulInput(options){
    let inputs = document.querySelectorAll('.KolourfulInput');
    if(options.type === 'small'){
        options.height = '30px';
        options.width = '60px';
    }else if(options.type === 'large'){
        options.height = '30px';
        options.width = '120px';
    }else{
        options.height = '30px';
        options.width = '90px';
    }
    inputs.forEach(input => {
        input.style.appearance = 'none';
        input.style.height = `${options.height}`;
        input.style.width = `${options.width}`;
        input.style.transition = 'width 0.4s ease-in-out';
    });
}

module.exports.KolourfulInput = KolourfulInput;