import type {SuiteConfiguration} from "sap/ui/test/starter/config";
export default {
	name: "QUnit test suite for the UI5 Application: com.dragonproj.excelupload",
	defaults: {
		page: "ui5://test-resources/com/dragonproj/excelupload/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: ["com/dragonproj/excelupload/"],
			never: ["test-resources/com/dragonproj/excelupload/"]
		},
		loader: {
			paths: {
				"com/dragonproj/excelupload": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.dragonproj.excelupload"
		},
		"integration/opaTests": {
			title: "Integration tests for com.dragonproj.excelupload"
		}
	}
} satisfies SuiteConfiguration;
