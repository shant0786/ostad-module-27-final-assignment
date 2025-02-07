import axios from "axios";

const BASE_URL = "http://localhost:5500/api/v1";

export async function allBlogs() {
  const result = await axios.get(BASE_URL + "/readBlog");

  if (result.status !== 200) return [];
  return result.data;
}
export async function allTeam() {
  const result = await axios.get(BASE_URL + "/readTeamMember");

  if (result.status !== 200) return [];
  return result.data;
}
// export async function postByCategory(id) {
//   const result = await axios.get(BASE_URL + `/post-list/${id}`);

//   if (result.status !== 200) return [];
//   return result.data;
// }
// export async function postDetails(id) {
//   const result = await axios.get(BASE_URL + `/post-details/${id}`);

//   if (result.status !== 200) return [];
//   return result.data;
// }
