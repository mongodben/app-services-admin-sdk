# Atlas App client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Atlas App client.

App Services provides an API for programmatically performing
administrative tasks outside of the App Services UI. This includes tasks such
as modifying authentication providers, creating rules, and defining
functions. Client applications should not use the admin API. Instead,
use one of the Client SDKs for tasks like authenticating users, calling
functions, and interacting with services.

## Project & Application IDs

**Note**: The terms _Project ID_ and _Group ID_ are interchangeable.

App Services APIs frequently require two parameters: your Atlas _Project/Group
ID_, and your App Services _Application ID_.

### Project ID

You can find your Project ID from the MongoDB Atlas dashboard or CLI.

### Application ID

To find an Application ID, make a request to the App Services [GET /groups/{groupid}/apps](#operation/adminListApplications)
API endpoint.

This request has the following format, referencing the `access_token`
and the Group ID:

```sh
curl --request GET \
  --header 'Authorization: Bearer <access_token>' \
  https://realm.mongodb.com/api/admin/v3.0/groups/{groupId}/apps
```

This will return a list of objects describing each Atlas App Services app in the
provided group. For Admin API requests, your Application ID is the
ObjectId value in the `_id` field, _not_ the `client_app_id`.

```json
[
  {
    "_id": "5997529e46224c6e42gb6dd9",
    "group_id": "57879f6cc4b32dbe440bb8c5",
    "domain_id": "5886619e46124e4c42fb5dd8",
    "client_app_id": "myapp-abcde",
    "name": "myapp",
    "location": "US-VA",
    "deployment_model": "GLOBAL",
    "last_used": 1615153544,
    "last_modified": 0,
    "product": "standard",
    "environment": ""
  }
]
```

## Get Authentication Tokens

Every request to the App Services Admin API must include a valid and current
authorization token from the MongoDB Cloud API as a bearer token in the
`Authorization` header. You will need a valid [programmatic API key](https://docs.atlas.mongodb.com/configure-api-access)
for MongoDB Atlas to get a token.

Once you have an API key pair, call the authentication endpoint:

```shell
curl --request POST \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{"username": "<Public API Key>", "apiKey": "<Private API Key>"}' \
  https://realm.mongodb.com/api/admin/v3.0/auth/providers/mongodb-cloud/login
```

If authentication succeeds, App Services returns an access token as
part of the JSON response document:

```json
{
  "access_token": "<access_token>",
  "refresh_token": "<refresh_token>",
  "user_id": "<user_id>",
  "device_id": "<device_id>"
}
```

The `access_token` represents a limited-time authorization to interact
with the Admin API. To authenticate a request, include the token in a
[Bearer token](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
`Authorization` header.

```http
Authorization: Bearer <access_token>
```

[Package (NPM)](https://www.npmjs.com/package/atlas-app-services-admin-sdk-generated) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.


### Install the `atlas-app-services-admin-sdk-generated` package

Install the Atlas App client library for JavaScript with `npm`:

```bash
npm install atlas-app-services-admin-sdk-generated
```



### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### AtlasAppServicesAPI

`AtlasAppServicesAPI` is the primary interface for developers using the Atlas App client library. Explore the methods on this client object to understand the different features of the Atlas App service that you can access.

