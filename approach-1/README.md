# Sample NodeJS App with Appdynamics NodeJS Agent
Express app with Appdynamics agent instrumentation

## Configuration

Rename `monitoring/appdynamics.env.example` to `monitoring/appdynamics.env`.

```bash
$ mv monitoring/appdynamics.env.example monitoring/appdynamics.env
```

Update the variables as per Appdynamics controller information in 'monitoring/appdynamics.env'


## Build & Run

```bash
$ chmod +x *.sh
$ sh start.sh
```

## Check if the container is running

```bash
$ docker ps

CONTAINER ID   IMAGE                          COMMAND                  CREATED         STATUS         PORTS                                       NAMES
93cd816163c0   sample-nodejs-app-appd-agent   "docker-entrypoint.s…"   9 seconds ago   Up 8 seconds   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   sample-nodejs-app-appd-agent
```

## Browse the sample and generate some traffic

* http://localhost:8080
* http://localhost:8080/profile
* http://localhost:8080/login
* http://localhost:8080/logout

## Cleanup

The below command will safely shutdown the container and also remove the image too

```bash
$ sh stop.sh
```

## License
MIT.