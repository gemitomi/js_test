function myFunc() {
    var data = {
      name: document.getElementById('name').value,
      time: document.getElementById('time').value,
      price: document.getElementById('price').value,
      message: document.getElementById('message').value
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mentes.php'); // Itt a mentes.php helyére írd be a webszerver mentési végpontjának URL-jét
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Adatok sikeresen mentve!');
      }
    };
    xhr.send(JSON.stringify(data));
  }
  
  