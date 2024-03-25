import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const appTheme: CustomThemeConfig = {
    name: 'app-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #3e4e70 
		"--color-primary-50": "226 228 234", // #e2e4ea
		"--color-primary-100": "216 220 226", // #d8dce2
		"--color-primary-200": "207 211 219", // #cfd3db
		"--color-primary-300": "178 184 198", // #b2b8c6
		"--color-primary-400": "120 131 155", // #78839b
		"--color-primary-500": "62 78 112", // #3e4e70
		"--color-primary-600": "56 70 101", // #384665
		"--color-primary-700": "47 59 84", // #2f3b54
		"--color-primary-800": "37 47 67", // #252f43
		"--color-primary-900": "30 38 55", // #1e2637
		// secondary | #7c87a2 
		"--color-secondary-50": "235 237 241", // #ebedf1
		"--color-secondary-100": "229 231 236", // #e5e7ec
		"--color-secondary-200": "222 225 232", // #dee1e8
		"--color-secondary-300": "203 207 218", // #cbcfda
		"--color-secondary-400": "163 171 190", // #a3abbe
		"--color-secondary-500": "124 135 162", // #7c87a2
		"--color-secondary-600": "112 122 146", // #707a92
		"--color-secondary-700": "93 101 122", // #5d657a
		"--color-secondary-800": "74 81 97", // #4a5161
		"--color-secondary-900": "61 66 79", // #3d424f
		// tertiary | #e6c90f 
		"--color-tertiary-50": "251 247 219", // #fbf7db
		"--color-tertiary-100": "250 244 207", // #faf4cf
		"--color-tertiary-200": "249 242 195", // #f9f2c3
		"--color-tertiary-300": "245 233 159", // #f5e99f
		"--color-tertiary-400": "238 217 87", // #eed957
		"--color-tertiary-500": "230 201 15", // #e6c90f
		"--color-tertiary-600": "207 181 14", // #cfb50e
		"--color-tertiary-700": "173 151 11", // #ad970b
		"--color-tertiary-800": "138 121 9", // #8a7909
		"--color-tertiary-900": "113 98 7", // #716207
		// success | #95c350 
		"--color-success-50": "239 246 229", // #eff6e5
		"--color-success-100": "234 243 220", // #eaf3dc
		"--color-success-200": "229 240 211", // #e5f0d3
		"--color-success-300": "213 231 185", // #d5e7b9
		"--color-success-400": "181 213 133", // #b5d585
		"--color-success-500": "149 195 80", // #95c350
		"--color-success-600": "134 176 72", // #86b048
		"--color-success-700": "112 146 60", // #70923c
		"--color-success-800": "89 117 48", // #597530
		"--color-success-900": "73 96 39", // #496027
		// warning | #e6bf4c 
		"--color-warning-50": "251 245 228", // #fbf5e4
		"--color-warning-100": "250 242 219", // #faf2db
		"--color-warning-200": "249 239 210", // #f9efd2
		"--color-warning-300": "245 229 183", // #f5e5b7
		"--color-warning-400": "238 210 130", // #eed282
		"--color-warning-500": "230 191 76", // #e6bf4c
		"--color-warning-600": "207 172 68", // #cfac44
		"--color-warning-700": "173 143 57", // #ad8f39
		"--color-warning-800": "138 115 46", // #8a732e
		"--color-warning-900": "113 94 37", // #715e25
		// error | #dc5050 
		"--color-error-50": "250 229 229", // #fae5e5
		"--color-error-100": "248 220 220", // #f8dcdc
		"--color-error-200": "246 211 211", // #f6d3d3
		"--color-error-300": "241 185 185", // #f1b9b9
		"--color-error-400": "231 133 133", // #e78585
		"--color-error-500": "220 80 80", // #dc5050
		"--color-error-600": "198 72 72", // #c64848
		"--color-error-700": "165 60 60", // #a53c3c
		"--color-error-800": "132 48 48", // #843030
		"--color-error-900": "108 39 39", // #6c2727
		// surface | #ced2df 
		"--color-surface-50": "248 248 250", // #f8f8fa
		"--color-surface-100": "245 246 249", // #f5f6f9
		"--color-surface-200": "243 244 247", // #f3f4f7
		"--color-surface-300": "235 237 242", // #ebedf2
		"--color-surface-400": "221 224 233", // #dde0e9
		"--color-surface-500": "206 210 223", // #ced2df
		"--color-surface-600": "185 189 201", // #b9bdc9
		"--color-surface-700": "155 158 167", // #9b9ea7
		"--color-surface-800": "124 126 134", // #7c7e86
		"--color-surface-900": "101 103 109", // #65676d
	}
}