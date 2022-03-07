module.exports = function (plop) {
  plop.setGenerator('page', {
    description: 'application page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'pages/templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.ts',
        templateFile: 'pages/templates/styles.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/{{camelCase name}}.spec.tsx',
        templateFile: 'pages/templates/tests.tsx.hbs',
      },
    ],
  });
};
