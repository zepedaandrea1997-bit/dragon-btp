import type {SuiteConfiguration} from "sap/ui/test/starter/config";
export default {
	name: "QUnit test suite for the UI5 Application: com.dragonproj.helloworld",
	defaults: {
		page: "ui5://test-resources/com/dragonproj/helloworld/Test.qunit.html?testsuite={suite}&test={name}",
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
			only: ["com/dragonproj/helloworld/"],
			never: ["test-resources/com/dragonproj/helloworld/"]
		},
		loader: {
			paths: {
				"com/dragonproj/helloworld": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.dragonproj.helloworld"
		},
		"integration/opaTests": {
			title: "Integration tests for com.dragonproj.helloworld"
		}
	}
} satisfies SuiteConfiguration;
