export const setDataAttribute = (attribute: string, value: string) => {
  document.getElementsByTagName("html")[0].setAttribute(attribute, value);
};
