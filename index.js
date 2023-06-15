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
        button.style.width = '50px';
        button.style.height = '30px';
        button.style.borderRadius = '15px';
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
        div.style.background = "url('KolourfulBackgroundGrid.jpg')";
    });
    divs2.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = "url('KolourfulBackgroundRadial.jpeg')";
    });
    divs3.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = `radial-gradient(circle, ${options.radialStart},${options.radialEnd})`;
    });
    divs4.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = 'linear';
    });
    divs5.forEach(div=>{
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.borderRadius = '50px'
        div.style.background = "url('KolourfulBackgroundHex.jpg')";
    });
}
module.exports.KolourfulBackground = KolourfulBackground;