import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  // 判断事件是否执行
  let isCalled = false;
  const wrapper = mount(Counter, {
    listeners: {
      change() {
        isCalled = true;
      }
    }
  });

  it('renders Counter.vue', () => {
    // toMatchSnapshot 生成快照缓存，下次单元测试时与快照缓存比较
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('count++', () => {
    const button = wrapper.find('button');

    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
    expect(isCalled).toBe(true);
  });
});
