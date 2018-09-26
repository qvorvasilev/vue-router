'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
window.Vue = Vue;

require('../../node_modules/bootstrap/dist/js/bootstrap.js');

Vue.use(VueRouter);

import router from './routes';



var vm = new Vue({
    data: function(){
        return { 
            categories: [
                {
                    url: '/category/cat-one',
                    name: 'cat One',
                    subCategories: [
                        {
                            id: 'aaaa',
                            url: '/sub-cat-one',
                            name: 'Sub Cat One',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                        {
                            id: 2,
                            url: '/sub-cat-two',
                            name: 'sub Cat Two',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                        {
                            url: '/sub-cat-three',
                            name: 'sub Cat three',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                    ]
                },
                {
                    url: '/category/cat-two',
                    name: 'cat Two',
                    subCategories: [
                        {
                            url: '/1',
                            name: 'sub Cat three',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                        {
                            url: '/2',
                            name: 'sub Cat three',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                        {
                            url: '/3',
                            name: 'sub Cat three',
                            products: [
                                {
                                    name: 'Product Name one',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem Ipsum dolor sit amet'
                                },
                                {
                                    name: 'Product Name Two',
                                    image: 'http://via.placeholder.com/360x360',
                                    description: 'Lorem ipsum 2'
                                }
                            ]
                        },
                    ]
                },
            ]
        }
    },
    router: router,
    computed: {
        category () {
          // We will see what `params` is shortly
          return this.$route.params.category
        }
    },
    methods: {
        goBack () {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
    }
}).$mount('#app');

global.vm = vm;