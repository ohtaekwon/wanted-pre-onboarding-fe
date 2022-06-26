export async function getFeeds() {
  const ref = window.location.origin;
  const response = await fetch(`${ref}/data/mock.json`);
  const body = await response.json();
  return body;
}
// ${ref}/data/mock.json
// export async function getFeeds() {
//   const response = await fetch('http://localhost:3000/data/mock.json');
//   const body = await response.json();
//   return body;
// }
