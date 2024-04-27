fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
.then(function(response) {
    return response.json()
})
.then(function(respData) {
    console.log(respData)
    for (let index = 0; index < respData.data.allFilms.films.length; index++) {
        var li = document.createElement("li")
        li.innerHTML = respData.data.allFilms.films[index].title
        document.body.appendChild(li)
    }
}).catch(function(error) {
    console.log("Error: " + error)
})