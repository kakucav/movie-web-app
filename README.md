Steps to run project:

1. Checkout this repo

2. Navigate to project root folder in terminal

3. Run "npm i" command - It will install all dependancies from package.json file

4. Create .env file in root of the project (has to be created before running build script)

5. Paste next environment variables in .env file (you can use your own TMDB access token):
   REACT_APP_TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRlODI1N2E4OGY3OWQ3Y2VjMzM3OWM2YzliMWM4NyIsInN1YiI6IjY2Mzk0NGMxMmEwOWJjMDEyYzVhYjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S0gGz4aalBTcKD7E_CfVrBG_3jYXSFtePcnJKkHbJEA
   REACT_APP_TMDB_API_BASE_URL=https://api.themoviedb.org/3
   REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p

6. Run "npm run build" command - Builds the app for production to the build folder

7. Run "npm i -g serve" command (Skip if already have installed)

8. Run "serve -s build" to serve app build

App should be running on port 3000. (http://localhost:3000)
