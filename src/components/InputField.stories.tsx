import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import InputField, { InputFieldProps } from './InputField';

const meta: Meta<InputFieldProps> = {
  title: 'Form/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component with validation states, variants, sizes, optional clear button and password toggle. Supports light & dark themes.'
      }
    }
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    value: '',
    label: 'Label',
    placeholder: 'Type here',
    helperText: 'Helper text goes here',
    variant: 'outlined',
    size: 'md'
  }
};

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};

export const Filled: Story = {
  args: {
    variant: 'filled'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  }
};

export const Sizes: Story = {
  args: { },
  render: (args) => (
    <div className="space-y-4 w-80">
      <InputField {...args} size="sm" label="Small" placeholder="Small size" />
      <InputField {...args} size="md" label="Medium" placeholder="Medium size" />
      <InputField {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled value'
  }
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required'
  }
};

export const WithClear: Story = {
  args: {
    value: 'Clear me',
    helperText: 'Click clear to reset'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    helperText: 'Use at least 8 characters'
  }
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    helperText: 'This is shown in dark mode'
  }
};
