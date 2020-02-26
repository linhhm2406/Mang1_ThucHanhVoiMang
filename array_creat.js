let array_beginning = [];
let array_collection = [];

function add_number() {
    let input_value = document.getElementById('input_number').value;
    array_beginning.push(input_value);
}

function display_number() {
    for (let i = 0; i <= array_beginning.length - 1; i++) {
        array_collection.push('Element' + i + ' = ' + array_beginning[i]);
    }
    let output = '';
    for (let j = 0; j <= array_collection.length - 1; j++) {
        output = output + array_collection[j] + '<br>';
    }
    document.getElementById('display_content').innerHTML = '<hr>' + output;
}

