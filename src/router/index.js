import Vue from 'vue';
import Router from 'vue-router';
import SignUp from '@/components/SignUp';
import myPage from '@/components/myPage';
import Landing from '@/components/Landing';
import whatIsTimeToPoetry from '@/components/whatIsTimeToPoetry';
import mainMonthly from '@/components/monthly/mainMonthly';
import mainAttention from '@/components/attention/mainAttention';
import mainReading from '@/components/reading/mainReading';
import mainReadingImage from '@/components/reading/mainReadingImage';
import mainMonthlyMonth from '@/components/monthly/mainMonthlyMonth';
import mainMonthlyDetail from '@/components/monthly/mainMonthlyDetail';
import mainMonthlyPopup from '@/components/monthly/mainMonthlyPopup';
import mainMonthlyImage from '@/components/monthly/mainMonthlyImage';
import mainVoucher from '@/components/voucher/mainVoucher';
import mainQuestion from '@/components/question/mainQuestion';
import mainQuestionWriting from '@/components/question/mainQuestionWriting';
import mainNews from '@/components/news/mainNews';
import mainNewsDetail from '@/components/news/mainNewsDetail';

import mainAttentionImage from '@/components/attention/mainAttentionImage';
import LandingImage from '@/components/LandingImage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // redirect: '/now/P0011',
      name: 'Landing',
      component: Landing,
      children: [
        {
          path: '/now/:id/',
          name: 'LandingImage',
          props: (route) => ({ number: Number(route.params.number) , id: route.params.id}),
          component: LandingImage,
        }
      ]
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/mypage',
      name: 'myPage',
      component: myPage,
    },
    {
      path: '/monthly',
      redirect: '/monthly/2018/5',
      name: 'mainMonthly',
      component: mainMonthly,
      children: [
        {
          path: '/monthly/:year/',
          redirect: '/monthly/:year/1',
          name: 'mainMonthlyMonth',
          props: (route) => ({ number: Number(route.params.number) , year: Number(route.params.year)}),
          component: mainMonthlyMonth,
          children: [
            {
              path: '/monthly/:year/:month',
              name: 'mainMonthlyDetail',
              props: (route) => ({ number: Number(route.params.number) , month: Number(route.params.month)}),
              component: mainMonthlyDetail,
              children: [
                {
                  path: '/monthly/:year/:month/:id',
                  name: 'mainMonthlyPopup',
                  props: (route) => ({ number: Number(route.params.number) , id: route.params.id, poetry: route.params.poetry, contents: route.params.contents }),
                  component: mainMonthlyPopup,
              },
              // {
              //   path: '/monthly/:year/:month/:name',
              //   name: 'mainMonthlyImage',
              //   props: (route) => ({ number: Number(route.params.number) , name: route.params.name, poetry: route.params.poetry, contents: route.params.contents }),
              //   component: mainMonthlyImage,
              // },
            ]
          }
        ]
      }
    ]
    },
    {
      path: '/attention',
      name: 'mainAttention',
      component: mainAttention,
      children: [
        {
          path: '/attention/:id/',
          name: 'mainAttentionImage',
          props: (route) => ({ number: Number(route.params.number) , id: route.params.id, poetry: route.params.poetry, contents: route.params.contents }),
          component: mainAttentionImage,
        }
      ]
    },
    {
      path: '/read',
      name: 'mainReading',
      component: mainReading,
      children: [
        {
          path: '/read/:id/',
          name: 'mainReadingImage',
          props: (route) => ({ id: Number(route.params.id) }),
          component: mainReadingImage,
        }
      ]
    },
    {
      path: '/news',
      name: 'mainNews',
      component: mainNews,
      children: [
        {
          path: '/news/:id/',
          name: 'mainNewsDetail',
          props: (route) => ({ number: Number(route.params.number) , id: route.params.id, poetry: route.params.poetry, menu: route.params.menu}),
          component: mainNewsDetail,
        }
      ]
    },
    {
      path: '/question',
      name: 'mainQuestion',
      component: mainQuestion,
    },
    {
      path: '/question/writing',
      name: 'mainQuestionWriting',
      component: mainQuestionWriting,
    },
    {
      path: '/voucher',
      name: 'mainVoucher',
      component: mainVoucher,
    },
    {
      path: '/whatIsTimeToPoetry',
      name: 'whatIsTimeToPoetry',
      component: whatIsTimeToPoetry,
    },

  ],
  linkActiveClass: 'my-active-class',
});
