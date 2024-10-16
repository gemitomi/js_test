    
    
function myFunc(){
    alert("nmn");
    const fs = require('fs')

    function loadJSON(filename = '') {
        return JSON.parse(
            fs.existsSync(filename)
            ? fs.readFileSync(filename).toString()
            : '""'
        )
    }

    function saveJSON(filename = '', json = '""') {
        return fs.writeFileSync(
            filename, JSON.stringify(json, null, 2)
        )
    }

    const data = loadJSON('data.json')

    ;['d', 'ez', 'z'].forEach(letter => 
        data.files.push(letter)
    );

    saveJSON('data.json', data)

}

myFunc();
