export {}

const expectedDefaultSettings = [
    'PROXY SETTINGS:\n-----------',
    'Node url: http://[::1]:7076',
    'Websocket url: ws://127.0.0.1:7078',
    'Http port: 9950',
    'Https port: 9951',
    'Request path: /proxy',
    'Use authentication: false',
    'Use slow down: false',
    'Use rate limiter: false',
    'Use cached requests: false',
    'Use output limiter: false',
    'Use IP blacklist: false',
    'Use token system: false',
    'Use websocket system: false',
    'Use dPoW: false',
    'Use bPoW: false',
    'Disabled watch_work for process: false',
    'Listen on http: true',
    'Listen on https: false',
    'Allowed commands:\n-----------\n\n',
    'DDOS protection settings:\n\n',
    'Use cors. Any ORIGIN allowed',
    'Main log level: none'
]

test('log proxy settings with no config', () => {
    let settings: string[] = []
    process.env.OVERRIDE_USE_HTTP = 'false'
    process.env.CONFIG_SETTINGS = 'src/__test__/settings.json'
    require('../proxy').logSettings((setting: string) => settings.push(setting))
    expect(settings.length).toBe(23);
    expect(settings).toStrictEqual(expectedDefaultSettings)
});
