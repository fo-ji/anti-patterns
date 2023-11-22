---
name: 'component'
root: 'src/components'
output: '.'
questions:
  dir: 'Please enter a directory name.'
  exist:
    confirm: 'Directory already existed?'
    initial: false
  name: 'Please enter a component name.'
  story:
    confirm: 'Do you need a story?'
    initial: true
---

# `{{ inputs.dir }}/index.ts`

```typescript
export * from './{{ inputs.name }}';
{{ if inputs.exist }}{{ read output.abs }}{{ end }}
```

# `{{ inputs.dir }}/{{ inputs.name }}.tsx`

```typescript
import type { ReactNode } from 'react';

export type {{ inputs.name | pascal }}Props = {
  children: ReactNode;
};

export const {{ inputs.name | pascal }} = ({ children }: {{ inputs.name | pascal }}Props) => {
  return <>{children}</>;
};
```

# `{{ !inputs.story && '!' }}{{ inputs.dir }}/{{ inputs.name }}.stories.tsx`

```typescript
import { {{ inputs.name | pascal }}, type {{ inputs.name | pascal }}Props } from './{{ inputs.name }}';

import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Components/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
};

export default meta;

const Template: StoryFn<{{ inputs.name | pascal }}Props> = (props) => <{{ inputs.name | pascal }} {...props} />;

export const Default = Template.bind({});

Default.args = {};
```