var wdi_18_names = ["Adam", "Alex", "Andre", "Brian", "Greg", "Jeff", "Julie", "Kayla", "Kyle", "Leslie","Noah", "Paul", "Percival", "Steve"];

var colors = ["red", "orange", "yellow", "green", "blue", "violet"]

/*for (var i = 0; i < wdi_18_names.length; i++) {
    console.log(wdi_18_names[i]);
}

var j = 0;
function eachName() {
    console.log(wdi_18_names[j]);
    j++
}*/

/*var pick = Math.floor(Math.random() * wdi_18_names.length);
var namePicker = wdi_18_names[pick];
	console.log(namePicker);*/


function eachName(){
        var namePicker = wdi_18_names[Math.floor(Math.random() * wdi_18_names.length)];
        var colorPicker = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("display").innerHTML = namePicker;
        document.body.style.backgroundColor = colorPicker;

    }

document.querySelector('#choose').addEventListener('click', eachName);

//structure above is the structure i'll use over and over//


