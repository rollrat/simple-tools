from flask import Flask
import os

app = Flask(__name__)


@app.route('/postreceive_frontend', methods=['POST'])
def front():
    os.system("./pull-frontend.sh")
    return 'Success!'


if __name__ == "__main__":
    app.run()
