
## About this task

This is a short interview project designed to test your knowledge of Hooks, API requests and component creation.

First thing you should do is to go through this ReadMe file and ask any questions that come to mind in regards to the task at hand.

Checklist of to-do tasks:
  - You need to make a /GET call to the following API: http://www.omdbapi.com/?apikey=${config.API_KEY}&s=${movieTitle}
    - Where the API_KEY is stored in the config file, and movieTitle is the value from the search Bar
    - This call should only be triggered once the "Search" button has been pressed
    - Use any tool you feel most comfortable with (Axios is already installed, but if you wish to use fetch or something similar, feel free to do so)
    - Feel free to log the response data to see what is returned
    - You now need to display the data you receive from the API on the screen, using the pre-made MovieCard component

  - Once that is completed, you will need to open the Modal component to show more data on button click (MovieCard component)
    - Once the button is triggered make a /GET call to the following API: http://www.omdbapi.com/?apikey=${config.API_KEY}&i=${imdbID}
    - Where the API_KEY is stored in the config file, and imdbID is one of the values from the first /GET call
    - Feel free to log the response data to see what is returned
    - After that, populate the modal with whichever data you see fit from the API response
