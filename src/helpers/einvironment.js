let APIURL = "";

switch (window.location.localhost) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "ffhsurvey2022.herokuapp.com":
    APIURL = "https://ffhsurvey2022.herokuapp.com";
}

export default APIURL;
