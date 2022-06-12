module.exports = {
    apps: [
        {
            name: 'ent-service-mobile',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: 'nuxt',
            args: 'start'
        }
    ]
};
