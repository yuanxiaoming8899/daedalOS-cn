import { FAVICON_BASE_PATH } from "utils/constants";

type Bookmark = {
  icon: string;
  name: string;
  path?: string;
  url: string;
};

export const DINO_GAME = {
  icon: "/System/Icons/Favicons/dino.webp",
  name: "T-Rex Chrome Dino Game",
  path: "/Program Files/Browser/dino/index.html",
  url: "chrome://dino",
};

export const bookmarks: Bookmark[] = [
  {
    icon: FAVICON_BASE_PATH,
    name: "daedalOS",
    url: "https://dustinbrett.com/",
  },
  {
    icon: "/System/Icons/Favicons/google.webp",
    name: "Google",
    url: "https://www.google.com/webhp?igu=1",
  },
  {
    icon: "/System/Icons/Favicons/wikipedia.webp",
    name: "Wikipedia",
    url: "https://www.wikipedia.org/",
  },
  {
    icon: "/System/Icons/Favicons/archive.webp",
    name: "Internet Archive",
    url: "https://archive.org/",
  },
  {
    icon: "/System/Icons/Favicons/win96.webp",
    name: "Windows 96",
    url: "https://windows96.net/",
  },
  {
    icon: "/System/Icons/Favicons/aos.webp",
    name: "AaronOS",
    url: "https://aaronos.dev/",
  },
  DINO_GAME,
];

export const HOME_PAGE = "https://www.google.com/webhp?igu=1";
