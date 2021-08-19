# Sample NodeJS App with Appdynamics NodeJS Agent Offline
Express app with Appdynamics agent instrumentation.
The approach in this app is to download the AppDynamics NodeJS agent offline and install in situations whereby outbound internet access is not allowed.

## Download the AppDynamics NodeJS Agent AppDynamics Download Portal

Download the AppDynamics NodeJS Agent from AppDynamics Download Portal https://accounts.appdynamics.com/downloads <br />
Copy the downloaded agent to `appd-agent` directory

```bash
$ cp appdynamics-nodejs-standalone-linux-x64-v16-21.8.0.7917.0.tgz appd-agent/
```

## Update the Dockerfile

* Update Dockefile lines 4 to reflect the filename of the downloaded file in above step



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