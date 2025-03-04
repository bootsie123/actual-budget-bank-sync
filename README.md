# Actual Budget Bank Sync

Automatically synchronizes bank transactions for Actual Budget

# Actual Budget Bank Sync

[![Docker Publish](https://github.com/bootsie123/actual-budget-bank-sync/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/bootsie123/actual-budget-bank-sync/actions/workflows/docker-publish.yml)
[![Version](https://img.shields.io/github/package-json/v/bootsie123/actual-budget-bank-sync)](https://github.com/bootsie123/actual-budget-bank-sync/blob/main/package.json)
[![License](https://img.shields.io/github/license/bootsie123/actual-budget-bank-sync)](https://github.com/bootsie123/actual-budget-bank-sync/blob/main/LICENSE)

Automatically synchronizes bank transactions for Actual Budget. Simply install the application locally or with [Docker Compose](https://docs.docker.com/compose) and configure the settings to your liking and forget about it!

## Installation

### Local

First, clone the repository using [git](https://git-scm.com/) and then use [npm](https://www.npmjs.com/) to install the necessary node modules. If [Node.js](https://nodejs.org/) is not already installed, please do so before running npm.

```bash
# Clone the repository
git clone https://github.com/bootsie123/actual-budget-bank-sync.git

# Enter the directory
cd actual-budget-bank-sync

# Install the dependencies
npm install

# Copy example .env file
cp .example.env .env

# Configure the required environment variables
nano .env
```

### Docker

Alternatively, you can install and configure the application with [Docker Compose](https://docs.docker.com/compose/).

```bash
# Clone the repository
git clone https://github.com/bootsie123/actual-budget-bank-sync.git

# Enter the directory
cd actual-budget-bank-sync

# Configure the required environment variables
nano compose.yml
```

## Configuration

In order to run the app, the following configuration options must be set in the `.env` file or within `compose.yml`.

| Name            | Type    | Default      | Description                                                                                   |
| --------------- | ------- | ------------ | --------------------------------------------------------------------------------------------- |
| SERVER_URL      | String  |              | URL of your Actual Budget server                                                              |
| PASSWORD        | String  |              | Password for your Actual Budget server                                                        |
| SYNC_ID         | String  |              | The synchronization ID. This can be gathered from Settings → Show advanced settings → Sync ID |
| SCHEDULE        | String  | 0 0 \* \* \* | The syncing schedule in [cron](https://en.wikipedia.org/wiki/Cron) format                     |
| RUN_IMMEDIATELY | Boolean | false        | Determines if a sync job should run immediately after the application starts                  |

## Usage

### Local

To start the application locally simply run:

```bash
npm run build

npm start
```

This will start the server and schedule sync jobs.

### Docker

To start the application with Docker, simply run:

```bash
docker compose up -d
```

#### Logging

To see all logs, simply run:

```bash
docker compose logs -f
```

## Contributing

Pull requests are welcome. Any changes are appreciated!

## License

This project is licensed under the [ISC License](https://choosealicense.com/licenses/isc/)
