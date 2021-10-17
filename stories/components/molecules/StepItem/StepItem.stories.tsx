import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StemItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc: 'Pilih salah satu game\nyang ingin kamu top up.',
};
