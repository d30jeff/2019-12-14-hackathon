import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      isPublic: true,
      title: 'Home Page',
      metaTags: [
        {
          name: 'This is the description of home page',
          content: 'Home page',
        },
        {
          property: 'og:description',
          content: 'Home page',
        },
      ],
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/Signup.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/Signin.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/syllabus',
    name: 'syllabus',
    component: () => import('@/views/Syllabus.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/About.vue'),
    meta: {
      isPublic: true,
      title: 'About Page',
      metaTags: [
        {
          name: 'This is the description of about page',
          content: 'About page',
        },
        {
          property: 'og:description',
          content: 'About page',
        },
      ],
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services/Services.vue'),
    meta: {
      isPublic: true,
      title: 'Services Page',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
  },
  {
    path: '/our-locations',
    name: 'our.locations',
    component: () => import('@/views/OurLocations/OurLocations.vue'),
    meta: {
      isPublic: true,
      title: 'Our Locations Page',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.',
        },
      ],
    },
  },
];

const instance = new VueRouter({
  mode: 'history',
  scrollBehavior: () => {
    return {
      x: 0,
      y: 0,
    }
  },
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
});

instance.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Website Template';

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach((el: any) => {
    el.parentNode.removeChild(el);
  });

  if (to.meta.metaTags && to.meta.metaTags.length) {
    to.meta.metaTags.forEach((metaTag: any) => {
      const tag = document.createElement('meta');

      for (const [key, value] of Object.entries(metaTag)) {
        tag.setAttribute(key, value as string);
        tag.setAttribute('data-vue-router-controlled', '');
        document.head.appendChild(tag);
      }
    });
  }

  if (to.meta.isPublic) {
    next();
  }
});

export const router = instance;
