const fs = require('fs')
const path = require('path')
const Table = require('cli-table3')

// Read the ESLint report
const reportPath = path.join(__dirname, 'eslint-report.json')
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))

// Initialize an object to store error counts
const errorCounts = {}
const warningCounts = {}

// Iterate through the results
report.forEach(file => {
	file.messages.forEach(message => {
		const ruleId = message.ruleId
		if (ruleId) {
			if (message.severity === 2) { // Error
				if (!errorCounts[ruleId]) {
					errorCounts[ruleId] = 0
				}
				errorCounts[ruleId]++
			} else if (message.severity === 1) { // Warning
				if (!warningCounts[ruleId]) {
					warningCounts[ruleId] = 0
				}
				warningCounts[ruleId]++
			}
		}
	})
})

// Create a table to display the error counts
const errorTable = new Table({
	head: ['Rule ID', 'Error Count'],
	colWidths: [50, 20]
})

// Sort the error counts by count in descending order
const sortedErrorCounts = Object.entries(errorCounts).sort((a, b) => b[1] - a[1])

// Populate the table with error counts
sortedErrorCounts.forEach(([ruleId, count]) => {
	errorTable.push([ruleId, count])
})

// Create a table to display the warning counts
const warningTable = new Table({
	head: ['Rule ID', 'Warning Count'],
	colWidths: [50, 20]
})

// Sort the warning counts by count in descending order
const sortedWarningCounts = Object.entries(warningCounts).sort((a, b) => b[1] - a[1])

sortedWarningCounts.forEach(([ruleId, count]) => {
	warningTable.push([ruleId, count])
})

// Output the formatted table
console.log('ESLint Error Counts:')
console.log(errorTable.toString())
console.log('\n\n\n')
console.log('ESLint Warning Counts:')
console.log(warningTable.toString())