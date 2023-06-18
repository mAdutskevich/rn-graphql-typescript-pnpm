// import type { Meta, StoryObj } from '@storybook/react';
// import { ButtonDesignType } from '@/enums/ButtonDesignType';
// // import { ButtonType } from '@/enums/ButtonType';
// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
//     title: 'Library/Atoms/Button',
//     component: Button,
//     tags: ['autodocs'],
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//     args: {
//         title: 'Test Button',
//         // type: ButtonType.BUTTON,
//     },
// };

// export const Secondary: Story = {
//     args: {
//         title: 'Test Button',
//         // type: ButtonType.BUTTON,
//         $designType: ButtonDesignType.SECONDARY,
//     },
// };

import React from "react";

import { Button } from './Button';

export default {
  title: 'Library/Atoms/Button',
  component: Button,
  argTypes: {
    title: 'Test Button',
    // onPress: { action: "pressed" },
  },
};

// export const Basic = (args) => <MyButton {...args} />;

// Basic.args = {
//   text: "Hello World",
//   color: "purple",
// };

