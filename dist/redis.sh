docker stop rrredis && docker rm $_
docker run --name rrredis -d --network host redis:latest