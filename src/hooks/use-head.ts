import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../constants";

export const useHead = ({ subtitle }: { subtitle?: string }) => {
  const appName = DEFAULT_TITLE;
  const title = subtitle ? `${appName}: ${subtitle}` : appName;
  const description = DEFAULT_DESCRIPTION;

  return { appName, title, description };
};
