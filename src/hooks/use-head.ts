export const useHead = ({ subtitle }: { subtitle?: string }) => {
  const appName = import.meta.env.VITE_DEFAULT_TITLE;
  const title = subtitle ? `${appName}: ${subtitle}` : appName;
  const description = import.meta.env.VITE_DEFAULT_DESCRIPTION;

  return { appName, title, description };
};
