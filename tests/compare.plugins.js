const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const sortRules = ([keyA], [keyB]) => {
    if (keyA < keyB) {
        return -1;
    } else if (keyA > keyB) {
        return 1;
    }

    return 0;
}

let oldPluginsConfigPlain;

try {
    oldPluginsConfigPlain = readFileSync('./tests/js.config.json');
} catch(exception) {
    oldPluginsConfigPlain = '[[ "no-useless-escape", [ "warn" ] ]]';
}

const oldPluginsConfig = JSON.parse(oldPluginsConfigPlain);

const scriptOutput = execSync('node_modules/.bin/eslint --config index.js --print-config tests/dummy.js', { encoding: 'utf-8' });
const wholeConfig = JSON.parse(scriptOutput);
const rulesArray = Object.entries(wholeConfig.rules);
const newPluginsConfig = rulesArray.sort(sortRules);
const addedPlugins = newPluginsConfig.filter(([newKey]) => !oldPluginsConfig.some(([oldKey]) => oldKey === newKey));
const removedPlugins = oldPluginsConfig.filter(([oldKey]) => !newPluginsConfig.some(([newKey]) => oldKey === newKey));
const modifiedPlugins = newPluginsConfig.filter(([newKey, newConfig]) => {
    const oldConfigRule = oldPluginsConfig.find(([oldKey]) => oldKey === newKey);

    if (!oldConfigRule) {
        return false;
    }

    return JSON.stringify(oldConfigRule[1]) !== JSON.stringify(newConfig);
});

if (addedPlugins.length === 0 && removedPlugins.length === 0 && modifiedPlugins.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', '\nNothing changed!\n');
} else {
    if (addedPlugins.length) {
        console.log('\x1b[31m%s\x1b[0m', '\nNew plugins:');
        console.log(addedPlugins);
    }

    if (removedPlugins.length) {
        console.log('\x1b[31m%s\x1b[0m', '\nRemoved plugins:');
        console.log(removedPlugins);
    }

    if (modifiedPlugins.length) {
        console.log('\x1b[31m%s\x1b[0m', '\nModified plugins:');
        console.log(modifiedPlugins);
    }

    console.log('');
}
