import { AccessToken, GetTokenOptions } from "@azure/core-auth";
import axios from "axios";

export interface TokenCredential {
  getToken(
    scopes: string | string[],
    options?: GetTokenOptions
  ): Promise<AccessToken | null>;
}

class AppServicesTokenCredential implements TokenCredential {
  // AccessToken is an object with two properties:
  // - A "token" property with a string value.
  // - And an "expiresOnTimestamp" property with a numeric unix timestamp as its value.
  constructor(private publicApiKey: string, private privateApiKey: string) {}
  async getToken(): Promise<AccessToken> {
    const endpoint =
      "https://realm.mongodb.com/api/admin/v3.0/auth/providers/mongodb-cloud/login";
    const {
      data: { access_token },
    } = await axios.post(endpoint, {
      username: this.publicApiKey,
      apiKey: this.privateApiKey,
    });
    // i think it's 30, but putting 20 to be safe
    const TWENTY_MIN_MS = 1200000;
    return {
      token: access_token,
      expiresOnTimestamp: TWENTY_MIN_MS,
    };
  }
}

export default AppServicesTokenCredential;
