export async function getFeeds() {
  const response = await fetch('http://localhost:3000/data/mock.json');
  const body = await response.json();
  return body;
}
