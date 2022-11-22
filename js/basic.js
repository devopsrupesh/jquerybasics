let head = $('h1').text('Hi Rupesh'); // for modify the text for h1 tag

head.html('Hello'); // for modify text inside html

let declareHtml = $('div').html("<b>Hello world</b>"); // declare bold inside div

head.css('color', 'white');  //for single style property 
head.css({ 'background': 'red', 'text-align': 'center' });  //for multiple style properties

let head2 = $('#head-2').text('for ID');   //for using ID denoted with #

let head3 = $('.head-3').text('for CLASS');  //for class denoted with .

// for same class/ID/tagName/attribute. text modify one 0th element
//start (by using class)
let firstOne = $('.class-one');
$(firstOne[0]).text('First - hi all');
//end

let formInpuTtext = $('input[type = "text"]').val("text changed"); // for form attribute change value
let formButton = $('input[type="button"]').val("Submit"); //for form button value change

//get the values
let getValue = $('setValue').text("");
// alert(getValue);
console.log(getValue);