docker stop rrfront && docker rm $_
docker pull rollrat/frontend:latest
docker run -d --name rrfront --network host rollrat/frontend:latest
docker rmi $(docker images -q rollrat/frontend)