$.getJSON('http://127.0.0.1:8000/api/article/', function(data) {
        
        console.log(data[0])
        
        

    var text = `<table id="customers">
    <tr>
      <th>Titre</th>
      <th>Description</th>
      <th>Tags</th>
      <th>Images</th>
      <th>Actions</th>
    </tr>
                <tr>
    <td>${data[0].title}</td>
    <td> ${data[0].description}</td>
    <td>${data[0].tags}</td>
    <td>.<img src="${data[0].image}">
    </td>
    <td><button class="button button2">Modifier</button>
        <button class="button button3">Supprimer</button></td>
  </tr>
   
  `
                
    
    $(".mypanel").html(text);
});