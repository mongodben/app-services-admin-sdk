# Atlas App Services Admin SDK

This is **not** an official MongoDB-supported project.

SDK for Atlas Atlas App Services administration. This SDK is a wrapper around the
[App Services Admin API](https://www.mongodb.com/docs/atlas/app-services/admin/api/v3/).

## Install

```sh
npm install app-services-admin-sdk
```

## Usage

Instantiate an SDK client:

```js
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

{ id: '<Some App Id>', name: 'helloooo' }
*/
```
