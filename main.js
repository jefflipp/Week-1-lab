var wdi_18_names = ["Adam", "Alex", "Andre", "Brian", "Greg", "Jeff", "Julie", "Kayla", "Kyle", "Leslie","Noah", "Paul", "Percival", "Steve"];

/*for (var i = 0; i < wdi_18_names.length; i++) {
    console.log(wdi_18_names[i]);
}

var j = 0;
function eachName() {
    console.log(wdi_18_names[j]);
    j++
}*/

var pick = Math.floor(Math.random() * wdi_18_names.length);
var namePicker = wdi_18_names[pick];
	console.log(namePicker);

