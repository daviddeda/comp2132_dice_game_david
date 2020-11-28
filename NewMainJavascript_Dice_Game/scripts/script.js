//get output HTML element
const output = document.getElementById("output");
//get section id for hideshow
const hideshow = document.getElementById("hideshow");
const hidebtn = document.getElementById("hide");
const showbtn = document.getElementById("show");



let z = ""; //global variable



// Part 1a
// Die Object
class Die{

    constructor(value){
        this.value=value;
    }
    describeSelf(){
        return `Die  is number:${this.value} `;
    }
}

// Part 2
// Die Object
class DiceRoll{

    constructor(){
        this.values = [1,2,3,4,5,6];
    
    
    }
}
// Part 2a
DiceRoll.prototype.roll = function(){

    let i,j,x;
    for( i=this.values.length-1; i>0; i-- ){
        //randomly select a die roll value
        j = Math.floor(Math.random() * (i+1));
        x=this.values[j];
        return z= output.innerHTML += `<p> ${x}`;
    }
}

// Part 2b
DiceRoll.prototype.describeSelf = function(){
    //let output = "";
    output.innerHTML += `<p>Dice rolled a number ${z}`;
    console.log`${z}`;
    
}


//Test instantiate Die object and display value
const myDie = new Die(6);

output.innerHTML += `${myDie.describeSelf()}`;
//Test instantiate DiceRoll object
const myDiceRoll = new DiceRoll();



rollDicebtn.addEventListener('click', function(){
    myDiceRoll.roll();
    
    //myDiceRoll.describeSelf();
});

//show hide rules
$('.hideshow').hide();
const $btnShow = $('.btn_show');
$btnShow.click(function(){
    const $btn = $(this);
    const $rulesText = $(this).next();

    if($rulesText.is(':visible')){
        $btn.text('Show Rules');
    }else{
        $btn.text('Hide Rules');
    };
    $rulesText.slideToggle(500);
    $btn.parent().toggleClass('highlight');
});
