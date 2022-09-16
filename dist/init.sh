wget https://raw.githubusercontent.com/rollrat/simple-tools/master/dist/pull-frontend.sh
wget https://raw.githubusercontent.com/rollrat/simple-tools/master/dist/webhooks.py
wget https://raw.githubusercontent.com/rollrat/simple-tools/master/dist/run-webhook-server.sh

chmod +x pull-frontend.sh
chmod +x run-webhook-server.sh

sudo apt install docker nginx

pip3 install gunicorn flask