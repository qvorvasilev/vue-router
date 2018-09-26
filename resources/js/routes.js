import VueRouter from 'vue-router';

const Category = {
    props: ['id', 'name'],
    template: `<div>Category {{ $route.params.id }} </div>`,
}

let routes = [
    {
        path: '/about',
        component: require('./views/About')
    },
    {
        path: '/',
        component: require('./views/Home'),

    },
    {
        path: '/category/:id',
        component: require('./views/Category'),
        props: { aaa: vm }
    },
    {
        path: '/category/:id/:id',
        component: require('./views/SubCategory'),
        props: true,
    },
];

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const User = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }

// const routes = [
//     { path: '/user/:id', component: User }
// ]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

