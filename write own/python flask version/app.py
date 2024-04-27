# this api accepts 2 numbers n1 and n2 as parameters in the URL, compares them and tell which number is greater or if the both numbers are equal
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def index():

    # get the parameters passed in the url
    n1 = request.args.get("n1")
    n2 = request.args.get("n2")

    # compare the numbers
    if isinstance(n1, (int, float)) and isinstance(n2, (int, float)):
        if n1 > n2:
            return jsonify({"result": "First number is greater!"})
        elif n2 > n1:
            return jsonify({"result": "Second Number is greater!"})
        else:
            return jsonify({"result": "Numbers are equal!"})
    else:
        return jsonify({"result": "Invalid input, try passing n1 and n2 as numbers"})

if __name__ == "__main__":
    # run the app
    app.run(debug=True)
