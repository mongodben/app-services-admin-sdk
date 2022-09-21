import { AppServicesTokenCredential, AtlasAppServicesAPI } from "../src";

test("Can log in", async () => {
  const { PUBLIC_KEY, PRIVATE_KEY, GROUP_ID, APP_ID } = process.env;
  const creds = new AppServicesTokenCredential(PUBLIC_KEY, PRIVATE_KEY);
  const apiClient = new AtlasAppServicesAPI(creds, GROUP_ID, APP_ID);
  const secretRequestBody = {
    name: "helloooo",
    value: "world",
  };
  const res = await apiClient.adminCreateASecret(secretRequestBody);
  console.log("res is::", res);
});
