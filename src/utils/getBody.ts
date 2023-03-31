export function getBody<T>(text: string) {
  const obj: { [k: string]: string | number } = {};

  text.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    obj[key] = decodeURIComponent(value);
  });

  return obj as T;
}
