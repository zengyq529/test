require('babel-register')

module.exports = {
    src_folders: ['test/e2e/specs/'],
    output_folder: 'test/e2e/reports',

    //  custom_assertions_path: ['test/e2e/custom-assertions'],
    custom_commands_path: ['node_modules/nightwatch-helpers/commands'],
    custom_assertions_path: ['node_modules/nightwatch-helpers/assertions'],
    selenium: {
        start_process: true,
        server_path: require('selenium-server').path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path
        }
    },

    test_settings: {

        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            globals: {
                devServerURL: 'http://localhost/fortest'
            },
            //exclude : ["test/e2e/specs/*out.js"],      //放在这里哦
            filter:"test/e2e/specs/*.js" //过滤
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}
