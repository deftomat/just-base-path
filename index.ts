/**
 * Returns a base of an app.
 *
 * EXAMPLE:
 *   <base href="/dashboard">
 *
 *   getBase(); // "http://localhost/dashboard"
 */
export function getBase(options?: Options): string {
  const base = findBaseTag(options);
  return (base && base.href) || "";
}

/**
 * Returns a base path of an app.
 *
 * EXAMPLE:
 *   <base href="/dashboard">
 *
 *   getBasePath(); // "/dashboard"
 */
export function getBasePath(options?: Options): string {
  const base = findBaseTag(options);
  return (base && base.getAttribute("href")) || "";
}

let baseTag: HTMLBaseElement | null;
function findBaseTag(options?: Options): HTMLBaseElement | null {
  if (
    baseTag === undefined ||
    (options != null && options.clearCache === true)
  ) {
    baseTag = document.querySelector("base") || null;
  }
  return baseTag;
}

export interface Options {
  clearCache: boolean;
}
