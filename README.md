# My Golf Tracker

**Created By:**
- Matthew P. Gillis (@Gillista139)

This app is designed to allow users to track their golf progress. Users will have the ability to search for the golf courses they play and input their scores for each round of golf! Over time, as a users rounds accumulate, they will be able to see their scores improve! Golf is a hard sport! Sometimes we forget that and need a little reminding that we are out there having fun and truly are improving!

You will be able to navigate to course pages and see the list of scorecards you have added to that course. When you are signed in, there will be forms that allow you to add new courses to the list as well as post your scorecards. Required DATA for courses are the course name, course par, and the course's total number of holes. Required DATA for scorecards are the date played and tee color. Optional DATA includes the distance, par, and score for each hole up to eighteen total.

This application was created as part of the Launch Academy curriculum. All students undergo two weeks of group projects and then two weeks to design and build their own "Breakable Toy" on their own.

## Running the App

My Golf Tracker was created using Node 14.15. Please ensure you have the proper packages installed using yarn install.

The database is designed to work with Postgres/SQL.

> $ createdb my-golf-tracker_development

Run the following commands in your server folder to create the database:

> $ yarn migrate:latest

> $ yarn db:seed

To run the localhost:3000 website, make sure you are in your root file and run:

> $ yarn run dev

The home page will automatically render when you navigate to your https://localhost:3000

### Licenses:

This project was created as a portfolio piece for Launch Academy. This project is licensed under the terms of the MIT license.

### Special Thanks:

Thanks to the Experience Engineers at Launch Academy for their guidance through this project!

Launch BOS35!
