import { atom, selector } from "recoil";

interface List {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
  skill: string[];
  github: string;
  link: string;
}

export const projectList = atom<List[]>({
  key: "projectList",
  default: [
    {
      id: 1,
      title: "팀 프로젝트 : 이은",
      imageUrl: "/Img/ieun.jpg",
      text: "팀 프로젝트로 만든 업 사이클링 + 펀딩 사이트 입니다.이은의 업사이클러는 회원분들의 공간에서 더 이상 사용하지 않는 자재를 펀딩 받아, 새로운 창작품으로 만들어 줄 수 있습니다.",
      skill: ["ㅡ React", "ㅡ CSS module", "ㅡ Axios", "ㅡ React - router", "ㅡ Gsap", "ㅡ Lenis"],
      github: "https://github.com/codestates-seb/seb44_main_021",
      link: "https://ieun.store/",
    },
    {
      id: 2,
      title: "포트폴리오",
      imageUrl: "/Img/portfolio.jpg",
      text: "저의 포트폴리오입니다. 주요 페이지는 Main, About, Project로 구성되어 있습니다.",
      skill: ["ㅡ React", "ㅡ Styled Component", "ㅡ Recoil", "ㅡ Gsap"],
      github: "https://github.com/weed7968/Portfolio2023",
      link: "https://weed7968.github.io/Portfolio2023/",
    },
    {
      id: 3,
      title: "쇼핑몰 클론코딩",
      imageUrl: "/Img/shopping.jpg",
      text: "React를 활용한 쇼핑몰 클론코딩 입니다. 메인 페이지, list 페이지, 북마크 페이지로 구성 되어있으며, 북마크 기능, 카테코리 기능을 추가하였습니다.",
      skill: ["ㅡ React", "ㅡ Styled Component", "ㅡ Context API", "ㅡ React - router"],
      github: "https://github.com/weed7968/fe-sprint-coz-shopping",
      link: "https://weed7968.github.io/fe-sprint-coz-shopping/",
    },
    {
      id: 4,
      title: "팀 프로젝트 : ExerciseMan",
      imageUrl: "/Img/ExerciseMan.jpg",
      text: "학부생때 팀 프로젝트로 만든 운동하는 사람들을 위한 종합 커뮤니티 웹 페이지입니다.",
      skill: ["ㅡ React", "ㅡ CSS module", "ㅡ React - router"],
      github: "https://github.com/pydevjeong/ExerciseMan",
      link: "https://www.notion.so/3-2-Project-8f9f0dfdcb3c43f29f7d6ed9affe75c1",
    },
  ],
});

export const ModalId = atom<string>({
  key: "ModalId",
  default: "",
});

export const projectById = selector({
  key: "projectById",
  get: ({ get }) => {
    const pList = get(projectList);
    const Id = get(ModalId);
    return pList.find((project) => project.id.toString() === Id) || null;
  },
});
