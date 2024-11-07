export const setCssVariable = ({
  element,
  key,
  value,
}: {
  element: HTMLElement;
  key: string;
  value: string;
}) => {
  element.style.setProperty(key, value);
};
