// !! OK

module.exports = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-use-variable',
    'stylelint-a11y',
    'stylelint-high-performance-animation'
  ],
  ignoreFiles: ['**/*.svg', 'public/**/*.css'],
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'max-nesting-depth': 5,
    'selector-max-compound-selectors': 3,
    'color-named': 'never',
    'color-no-hex': true,
    'declaration-no-important': true,
    'selector-max-class': 3,
    'selector-max-attribute': 1,
    'selector-max-combinators': 1,
    'selector-max-id': 0,
    'selector-max-pseudo-class': 2,
    'selector-no-qualifying-type': true,
    'selector-max-type': 1,
    'selector-max-universal': 1,
    'font-weight-notation': 'numeric',
    'function-url-no-scheme-relative': true,
    'plugin/no-unsupported-browser-features': [true, { severity: 'warning' }],
    'plugin/declaration-block-no-ignored-properties': true,
    'sh-waqar/declaration-use-variable': [['/color/', 'font-size']],
    'a11y/no-outline-none': true,
    'a11y/no-display-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'plugin/no-low-performance-animation-properties': true
  }
}
