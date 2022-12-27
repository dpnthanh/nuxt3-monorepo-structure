import BaseButton from "./BaseButton.vue";

export default {
  title: "BaseButton",
  component: BaseButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: '<BaseButton v-bind="$props" />',
});

export const Primary = Template.bind({});
