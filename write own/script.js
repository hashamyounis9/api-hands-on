fetch("http://127.0.0.1:5502?n1=10&n2=10")
.then(function(response) {
    if (!response.ok) {
        throw new Error("Some error occurd...")
    }
    return response.json()
})
.then(function(respData) {
    console.log(respData)
    var h3 = document.createElement("h3")
    h3.innerHTML = respData.result
    document.body.appendChild(h3)
})
.catch(function(error) {
    console.log("Error: ", error)
})