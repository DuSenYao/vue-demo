module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'order/properties-alphabetical-order': null,
    // 指定2个空格
    indentation: 2,
    // 样式块中不允许重复的属性
    'declaration-block-no-duplicate-properties': true,
    // 指定颜色函数使用传统符号隔开
    'color-function-notation': 'legacy',
    // 函数 url 链接不允许 shceme relative
    'function-url-no-scheme-relative': true,
    // 可组合成一个属性的写法，不允许拆开书写
    'declaration-block-no-redundant-longhand-properties': true,
    // 选择器最大深度
    'selector-max-compound-selectors': 10,
    // 限制 id选择器的数目在一个选择器中
    'selector-max-id': 1,
    // 最多2个类型选择器
    'selector-max-type': 2,
    // 不允许未知的动画
    'no-unknown-animations': true,
    // 在字体名称必须使用引号的地方使用引号，其他地方不能使用
    'font-family-name-quotes': 'always-unless-keyword',
    // url 函数内部必须有引号
    'function-url-quotes': 'always',
    // 指定字符串引号为单引号
    'string-quotes': 'single',
    // 在规则的分号之前不允许有空格
    'at-rule-semicolon-space-before': 'never',
    // 首行不允许空行
    'no-empty-first-line': true,
    // 不允许使用 unicode 作为顺序标记
    'unicode-bom': 'never',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['import', 'include', 'mixin', 'include', 'extend'] }],
    'max-nesting-depth': [10, { ignore: ['blockless-at-rules', 'pseudo-classes'] }],
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
    // 为类选择器指定一个模式
    'selector-class-pattern': null,
    'declaration-colon-newline-after': null
  }
};
