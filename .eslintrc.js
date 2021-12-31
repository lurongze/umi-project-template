module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    // myGlobal: false
  },
  rules: {
    // 未使用变量
    'no-unused-vars': 2
    // 自定义你的规则
    // 'import/no-extraneous-dependencies': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    // 'import/extensions': [1, { extensions: ['.tsx', '.ts', '.jsx', '.js'] }],
  },
};