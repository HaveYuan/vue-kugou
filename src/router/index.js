import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import songs from '@/components/songs/songs'
import rank from '@/components/rank/rank'
import sheet from '@/components/sheet/sheet'
import singer from '@/components/singer/singer'
import home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	redirect: 'home'
    },
    {
        path: '/home',
        redirect: 'home/songs'
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        children: [
            {   
                path: 'songs',
                name: 'songs',
                component: songs
            },
            {
                path: 'rank',
                name: 'rank',
                component: rank
            },
            {
                path: 'sheet',
                name: 'sheet',
                component: sheet
            },
                {
                path: 'singer',
                name: 'singer',
                component: singer
            }
        ]
    },
    {
        path: '/hi',
        name: 'HelloWorld',
        component: HelloWorld
    }
  ]
})
