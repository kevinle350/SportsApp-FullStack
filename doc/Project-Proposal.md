# PPRS (Play-by-Play Recommendation System)

## Project Summary

Our project is a novel recommendation web-based tool that acts as an entry point for individuals looking to begin following professional football. The application's overall functionality lies in analyzing user preferences to recommend “ideal games” for them to watch or attend.

### Project Description

Ideally, our project would provide a form for users to indicate the aspects of football they prefer. Examples include the level of score differential, preference for a pass vs. run plays, the choice for offensive or defensive game scripts, and favorite teams. Once the user input is collected and parsed, our application would employ an algorithm to recommend a set of games for the user to watch based on past play-by-play data stored within the database. Afterward, we will return the results to the user using dashboard metrics for summary card styles to serve as at-a-glance results with the option to see detailed results per result.

### Usefulness

Our chosen application is helpful because it can help introduce people who have never watched sports and get into watching sports based on their preferences. A specific example is for people who like betting but have not watched many sports; they can use our application to watch particular games based on their preferences which they can filter out by their sports betting. This can help people gain a new hobby or even help people with sports betting. We don’t think there is any product/application out there right now that allows users (ex: new users) to get into watching sports based on their preferences. The closest applications out there that are remotely related are sports betting pages such as Draftkings, FanDuel, and Barstool, where they come up with their system of points for betting, like how we are coming up with our system to match up categories users are interested in.

### Realness
Our data comes from [Github](https://github.com/ryurko/nflscrapR-data/blob/master/play_by_play_data/regular_season/reg_pbp_2019.csv) by a CMU Assistant Teaching Professor, [Ron Urko](https://www.stat.cmu.edu/~ryurko/), and the data is NFL statistics that include play-by-play, game dates, scores, yards per play, and players' names from the 2019 regular season. Another dataset will be [Game table](https://github.com/ryurko/nflscrapR-data/blob/master/games_data/regular_season/reg_games_2019.csv). 

### Functionality

The primary functions of our web application will consist of having game-watching preferences (user input) where we can recommend games to those who prefer offensive-dominated games and defensive-dominated games, run-after-catch statistics, kicker reliability (field goal accuracy & attempts), and yards of separation. For Offensive stats, we may include running, passing, large plays, long drives, YPC, run after the catch, and WR Yard-per-carry (YPC). For defensive stats, we can include interceptions (aggressive), conservative defensive, zone coverage, man coverage, big play, pass defense, tackling proficiency, run after catch statistics, YPC, and how far they are from their defenders. An extra aspect we can include could be playcalling metrics based on the coach. Extra things to account for would be unique, but more time features we would like to add are Defensive rating changes per team. Division games have higher priority. Rivalries(ties into division games, most likely. We can use these extra ratings to create different offensive and defensive ratings or a ranking system based on all the stats available.

### A low-fidelity UI mockup

​Our applications User Interface will use a form-based web page as the initial starting point, and then once we take user inputs and it runs through our processes, we will return data represented in dashboard metrics for at-a-glance information such as win/loss percentage, stats per play based off the team, verdict to watch or attend a game, etc. 

- see *Project-1-UI-mockup.pdf* for a low-fidelity UI mockup

![Project1-Mockup](/doc/Project-1-UI-mockup.pdf)

### Project work distribution:

In terms of User Interface and User Experience, Mario will be responsible for the design and implementation of the front-end of the application. Kevin will be responsible for the design and implementation of the back-end of the application. Vivek and Sathvik will be responsible for the design and implementation of the database and the data processing. Mario and Kevin will be responsible for the design and implementation of the data visualization. In terms of technology, we will be using Python, Flask, and SQL for the back-end, HTML, CSS, and JavaScript for the front-end, and possibly Tableau for the data visualization. We will be using GitHub for version control and project management.
