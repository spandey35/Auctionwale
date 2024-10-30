import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/property",
    newTab: false,
  },
 /*
  {
    id: 3,
    title: "📞+91 7030304717",
    path: "/contact",
    newTab: false,
  },

  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      
      {
        id: 46,
        title: "Sign In Page",
        path: "/sign-in",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/sign-up",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },  */ 
  {
    id: 49,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "F&Q",
        path: "/FAQSection",
        newTab: false,
      },
      
    ],
  }
];
export default menuData;
