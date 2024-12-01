import { createContext } from "react";
import { CredentialsDTO } from "../models/auth";

export type ContextTokenType = {
  contextTokenPayload: CredentialsDTO | undefined;
  setContextTokenPayload: (accessTokenPayload: CredentialsDTO | undefined) => void;
};

export const ContextToken = createContext<ContextTokenType>({
  contextTokenPayload: undefined,
  setContextTokenPayload: () => {},
});
