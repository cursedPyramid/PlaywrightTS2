# 🧪 Playwright Typescript Fundamentals

A learning and reference repository containing the Playwright TypeScript examples from the course.

The repository contains the course project files, test examples, Playwright configuration, setup scripts and supporting application files used by the exercises.

## 🧰 Prerequisites

- Windows
- VSCode (or other IDE)
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Repository structure

The project is organised into module-specific examples:

- `/m2-setup/`
- `/m3-core-concepts/`
- `/m4-locators/`
- `/m5-basic-actions/`
- `/m6-advanced-actions/`
- `/m7-test-runner/`
- `/m8-configuration/`
- `/m9-networking/`

Additional project files include Playwright configuration, setup scripts, supporting application code and test data.

## Course modules

### Module 2 – Setup

Introduces the Playwright project and initial setup.

Topics represented in the project include:

- Browser support
- Playwright setup and verification

### Module 3 – Core Concepts

Introduces the fundamental building blocks of Playwright tests.

Topics include:

- The Playwright test runner
- Fixtures
- Assertions

### Module 4 – Locators

Covers locating elements in Playwright.

Examples include:

- Recommended locators
- Generic locators
- Locator filters
- Other locator techniques

### Module 5 – Basic Actions

Covers common interactions and assertions.

Examples include:

- Navigation
- Filling fields
- Clicking elements
- Checkboxes
- Select options
- Assertions

### Module 6 – Advanced Actions

Introduces more advanced browser interactions.

Examples include:

- Dialogs
- Console messages
- Cookies
- Browser storage
- Downloads and uploads
- Screenshots

### Module 7 – Test Runner

Covers features for structuring and controlling test execution.

Examples include:

- Test annotations
- `test.describe()`
- Setup and cleanup
- Parameterisation
- Parallel execution

### Module 8 – Configuration

Covers Playwright configuration at different levels.

Examples include:

- Test configuration
- Group configuration
- Global configuration
- Browser and context configuration
- Device configuration
- Geolocation
- Projects

### Module 9 – Networking

Introduces Playwright's networking capabilities.

Examples include:

- Requests and responses
- Monitoring HTTP traffic
- HTTP authentication
- Route interception

## 🧪 Running the project

Install the project dependencies using the package manager and scripts defined in `package.json`.

The Playwright tests can then be run with the standard Playwright test runner:

```bash
npx playwright test
```

For interactive execution, Playwright's UI mode can be used:

```bash
npx playwright test --ui
```

## Playwright configuration

The project includes `playwright.config.ts` files/configuration used by the course examples.

Configuration examples cover areas such as:

- Test directories
- Timeouts
- Retries
- Base URLs
- Browser projects
- Device configuration
- Trace collection
- Screenshots
- Video recording
- Parallel execution

## Purpose

This repository is intended as a **learning and reference project**.

The examples progress from basic Playwright setup and core concepts through locators, actions, test-runner features, configuration and networking.

It can therefore be used both while following the course and later as a quick reference when revisiting a particular Playwright feature.

## Notes

The code in this repository is course material and should be considered demonstration/learning code rather than a production test framework.

## 🔧 Technologies Used

- **TypeScript v7.0.2**
- **Playwright v1.62.1**
- **Express v5.2.1**

## 🌐 Credit Association website

The files for the **Credit Association** website can be found under the `src` folder.

This is accessible at [localhost:3000](http://localhost:3000/) by running the `npm start` command from the **Terminal**.

## 👩‍💻 About the author

See my profile.
🌐 [LinkedIn](https://www.linkedin.com/in/marcus-priddey/)
