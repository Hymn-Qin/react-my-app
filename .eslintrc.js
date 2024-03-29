module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	// 原extends: 'eslint:recommended',
	extends: ['plugin:react/recommended', 'eslint:recommended', 'prettier'],
	// required to lint *.vue files 使用 html参数
	plugins: ['react', 'react-hooks', 'html', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		Babel: true,
		React: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		strict: 0,
		'react/jsx-first-prop-new-line': 'off',
		//关闭换行符操作系统格式问题
		'linebreak-style': ['off', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		// 禁止缩进错误
		indent: 0,
		// 关闭不允许使用 no-tabs
		'no-tabs': 'off',
		'no-console': 1,
		// 设置不冲突 underscore 库
		'no-underscore-dangle': 0,
		// 箭头函数直接返回的时候不需要 大括号 {}
		'arrow-body-style': [2, 'as-needed'],
		'no-alert': 'error',

		// 设置是否可以重新改变参数的值
		'no-param-reassign': 0,
		// 允许使用 for in
		'no-restricted-syntax': 0,
		'guard-for-in': 0,
		// 不需要每次都有返回
		'consistent-return': 0,
		// 允许使用 arguments
		'prefer-rest-params': 0,
		// 允许返回 await
		'no-return-await': 0,
		// 不必在使用前定义 函数
		'no-use-before-define': 0,
		// 允许代码后面空白
		'no-trailing-spaces': 0,

		// 关闭大括号内的换行符要求
		'object-curly-newline': 0,

		// 有一些 event 的时候，不需要 role 属性，不需要其他解释
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		// 类成员之间空行问题
		'lines-between-class-members': 0,

		// 不区分是否在 despendencies
		'import/no-extraneous-dependencies': 0,
		// 引用时候根据根目录基础
		'import/no-unresolved': 0,

		// 关闭解构赋值报错
		'react/destructuring-assignment': 0,
		// 允许在 .js 和 .jsx 文件中使用  jsx
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		// jsx > 紧跟着属性
		'react/jsx-closing-bracket-location': [1, 'after-props'],
		// 不区分是否是 无状态组件
		'react/prefer-stateless-function': 0,
		// prop-types忽略children属性
		'react/prop-types': [1, { ignore: ['children'] }],
		// 关闭禁止prop-types类型
		'react/forbid-prop-types': 0,
		// 关闭default-props检查
		'react/require-default-props': 0,
		'no-unused-vars': 1, // 不能有声明后未被使用的变量或参数
		'no-extra-parens': 1, // 非必要的括号
		'no-restricted-globals': ["error", "event", "fdescribe"],
		'react-hooks/rules-of-hooks': 'error',// 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn',// 检查 effect 的依赖
	},
};
