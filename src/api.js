export async function getFeeds() {
  const ref = window.location.href;
  const response = await fetch(`${ref}/data/mock.json`);
  const body = await response.json();
  return body;
}

// export async function getFeeds() {
//   const response = await fetch('http://localhost:3000/data/mock.json');
//   const body = await response.json();
//   return body;
// }
