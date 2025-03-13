export const useHead = ({ page }: { page?: string }) => {
  const appName = import.meta.env.VITE_DEFAULT_TITLE;
  const title = page ? `${appName}: ${page}` : appName;
  const description = import.meta.env.VITE_DEFAULT_DESCRIPTION;

  return { appName, title, description };
};
