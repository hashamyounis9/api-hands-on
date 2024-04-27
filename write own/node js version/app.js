// this api accepts 2 numbers n1 and n2 as parameters in the URL, compares them and tell which number is greater or if the both numbers are equal
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {

    // get the numbers passed in parameters
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    // validate input
    if (!isNaN(n1) && !isNaN(n2)) {
        if (n1 > n2) {
            res.json({"result": "n1 is greater than n2"})
        }
        else if (n2 > n1) {
            res.json({"result": "n2 is greater than n1"})
        }
        else {
            res.json({"result": "Numbers are equal!"})
        }
    }
    else {
        res.status(400).json({"error": "Invalid parameters passed"})
    }
})

// if process.end.PORT contains valid port number(not undefined), else PORT variable will have value 5502
const PORT = process.env.PORT || 5502 

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})