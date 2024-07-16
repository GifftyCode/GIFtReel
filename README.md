# GIFtReel Movie Database

GIFtReel is a React-based web application that utilizes the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch and display movie information. It allows users to explore various movies, view details, and search for specific titles.

## Features

- **Dynamic Movie Listing:** Fetches and displays movies based on categories such as now playing, popular, top-rated, and upcoming.
- **Detailed Movie Information:** Provides comprehensive details about each movie, including title, overview, genres, ratings, runtime, budget, revenue, release date, and IMDB link.
- **Search Functionality:** Enables users to search for movies by title.
- **Responsive Design:** Ensures a seamless experience across devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/GifftyCode/GIFtReel.git
   ```
2. Navigate into the project directory:
   ```
   cd GIFtReel
   ```
3. Install dependencies using npm:
   ```
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your TMDb API key:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```
5. Start the development server:
   ```
   npm start
   ```
6. Open your browser and visit `http://localhost:3000` to view the application.

## Components and Hooks

### Components

- **Card:** Displays individual movie cards with title, poster, and overview.
- **MovieDetail:** Shows detailed information about a specific movie.
- **PageNotFound:** Custom 404 page for handling invalid routes.
- **Search:** Component for searching movies based on user input.
- **Header and Footer:** Navigation and footer components for consistent layout.

### Custom Hooks

- **useFetch:** Custom hook for fetching data from the TMDb API based on provided endpoint and query term.
- **useTitle:** Hook to dynamically set the document title based on the current page or movie title.
- **ScrollToTop:** Scrolls the window to the top when navigating between pages.

## Usage

- Navigate through different sections using the navigation links (Home, Popular, Top Rated, Upcoming).
- Click on a movie card to view detailed information about the movie.
- Use the search bar to find movies by title.

## Technologies Used

- **React:** Front-end library for building user interfaces.
- **React Router:** Declarative routing for React applications.
- **CSS (Tailwind CSS):** Utility-first CSS framework for styling components.
- **API Integration:** Fetching data from The Movie Database (TMDb) API.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests to suggest improvements or add new features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
