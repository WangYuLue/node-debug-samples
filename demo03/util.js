import os from 'os';

function getHomeDir() {
  return os.homedir();
}

export {
  getHomeDir
}