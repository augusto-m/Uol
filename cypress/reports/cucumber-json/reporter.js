import reporter from '**/../../node_modules/cucumber-html-reporter'

// const reporter = require ('cucumber-html-reporter')


const options = {
    theme: 'bootstrap',
    jsonFile: 'test/report/cucumber_report.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

reporter.generate(options)