var exec = require('child_process').exec;
var co = require('co');
var ora = require('ora');
var path = require('path');
var chalk = require('chalk');

module.exports = function(projectPath) {
    var cmdStr = `git clone https://github.com/kobestyle/vue-template ${projectPath} && cd ${projectPath} && rm -rf .git`
    var spinner = ora('downloading').start();
    exec(cmdStr, function(error, stdout, stderr) {
        spinner.stop();
        console.log('  To get start:')
        console.log()
        console.log('  Because this scaffold use one private package so you need to install rnpm.  More info view http://192.168.52.102:7002/')
        console.log()
        console.log(`    cd ${path.parse(projectPath).name} && rnpm install`)
        console.log()
        console.log('    npm run dev')
        process.exit();
    })
}
