import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Archives from "@/views/Archives";
import Tags from "@/views/Tags";
import Article from "@/views/Article";
import Categories from "@/views/Categories";
import About from "@/views/About"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/archives',
        name: Archives,
        component: Archives
    },
    {
        path: '/tags',
        name: Tags,
        component: Tags
    },
    {
        path: '/articles/:id',
        name: Article,
        component: Article
    },
    {
        path: '/categories',
        name: Categories,
        component: Categories
    },
    {
        path: '/about',
        name: About,
        component: About
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
