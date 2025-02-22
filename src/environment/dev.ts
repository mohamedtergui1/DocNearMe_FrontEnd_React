export const environment = {
  host: "http://localhost",
  port: "8080",
  version: "v1",
  getApi: () => environment.host + ":" + environment.port + "/api/" + environment.version ,
};
