/**
 * Returns a base of an app.
 *
 * EXAMPLE:
 *   <base href="/dashboard">
 *
 *   getBase(); // "http://localhost/dashboard"
 */
export function getBase(): string {
  const base = findBaseTag();
  return (base && base.href) || '';
}

/**
 * Returns a base path of an app.
 *
 * EXAMPLE:
 *   <base href="/dashboard">
 *
 *   getBasePath(); // "/dashboard"
 */
export function getBasePath(): string {
  const base = findBaseTag();
  return (base && base.getAttribute('href')) || '';
}

function findBaseTag(): HTMLBaseElement | null {
  return document.querySelector('base');
}
