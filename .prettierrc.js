export default {
    singleQuote: true,
    bracketSameLine: false,
    tabWidth: 4,
    printWidth: 100,
    bracketSpacing: true,
    trailingComma: 'all',
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
