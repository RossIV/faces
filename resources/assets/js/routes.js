import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: require('./views/About.vue')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});