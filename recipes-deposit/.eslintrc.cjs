module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        'node': true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint'
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        'react/jsx-key': [
            'error',
            {
                'checkFragmentShorthand': true,
                'warnOnDuplicates': true,
                'checkKeyMustBeforeSpread': true,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quote-props': [
            'off',
        ],
        'no-console': 'error',
        // Strict mode
        'strict': [
            'error',
            'never',
        ],
        'no-alert': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'block-scoped-var': 'error',
        'camelcase': [
            'error',
            {
                'properties': 'never',
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'eol-last': 'error',
        'func-names': 'off',
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'new-cap': [
            'error',
            {
                'newIsCap': true,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
            },
        ],
        'no-array-constructor': 'error',
        'no-nested-ternary': 'off',
        'import/no-unresolved': 'off',
        'import/no-duplicates': 'error',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': [
            'error',
            {
                'ignoreRestSiblings': true,
            },
        ],

        'import/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'object',
                    ['index', 'sibling', 'parent'],
                    'type',
                ],
                'alphabetize': {
                    'order': 'asc',
                    'caseInsensitive': false,
                },
            },
        ],
        'no-useless-escape': 'off',
        'one-var': [
            'error',
            'never',
        ],
        'arrow-spacing': 'error',
        'padded-blocks': [
            'error',
            {
                'classes': 'never',
                'blocks': 'never',
            },
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'switch-colon-spacing': [
            'error',
            {
                'after': true,
                'before': false,
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                ],
                'markers': [
                    '=',
                    '!',
                ],
            },
        ],
        'consistent-return': 'error',
        'curly': [
            'error',
            'all',
        ],
        'default-case': 'error',
        'dot-notation': [
            2,
            {
                'allowKeywords': true,
            },
        ],
        'guard-for-in': 'error',
        'no-with': 'error',
        'no-return-assign': 'error',
        'no-proto': 'error',
        'no-caller': 'error',
        'no-else-return': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-multi-spaces': 'error',
        'radix': 'error',
        // React
        'react/display-name': 'off',
        'react/jsx-boolean-value': [
            'error',
            'always',
        ],
        'react/jsx-curly-spacing': 'warn',
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [2,
            {
                'maximum': 1,
                'when': 'always',
            },
        ],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-closing-bracket-location': [
            2,
            'tag-aligned',
        ],
        'react/no-danger': 'off',
        'react/no-set-state': 'off',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/no-multi-comp': [
            'error',
            {
                'ignoreStateless': true,
            },
        ],
        'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': [
            'error',
            {
                'order': [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
                'groups': {
                    'static-methods': [
                        'displayName',
                        'propTypes',
                        'defaultProps',
                        '/^((?!propTypes|defaultProps).)*$/',
                    ],
                    'lifecycle': [
                        'displayName',
                        'propTypes',
                        'defaultProps',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                },
            },
        ],
        'react/jsx-wrap-multilines': ['error', {
            'declaration': 'parens-new-line',
            'assignment': 'parens-new-line',
            'return': 'parens-new-line',
            'arrow': 'parens-new-line',
            'condition': 'parens-new-line',
            'logical': 'ignore',
            'prop': 'ignore',
        }],
        // Duplicated with TypeScript
        'block-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'func-call-spacing': 'off',
        'indent': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'no-extra-parens': 'off',
        'object-curly-spacing': 'off',
        'padding-line-between-statements': 'off',
        'quotes': 'off',
        'semi': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'error',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        // Typescript
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/block-spacing': 'error',
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
        ],
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/comma-dangle': [
            'error',
            'always-multiline',
        ],
        '@typescript-eslint/comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
            },
        ],
        '@typescript-eslint/keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
        ],
        '@typescript-eslint/indent': [
            'error', 4,
            {
                'SwitchCase': 1,
            },
        ],
        '@typescript-eslint/no-extra-parens': [
            'error',
            'functions',
        ],
        '@typescript-eslint/object-curly-spacing': [
            'error',
            'always',
        ],
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': '*',
                'next': ['interface', 'type', 'export'],
            },
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/semi': [
            'error',
            'always',
        ],
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                },
            },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/parameter-properties': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            'never',
        ],
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/no-var-requires': [
            0,
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                'extendDefaults': true,
                'types': {
                    '{}': false,
                },
            },
        ],
    },
    "parser": '@typescript-eslint/parser',
    "root": true
}