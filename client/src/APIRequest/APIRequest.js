import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:5500/api/v1";

export async function allBlogs() {
  const result = await axios.get(BASE_URL + "/readBlog");

  if (result.status !== 200) return [];
  return result.data;
}
export async function newBlog(reqBody) {
  console.log(reqBody);
  const result = await axios.post(BASE_URL + `/createBlog`, reqBody);
  console.log(result);
  if (result.data["status"] === "success") {
    Swal.fire({
      title: "New Blog has been created",
      text: result.data["message"],
      icon: "success",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return result.data;
  } else {
    Swal.fire({
      title: "Fill all the fields",
      text: result.data["message"],
      icon: "error",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return {
      status: "fail",
    };
  }
}
export async function allTeam() {
  const result = await axios.get(BASE_URL + "/readTeamMember");

  if (result.status !== 200) return [];
  return result.data;
}
export async function allServices() {
  const result = await axios.get(BASE_URL + "/readServices");

  if (result.status !== 200) return [];
  return result.data;
}
export async function loginUser(reqBody) {
  const result = await axios.post(BASE_URL + `/login`, reqBody);
  if (result.data["status"] === "success") {
    Swal.fire({
      title: "Login successful",
      text: "You have successfully logged in to Dashboard",
      icon: "success",
      color: "#f7fafc",
      background: "#2d3748",
    });
    sessionStorage.setItem("token", result.data["token"]);
    return { isVarified: true, token: result.data["token"] };
  } else {
    Swal.fire({
      title: "Login Failed",
      text: "Check your Email and Password",
      icon: "error",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return { isVarified: false };
  }
}
export async function RegisterUser(reqBody) {
  const result = await axios.post(BASE_URL + `/registration`, reqBody);

  if (result.data["status"] === "success") {
    Swal.fire({
      title: "Register successful",
      text: result.data["message"],
      icon: "success",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return { status: "success" };
  } else {
    Swal.fire({
      title: "Fill all the fields",
      text: result.data["message"],
      icon: "error",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return {
      status: "fail",
    };
  }
}
export async function contactSend(reqBody) {
  const result = await axios.post(BASE_URL + `/contact`, reqBody);
  console.log(result.data["status"]);
  if (result.data["status"] === "success") {
    Swal.fire({
      title: "Message send successful",
      text: result.data["message"],
      icon: "success",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return { status: "success" };
  }

  if (result.data["status"] === "error") {
    Swal.fire({
      title: "Send failed try again",
      text: result.data["message"],
      icon: "error",
      color: "#f7fafc",
      background: "#2d3748",
    });
    return {
      status: "fail",
    };
  }
}
export async function postDetails(id) {
  const result = await axios.get(BASE_URL + `/post-details/${id}`);

  if (result.status !== 200) return [];
  return result.data;
}
