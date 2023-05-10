import { call } from "redux-saga/effects";
import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */

export function* callMsGraph(accessToken: string): any {


    const response = yield call(fetch, graphConfig.graphMeEndpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
    return yield response.json();
  }