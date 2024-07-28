var initial_val1 = 0;
var action_str = '';
var initial_val2 = 0;
var calc_val = 0;
var show_val = 0;
var bool = false;

/*
document.getElementById('but5').addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    show_val = e.target.innerHTML;
    let valueToPass = e.target.innerHTML; // The value you want to pass
    console.log("Show Val = "+ valueToPass);
    //show_val = valueToPass;
});
*/

document.getElementById('but5').addEventListener('click', func1);

function func1()
{
    show_val = 77;
    console.log(show_val);
}

document.getElementById('but1').addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    let valueToPass = e.target.innerHTML; // The value you want to pass
    calc_val = valueToPass;
    console.log(calc_val);
    if(confirm_val1 == 0)
    {confirm_val2(valueToPass);
    calc_val = calc_val + valueToPass;} // Passing the value when the button is clicked
    else {confirm_val1(valueToPass);
    calc_val = calc_val + valueToPass;}
});
document.getElementById('but2').addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    let valueToPass = 8; // The value you want to pass
    if(confirm_val1 == 0)
    {confirm_val2(valueToPass);
        calc_val = calc_val + valueToPass;} // Passing the value when the button is clicked
    else {confirm_val1(valueToPass);
        calc_val = calc_val + valueToPass;}
});
document.getElementById('but3').addEventListener('click', function() {
    let valueToPass = 9; // The value you want to pass
    if(confirm_val1 == 0)
    {confirm_val2(valueToPass);
        calc_val = calc_val + valueToPass;} // Passing the value when the button is clicked
    else {confirm_val1(valueToPass);
        calc_val = calc_val + valueToPass;}
});
document.getElementById('butr4').addEventListener('click', function() {
    let valueToPass = "mul"; // The value you want to pass
    calc_val = calc_val + valueToPass;
    confirm_action(valueToPass); // Passing the value when the button is clicked
});



function confirm_val1(val1)
{
    initial_val1 = val1;
}

function confirm_val2(val2)
{
    initial_val2 = val2;
}

function confirm_action(str)
{
    action_str = str;
}

function equals_action(bol)
{
    bool = bol;
}
if(bool == true)
{
    bool_true(initial_val1, initial_val2, action_str);
}


function bool_true(Initial_val1, Initial_val2, Action_str)
{

    var str = Action_str;
    var val1 = Initial_val1;
    var val2 = Initial_val2;

    if(str == "plus")
    {
        return calc_val = val1 + val2;
    }
    else if(str == "minus")
    {
        return  calc_val = val1 - val2;
    }
    else if(str == "mul")
    {
        return calc_val = val1 * val2;
    }
    else if(str == "div")
    {
        return calc_val = val1 / val2;
    }
    else return calc_val = 0;
}