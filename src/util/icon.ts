export function icon(name: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/icons/${name}.svg`;
}
