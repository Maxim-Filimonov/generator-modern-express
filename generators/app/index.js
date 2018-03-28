'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the breathtaking ${chalk.red('generator-modern-express')} generator!`
      )
    );

    const prompts = [];
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const copy = (origin, destination) =>
      this.fs.copy(this.templatePath(origin), this.destinationPath(destination));
    copy('_package.json', 'package.json');
    copy('_.gitignore', '.gitignore');
    copy('server', 'server');
    copy('src', 'src');
    copy('.eslintrc.js', '.eslintrc.js');
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
