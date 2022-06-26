// 해당 위치에서 요청
export async function getFeeds() {
  const ref = window.location.origin;
  const response = await fetch(`${ref}/data/mock.json`);
  const body = await response.json();
  return body;
}
// 기존의 local에서 요청
// export async function getFeeds() {
//   const response = await fetch('http://localhost:3000/data/mock.json');
//   const body = await response.json();
//   return body;
// }
