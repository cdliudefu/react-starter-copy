// css代码审查工具

module.exports = {
  extends: 'stylelint-config-standard',

  plugins: ['stylelint-order'],

  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          'composes',
        ],
      },
    ],

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules :global scope
          'global',
          'local',
        ],
      },
    ],

    'string-quotes': 'single',

    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],

    'order/properties-order': [],
  },
};
