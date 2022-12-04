export const kebabCaseToTitle = (str: string) =>
  str.replace(/^-*(.)|-+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );
