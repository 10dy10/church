import { createWebHistory, createRouter } from "vue-router";
import AdminLogin from './views/AdminLogin.vue'
import Main from './views/Main.vue'
import Home from './views/Home.vue'
import UserList from './views/UserList.vue'
import addUser from './views/addUser.vue'
import Setting from './views/Setting.vue'
import addManager from './views/addManager.vue'
import Board from './views/Board.vue'
import Notice from './views/Notice.vue'
import Post from './views/Post.vue'
import Qna from './views/Qna.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: "/",
    component: AdminLogin,
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: "userlist",
        component: UserList,
      },
      {
        path: 'adduser',
        component: addUser
      },
      {
        path: 'setting',
        component: Setting
      },
      {
        path: 'addmanager',
        component: addManager
      },
      {
        path: 'board',
        component: Board,
        children: [
          {
            path: 'post',
            component: Post
          }
        ]
      },
      {
        path: 'Notice',
        component: Notice
      },
      {
        path: 'Qna',
        component: Qna
      },
    ]
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 