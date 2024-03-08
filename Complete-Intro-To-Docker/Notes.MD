# Container

- A container is consist of three kernel features:
  - Namespaces
  - Control Groups
  - chroot

## chroot

- It chains the root directory of the process to a new location so that the process can't access the rest of the file system.






## Docker CLI

- Docker run is to run a container

  - -p shortflag for --publish which used to connect ports with outside of the container
  - --rm is used to remove container files when it's killed.\
- Docker exec is running something in a running container

- docker ps is to show running containers

docker inspect is to show container details


# Docker Files

- contains couple lines of docker instructions to build docker containers!

`FROM` must be the first instruction in a docker file. It allows you to use a image. ex. ``FROM node:12-alpine``

`WORKDIR` is used to set a root dir of your files.

`COPY` is for copying files. it'll take two flags: --chown and and --from

  - chown is used to set username and groupname
  - from is used to set the root where you wanna copy from. useful for multi staged dockerfiles.

`RUN` is used to execute any command on top of the _current image_ ex. `RUN npm install`

Once the dockerfile is ready to go, you can build the dockerfile and make your image ready by prompting: `docker build <source>`
give it a tag using `-t <source>`

once the image is built, you can run your image to containerize by prompting docker run with required flags.