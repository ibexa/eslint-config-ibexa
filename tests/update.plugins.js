const { execSync } = require('child_process');
const { writeFileSync } = require('fs');

const sortRules = ([keyA], [keyB]) => {
    if (keyA < keyB) {
        return -1;
    } else if (keyA > keyB) {
        return 1;
    }

    return 0;
}

const scriptOutput = execSync('node_modules/.bin/eslint --config index.js --print-config tests/dummy.js', { encoding: 'utf-8' });
const wholeConfig = JSON.parse(scriptOutput);
const rulesArray = Object.entries(wholeConfig.rules);
const newPluginsConfig = rulesArray.sort(sortRules);
const stringToSave = JSON.stringify(newPluginsConfig, null, 4);

writeFileSync('./tests/js.config.json', stringToSave);

console.log('\x1b[32m%s\x1b[0m', '\nConfig updated!\n');
