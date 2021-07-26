#Run frontend app using Docker

###firstly, navidate to the root of this project, (same directory as the Dockerfile)
###Now, build docker image, tagging it as 'frontend'.

`docker image build -t frontend:latest .`

###Once the image is built, you can run the docker container.
`docker container run -p 8080:8080 frontend:latest`

troubleshooting ideas
check to see if container has been created:
`docker ps`

remember that containers are created from images so you need an image to create a container
`docker images`

if you have a billion docker images on your computer, you may have to clean them out
fyi: My terminal got stuck running the docker container and I had to close the terminal window

### this container spins up on port 8080 so remember to test against port 8080, like this:

`curl http://localhost:8080`

#### if there is a problem, first check if you already have something running on 8080
