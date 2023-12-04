import { atom, selector } from "recoil";

export const projectList = atom({
  key: "projectList",
  default: [
    { id: 1, url: "abc" },
    { id: 2, url: "abc" },
  ],
});
