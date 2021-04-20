// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import VueRouter from 'vue-router';
// import ElementUI from 'element-ui';
// import HelloWorld from '@/components/HelloWorld.vue';

// const localVue = createLocalVue();

// localVue.use(VueRouter);
// localVue.use(ElementUI);

// // describe 定义测试集
// describe('HelloWorld.vue', () => {
//   // it 里是单元测试最小集
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     // 对 HelloWorld 进行浅渲染，HelloWord 下的子组件是不渲染的，正常渲染是 mount
//     const wrapper = shallowMount(HelloWorld, {
//       localVue,
//       propsData: { msg }
//     });

//     // 预期 wrapper.text() 的值和 msg 一样
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
