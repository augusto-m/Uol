const reporter = require ('cucumber-html-reporter')


const options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

reporter.generate(options)