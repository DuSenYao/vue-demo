module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    node: true,
    browser: true,
    es6: true
  },

  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        bracketSpacing: true,
        arrowParens: 'avoid',
        printWidth: 100
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-caller': 2,
    'no-control-regex': 0,
    'no-dupe-class-members': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-fallthrough': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-new-symbol': 2,
    'no-path-concat': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-sequences': 2,
    'no-this-before-super': 2,
    'no-trailing-spaces': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [0, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'no-alert': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-continue': 0,
    'no-delete-var': 2,
    'no-div-regex': 1,
    'no-dupe-keys': 2,
    'no-dupe-args': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-label': 0,
    'no-eq-null': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-invalid-this': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 1,
    'no-mixed-requires': [0, false],
    'linebreak-style': [0, 'windows'],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 0,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-underscore-dangle': 1,
    'no-unreachable': 2,
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-var': 0,
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'no-with': 2,
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': 0,
    'block-scoped-var': 0,
    'computed-property-spacing': [0, 'never'],
    'consistent-return': 0,
    'consistent-this': [2, 'that'],
    'default-case': 0,
    'dot-notation': [
      0,
      {
        allowKeywords: true
      }
    ],
    'func-names': 0,
    'func-style': [0, 'declaration'],
    'guard-for-in': 0,
    'id-length': 0,
    'init-declarations': 0,
    'lines-around-comment': 0,
    'max-depth': [0, 4],
    'max-len': [0, 100, 4],
    'max-nested-callbacks': [0, 2],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'new-parens': 2,
    'object-shorthand': 0,
    'operator-assignment': [0, 'always'],
    'prefer-spread': 0,
    'prefer-reflect': 0,
    'quote-props': [0, 'always'],
    radix: 2,
    'id-match': 0,
    'require-yield': 0,
    'sort-vars': 0,
    'space-after-keywords': [0, 'always'],
    'space-return-throw-case': 0,
    strict: 2,
    'valid-jsdoc': 0,
    'vars-on-top': 2,
    'wrap-regex': 0,
    yoda: [2, 'never']
  },

  // jest 测试配置
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
