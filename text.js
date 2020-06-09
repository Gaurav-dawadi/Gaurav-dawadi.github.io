fetch("https://api.github.com/users/Gaurav-dawadi")
  .then(response => response.json())
  .then(function(data)
    {console.log(data)
      document.getElementById("profileImage").src = data['avatar_url']
      document.getElementById("bio").textContent = data['bio']
      document.getElementById("Location").textContent = data['location']
      document.getElementById("name").textContent = data['name']
      document.getElementById("githubLink").href = data['html_url']
  })


fetch("https://api.github.com/users/Gaurav-dawadi/repos")
  .then(response => response.json())
  .then( function(data)
  {console.log(data)

      for (var i in data){
        // var div = document.getElementById("divResult");
        // div.innerHTML += data[i].html_url + '</br>'
        var mydiv = document.getElementById("divResult");
        var aTag = document.createElement('a');
        aTag.setAttribute('href',data[i].html_url);
        aTag.innerHTML = data[i].html_url + '</br>';
        mydiv.appendChild(aTag);
      }
})
