module.exports = {
  // 如果是SSR项目，则需要配置 node:true
  root: true,

  // 为什么是这样的parser配置？https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    node: true,
    browser: true,
    es6: true
  },

  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],

  plugins: [
    // 注意这里不能配置 html 选项，为什么？https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    'vue'
  ],

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
        printWidth: 120
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
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
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [1, 'always'],
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
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
    'no-eval': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-return-assign': [2, 'except-parens'],
    'no-sequences': 2,
    'no-trailing-spaces': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
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
    semi: [2, 'always'],
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
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    'no-alert': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-array-constructor': 2,
    'no-bitwise': 1,
    'no-div-regex': 1,
    'no-else-return': 2,
    'no-empty': 1,
    'no-eq-null': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-parens': [2, 'functions'],
    'no-floating-decimal': 2,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 1,
    'linebreak-style': [0, 'windows'],
    'no-multi-str': 2,
    'no-nested-ternary': 0,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
    'no-proto': 2,
    'no-self-compare': 2,
    'func-call-spacing': 2,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 1,
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-var': 2,
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [1, 'as-needed'],
    'computed-property-spacing': [1, 'never'],
    'consistent-return': 0,
    'default-case': 1,
    'dot-notation': [
      0,
      {
        allowKeywords: true
      }
    ],
    'func-names': 1,
    'func-style': [0, 'declaration'],
    'guard-for-in': 0,
    'id-length': 0,
    'init-declarations': 1,
    'lines-around-comment': 0,
    'max-depth': [1, 4],
    'max-len': [1, { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'max-nested-callbacks': 1,
    'max-params': [1, 6],
    'max-statements': [1, 40],
    'new-parens': 2,
    'object-shorthand': 1,
    'operator-assignment': 1,
    'prefer-spread': 1,
    'quote-props': [1, 'as-needed'],
    radix: [1, 'as-needed'],
    'id-match': 0,
    'sort-vars': [1, { ignoreCase: true }],
    strict: 2,
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
