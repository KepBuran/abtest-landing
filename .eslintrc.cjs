module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxt',
    '@nuxt/eslint-config',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': ['error', 2],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': [1, { 'varsIgnorePattern': 'props|emits' }],
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/type-annotation-spacing': ['warn', {
      after: true,
    }],
    'object-curly-spacing': [1, 'always'],
    'key-spacing': [1, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [1, { before: true, after: true }],
    'block-spacing': [1, 'always'],
    'space-before-blocks': [1, 'always'],
    'arrow-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': [1, { 'int32Hint': false }],
    'semi-spacing': [1, { 'before': false, 'after': true }],
  },
  plugins: ['tailwindcss', 'nuxt'],
}
