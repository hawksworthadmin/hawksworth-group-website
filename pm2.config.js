module.exports = {
    apps: [
        {
            name: 'group',
            script: 'npm',
            args: 'start',
            exec_mode: 'cluster',
            instances: 'max',
        },
    ],
};
