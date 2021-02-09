import TheNavBar from '@/components/TheNavBar.vue';
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/opiniones',
      name: 'Opiniones',
    },
    {
      path: '/administracion',
      name: 'Administracion',
    }
  ]
});

describe('Home.vue', () => {
  it('existe informacion en el navBar', () => {
    const wrapper = mount(TheNavBar,{
      localVue,
      router
    });
    expect(wrapper.find('.navbar-brand').text().length).toBe(13);
    expect(wrapper.text()).toContain('Opiniones');
    expect(wrapper.vm.$route.path).toBe('/');
  })
})
