module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {impliedStrict: true}
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    greasemonkey: true,
    es6: true
  },
  globals: {
    FSH: true,
    localforage: false,
    ga: false,
    GameController: false,
    GameData: false
  },
  'extends': 'eslint:recommended',
  rules: {

    /*  Possible Errors  */
    'no-await-in-loop': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-console': ['error', {allow: ['error']}],
    'no-extra-parens': ['error', 'all', {conditionalAssign: false}],
    'no-prototype-builtins': ['error'],
    'no-template-curly-in-string': ['error'],
    'valid-jsdoc': ['error'],

    /*  Best Practices  */
    'accessor-pairs': ['error'],
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    'class-methods-use-this': ['error'],
    complexity: ['error', 3],
    'consistent-return': ['off'],
    curly: ['error'],
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'guard-for-in': ['error'],
    'no-alert': ['warn'],
    'no-caller': ['error'],
    'no-div-regex': ['error'],
    'no-else-return': ['error'],
    'no-empty-function': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error'],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    // 'no-magic-numbers': ['error', {
    //   'ignore': [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 60, 100, 1000],
    //   'ignoreArrayIndexes': true
    // }],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error'],
    'no-proto': ['error'],
    'no-restricted-properties': ['error'],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    // 'no-warning-comments': ['warn'],
    'no-with': ['error'],
    'prefer-promise-reject-errors': ['error'],
    radix: ['error'],
    'require-await': ['error'],
    'vars-on-top': ['off'],
    'wrap-iife': ['error', 'outside'],
    yoda: ['error'],

    /*  Variables  */
    'init-declarations': ['off'],
    'no-catch-shadow': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['error', 'event'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['error'],
    'no-use-before-define': ['error'],

    /*  Stylistic Issues  */
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    camelcase: ['off'],
    'capitalized-comments': ['off'],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'consistent-this': ['error', 'that'],
    'eol-last': ['error'],
    'func-call-spacing': ['error'],
    'func-name-matching': ['error'],
    // 'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    indent: ['error', 2],
    'jsx-quotes': ['off'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'line-comment-position': ['off'],
    'linebreak-style': ['error', 'windows'],
    'lines-around-comment': ['off'],
    'lines-around-directive': ['off'],
    'max-depth': ['error', 3],
    'max-len': ['error', {
      code: 80,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }],
    'max-lines': ['error', {
      max: 463, // 200 ? 300
      skipBlankLines: true,
      skipComments: true
    }],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': ['error', 30],
    'max-statements-per-line': ['error', {max: 3}],
    'multiline-ternary': ['off'],
    'new-cap': ['error', {
      capIsNewExceptions: [
        'GM_getValue',
        'GM_setValue',
        'GM_listValues',
        'Deferred',
        'DataTable'
      ]
    }],
    'new-parens': ['error'],
    'newline-after-var': ['off'],
    'newline-before-return': ['off'],
    'newline-per-chained-call': ['off'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['off'],
    'no-inline-comments': ['off'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': ['off'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 1
    }],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': ['off'],
    'no-tabs': ['error'],
    'no-ternary': ['error'],
    'no-trailing-spaces': ['error'],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': ['error', {multiline: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error',
      {allowMultiplePropertiesPerLine: true}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['off'],
    'quote-props': ['error', 'as-needed', {keywords: true, numbers: true}],
    quotes: ['error', 'single'],
    'require-jsdoc': ['off'],
    semi: ['error'],
    'semi-spacing': ['error'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['warn', 'always', {
      line: {
        markers: ['#if'],
        exceptions: ['#endif']
      }
    }],
    'template-tag-spacing': ['off'],
    'unicode-bom': ['error'],
    'wrap-regex': ['off'],

    /*  ECMAScript 6  */
    'no-duplicate-imports': ['error', {includeExports: true}],
    'sort-imports': ['error', {
      memberSyntaxSortOrder: [
        'none', 'single', 'multiple', 'all'
      ]
    }],
  }
};
