import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { TextHeightRule, FontRule, FontSizeRule, PanguRule, capitialRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [TextHeightRule, FontRule, FontSizeRule, PanguRule, capitialRule],
    config: {
      rules: {
        [TextHeightRule.name]: { active: true },
        [FontRule.name]: { active: true },
        [FontSizeRule.name]: { active: true },
        [PanguRule.name]: { active: true },
        [capitialRule.name]: { active: false },
      },
    },
  };
};

export default assistant;
