module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // 是否收集测试时的覆盖率信息。 由于要带上覆盖率搜集语句重新访问所有执行过的文件，这可能会让测试执行速度被明显减慢。默认值 false
  // collectCoverage: true,
  // 测试哪里的文件
  collectCoverageFrom: ['src/components/**/*.{js,vue}', 'src/utils/**/*.{js,vue}'],
  // 告诉jest需要解析的文件
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  // 告诉jest针对不同类型的文件的文件如何转义
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 别名，同webpack中的alias
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 生成快照
  snapshotSerializers: ['jest-serializer-vue'],
  // 告诉jest去哪里找编写的测试文件
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  // Jest输出覆盖信息文件的目录。
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  // 列出包含reporter名字的列表，而Jest会用他们来生成覆盖报告。
  coverageReporters: ['lcov', 'text-summary'],
  testURL: 'http://localhost/'
};
