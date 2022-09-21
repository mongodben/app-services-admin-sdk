# Atlas App Services Admin SDK

This is **not** an official MongoDB-supported project.

## Development

To work with the project, run the following:

```sh
npm install
npm run build
```

Congrats! Now you should be able to access the SDK from `src/index.js`.

Instantiate an SDK client:

```sh
const { PUBLIC_KEY, PRIVATE_KEY, GROUP_ID, APP_ID } = process.env;
const creds = new AppServicesTokenCredential(PUBLIC_KEY, PRIVATE_KEY);
const apiClient = new AtlasAppServicesAPI(creds, GROUP_ID, APP_ID);
```

Use the client to query the Admin API:

```ts
const secretRequestBody = {
  name: "helloooo",
  value: "world",
};
const res = await apiClient.adminCreateASecret(secretRequestBody);
console.log(res);
/*
The console.log statement will print:

{ id: '<Some App Id', name: 'helloooo' }
*/
```
