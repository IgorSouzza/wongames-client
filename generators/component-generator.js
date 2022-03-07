module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'components/templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'components/templates/styles.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{camelCase name}}.spec.tsx',
        templateFile: 'components/templates/tests.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{camelCase name}}.stories.tsx',
        templateFile: 'components/templates/stories.tsx.hbs',
      },
    ],
  });
};
