# CountriesApp

CountriesApp is a web application that displays information about countries, allows users to register and login to the app, create a list of favorite countries, and view detailed information and weather forecast for each country. The app is built using ReactJS, Redux, Firebase, Bootstrap, and APIs from restcountries.com and openweathermap.org.

## CountriesApp Screenshot

### Getting Started

#### Installation

To install CountriesApp, follow these steps:

- Clone this repository to your local machine: git clone https://github.com/CodeLaMat/countries_app_Redux.git
- Navigate to the project directory: cd countries_app_Redux
- Install the dependencies: npm install
- Start the development server: npm start
- Open the app in your browser: http://localhost:3000

### API Keys

CountriesApp uses the following APIs:

### Firebase Authentication

- Firebase Realtime Database
- Restcountries API
- OpenWeatherMap API

You will need to obtain the necessary API keys and add them to the .env file in order for the app to function properly. You can find the necessary API keys in the respective documentation for each API.

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key

```

### CountriesApp allows you to:

- View a list of countries with basic information such as flag, name, population, and region.
- Register and login to the app to access the favorite countries feature.
- Create a list of favorite countries.
- View detailed information about each country such as capital, languages, and currencies.
- View a 5-day weather forecast for each country.

### To use CountriesApp:

- Visit the home page to view the list of countries.
- Click on a country to view detailed information and weather forecast.
- - Register and login to access the favorite countries feature.
    Click on the heart icon next to a country to add it to your favorite list.
- Visit the favorites page to view your favorite countries.

### Contributing

#### If you would like to contribute to CountriesApp, please follow these steps:

- Fork the repository
- Create a new branch for your changes: git checkout -b my-new-feature
- Make your changes and commit them: git commit -am 'Add some feature'
- Push your changes to your fork: git push origin my-new-feature
- Submit a pull request

### License

CountriesApp is licensed under the MIT License.

### Acknowledgments

#### CountriesApp was built using the following libraries and tools:

- ReactJS
- Redux
- Firebase
- Bootstrap
- Restcountries API
- OpenWeatherMap API
