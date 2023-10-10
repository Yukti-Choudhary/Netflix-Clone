export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzg0NDQ0NjMwNjc2MTNlODQ5NTEwMTJmNWUwYTk5OCIsInN1YiI6IjY1MWMyMzNkNzQ1MDdkMDBlMjBmYTE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.auWvNi6sPTcpnIFqtQnpkl4Vvy8VxX2qmB4y-w4YGFg"
  },
};

export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_KEY = process.env.REACT_APP_AI_KEY;

export const LANGUAGE_SELECT = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "french",
    name: "French",
  },
  {
    identifier: "italian",
    name: "Italian",
  },
  {
    identifier: "german",
    name: "German",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "telugu",
    name: "Telugu",
  },
  {
    identifier: "tamil",
    name: "Tamil",
  },
  {
    identifier: "malayalam",
    name: "Malayalam",
  },
  {
    identifier: "kannada",
    name: "Kannada",
  },
];
