import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import CounterComponent from '@/components/CounterComponent.vue';

describe('Testing <CounterComponent />', () => {
  test('should match the snapshot', () => {
    const wrapper = mount(CounterComponent);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(CounterComponent, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });
});
