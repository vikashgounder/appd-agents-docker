'use strict';

// load appdynamics 
const appd = require('appdynamics');

appd.profile({
  controllerHostName: process.env.controllerHostName,
  controllerPort: process.env.controllerPort || 443,
  controllerSslEnabled: process.env.controllerSslEnabled || true,
  accountName: process.env.accountName,
  accountAccessKey: process.env.accountAccessKey,
  applicationName: process.env.applicationName,
  noNodeNameSuffix: process.env.noNodeNameSuffix || false,
  tierName: process.env.tierName,
  nodeName: process.env.nodeName,
  proxyHost: process.env.proxyHost || '',
  proxyPort: process.env.proxyPort || '',
  proxyUser: process.env.proxyUser || '',
  proxyPasswordFile: process.env.proxyPasswordFile || '',
  debug : process.env.debug || false,
  libagent: process.env.libagent || true,
  proxy: process.env.proxy || false,
  proxyAutolaunchDisabled: process.env.proxyAutolaunchDisabled || false,
  proxyCtrlDir: process.env.proxyCtrlDir || '',
  rootTmpDir: process.env.rootTmpDir || '/tmp/appd',
  reuseNode: process.env.controllerSslEnabled || false,
  certificateFile: process.env.certificateFile || '',
  uniqueHostId: process.env.uniqueHostId || '',
  logging: {
    'logfiles': [
      {
        'root_directory': '/tmp/appd',
        'filename': 'echo_%N.log',
        'level': 'TRACE',
        'max_size': 5242880,
        'max_files': 10,
        //'outputType': 'console'
      }
    ]
  }
}); 

const express = require('express');
const app = express();

// constants
const PORT = 8080;
const HOST = '0.0.0.0';

// routes
app.get('/', (req, res) => {
  res.send('Hello World, this is your home page');
});

app.get('/profile', (req,res) => {
  res.send('Hello World, This is profile page');
});

app.get('/login', (req,res) => {
  res.send('Hello World, This is login page');
});

app.get('/logout', (req,res) => {
  res.send('Hello World, This is logout page');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
