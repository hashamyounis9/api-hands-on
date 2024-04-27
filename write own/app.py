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
    if n1 > n2:
        return jsonify({"result": "First number is greater!"})
    elif n2 > n1:
        return jsonify({"result": "Second Number is greater!"})
    else:
        return jsonify({"result": "Numbers are equal!"})
    

if __name__ == "__main__":
    # run the app
    app.run(debug=True)