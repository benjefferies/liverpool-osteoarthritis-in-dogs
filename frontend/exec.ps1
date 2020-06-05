docker build --rm -t liverpool-osteoarthritis-in-dogs .
docker run --init -p 3000:3000 -it liverpool-osteoarthritis-in-dogs
