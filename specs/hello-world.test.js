import { mount } from '@vue/test-utils';
import { HelloWorld } from '../packages/hello-world';

test('displays message', () => {
    // // mount() returns a wrapped Vue component we can interact with
    // const wrapper = mount(MessageComponent, {
    //   propsData: {
    //     msg: 'Hello world'
    //   }
    // })
    const wrapper = mount(HelloWorld);
  
    // // Assert the rendered text of the component
    expect(wrapper.html()).toContain('For a guide and recipes on how to configure');
})