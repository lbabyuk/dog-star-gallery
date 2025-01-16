import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { testSnapshot } from '../../test/utils/snapshot.utils';

describe('Button', () => {
  const {
    WithIconContainedPrimary,
    WithIconsContainedPrimary,
    WithIconOutlinedPrimary,
    WithIconTextPrimary,
    Text,
    IconButtonP
  } = composeStories(stories);

  testSnapshot(<WithIconContainedPrimary />);
  testSnapshot(<WithIconsContainedPrimary />);
  testSnapshot(<WithIconOutlinedPrimary />);
  testSnapshot(<WithIconTextPrimary />);
  testSnapshot(<Text />);
  testSnapshot(<IconButtonP />);
});
