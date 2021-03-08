import { useState } from "react";

import kanban from "../../img/kanban.png";
import cite from "../../img/cite.png";
import pizza from "../../img/pizza.png";
import todo from "../../img/todo.png";
import vue from "../../img/vue.png";
import wordof from "../../img/wordof.png";
import console from "../../img/console.png";

export const useCardState = () => {
  const [state, setState] = useState({item:[
    {
      img: kanban,
      title: "Kanban",
      text: "Kanban",
      links: "https://kanban-tests.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        " In this project, I used the VKUI library to work with ready made components, which accelerated my work,also learned to work with the firebase database from where I pulled up the data, learned how to create custom hooks, which made the code cleaner and more understandable.",
        id: 'react'
    },
    {
      img: console,
      title: "Consolas",
      text: "Consolas",
      links: "http://console-styled-components.illiasargument.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        "In this project, I got acquainted with such a utility as Styled Component, made a simple application similar to the console",
        id: 'react'
    },
    {
      img: pizza,
      title: "Shop",
      text: "Shop",
      links: "http://react-redux-pizzashop.illiasargument.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        "In this project, I got acquainted with such an independent library as Redux, a useful utility for storing the state of our application.",
        id: 'redux'
    },
    {
      img: vue,
      title: "Test vue",
      text: "Test vue",
      links: "https://test-vuejs-neon.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        "In this project, I got acquainted with the Vue.js framework, similar to the react, the same fast and with good optimization",
        id: 'vue'
    },
    {
      img: wordof,
      title: "Game of Thrones",
      text: "Game of Thrones",
      links:
        "https://5fdf41d8af98385f417e99fc--focused-meninsky-051756.netlify.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        "In this project, I got acquainted with routing with synchonous async await requests, hook hooks, since I started studying with class components, I realized how much easier it is to work with the appearance of hooks.",
        id:  'react'
    },
    {
      img: todo,
      title: "todo",
      text: "todo",
      links: "http://test2-todo-list.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc: "",
      id:  'react'
    },
    {
      img: cite,
      title: "Cite test",
      text: "Cite test",
      links: "https://cite-test.vercel.app/",
      code: "https://github.com/IliasArgument?tab=repositories",
      desc:
        "In this project, I immersed myself in layout in the BEM methodology, I realized how much time correctly named classes and blocks save.",
    }
  ], arr:[]})

      
      return {state, setState};
}