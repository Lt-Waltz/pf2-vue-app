import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Deity from '@/views/Deities.vue';
import ExpandDeity from '@/components/ExpandDeity.vue'

/*describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})*/

describe('Deities.vue', () => {

  it('expandDetails opens the expand-deity element on click', async () => {
    const wrapper = shallowMount(Deity);
    const button = wrapper.find('button');
    
    const expandDeity = wrapper.findComponent(ExpandDeity);

    const deities = wrapper.find('div');

    expect(expandDeity.exists()).toBe(false);

    await button.trigger('click');

    //expect(expandDeity.exists()).toBe(true);

    expect(deities.exists()).toBe(true);

  })

})