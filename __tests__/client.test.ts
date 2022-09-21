import { AppServicesTokenCredential, AtlasAppServicesAPI } from "../src";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

test("Can log in", async () => {
  console.warn("wassup");
  const { PUBLIC_KEY, PRIVATE_KEY, GROUP_ID, APP_ID } = process.env;
  console.log("heyy", { PUBLIC_KEY, PRIVATE_KEY, GROUP_ID, APP_ID });
  const creds = new AppServicesTokenCredential(PUBLIC_KEY, PRIVATE_KEY);
  const apiClient = new AtlasAppServicesAPI(creds, GROUP_ID, APP_ID);
  const secretRequestBody = {
    name: "helloooo",
    value: "world",
  };
  const res = await apiClient.adminCreateASecret(secretRequestBody);
  console.log("res is::", res);
});
