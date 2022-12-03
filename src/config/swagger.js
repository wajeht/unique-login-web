import path from 'path';

export default {
  info: {
    title: 'Unique Login',
    description:
      'A simple over-engineered full-stack web application that spits out unique login credentials',
    contact: {
      name: 'API Support',
      url: 'https://github.com/wajeht/unique-login-web',
    },
    license: {
      name: 'GPL-V3.0',
      url: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    },
    version: '1.0.0',
  },
  baseDir: path.resolve(path.join(process.cwd(), 'src', 'api')),
  filesPattern: ['./**/*.router.js', './**/*.routes.js'],
  swaggerUIPath: '/api/docs',
  exposeSwaggerUI: true,
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
  multiple: {},
};
