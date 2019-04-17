import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 94d02cfe64a70acf071638b8257cd8e3711ce82b292b536e242b84ad6bf75df8"
  }
});


