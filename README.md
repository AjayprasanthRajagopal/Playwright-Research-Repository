# Playwright-Research-Repository
 
## To setup Playwright in Local
<details>
 <summary>Installation Guide</summary>
 
## Installing VS Code Editor for Scripting/Editing (Any Editors we can use)
 - Download the VS Code Editor from here for both Mac and Windows

## Installing the NodeJs
 - Download the NodeJs from here for both Mac and Windows

## Installing Playwright Test extension for VS Code
 - Filter Playwright Test for VSCode extension from Microsoft and install

## Setting up the Project
- Clone the Playwright-Research-Repository into the local machine
- Launch VS Code editor and open the cloned project
- Click on the Terminal tab and click New Terminal
- Run the following commands to install the node modules and playwright 
```bash
npm install
```
- If you are still seeing issue trying to run the test, you might need to reinstall playwright or add Playwright Test for VSCode Extention
```bash
npx playwright install
```
</details>


# To run the testcase
<details>
 <summary>To run suite level scripts</summary>
  
```bash
 cross-env SUITE=shadowDom npx playwright test 
```
 
```bash
 npm run shadowDom
```
</details>

## Headless manner 
### To run Tests in windows 
* Each test file does not need to pass once the test environment has been configured on the Windows system *
 ```bash
 cross-env SUITE= <suite> npx playwright test <spec file name>
 
 EX: cross-env SUITE=uiActions npx playwright test alert
 ```
 
# To view the HTML Test Reports
```bash
npx playwright show-report
```

# Download the upload artifacts
Navigate to particular runner and download. Rentention days defined for this repository is 30
