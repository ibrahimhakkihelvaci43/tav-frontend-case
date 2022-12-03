export const camelCaseToTitle = (str: string) =>
  str.replace(/^-*(.)|-+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );
