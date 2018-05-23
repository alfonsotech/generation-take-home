Generation Take-Home Coding Challenge
=================================
This is a take-home coding challenge used to help evaluate candidates
interested in joining the team at Generation.
The goal is for candidates to complete the coding challenge before the
in-person interview so that we can discuss the solution together.
In cases where this is not possible, we may discuss the solution together
over a followup phone call.

![app-image.png](https://ipfs.busy.org/ipfs/Qmf9B8htdzTRVbrF8iE5wRGxkbH1rAhjMdqAHjr9LhHanJ)

### Notes on my process
1. After I finished, I took a look at some other forks/solutions, and I'm not sure if I interpreted the assignment correctly. 
2. I decided not to create a seperate component for the stores becuase it was such a small peice of code. Here is a more elaborate React app I recently built: [bPhil](https://github.com/alfonsotech/bphil)
3. I tend to keep things as simple or complicated as is needed to do the job. This is the simplest solution I came up with.
4. The lifecycle ComponentDidMount has two axios calls, and that is a little messy. I tried to implement an axios.all(func1, func2) and axios.spread(), but couldn't get it to work, so I went back to the longer, messier, naive solution.
5. I didn't do much styling, as you can see. I could not get external stylesheets to work (to do with how the ap is being compiled?) and doing in-line and compoment styles is uncomfortable and messy, so I kept this to a minimum.
6. The most challenging part of this project was getting markers on the map. I used two different npm packages and ran into trouble with both. I finally found a 5 minute video (linked below under "Resources used") that flashed some useful code on the screen, so I took a screenshot and that helped me to figure out how to get it working.
7. The most interesting part of this project was running into an asynch (I think this is the issue!) problem that I was not able to resolve. I cut the number of stores in the .json file to 120 lines in order to get it to work.
8. I began to implement testing and didn't finish this. I've not implemented testing in a React app before but have used Mocha/Chai to test javascript when working on datastructures here: [core-data-structures](https://github.com/alfonsotech/core-data-structures) 

Thanks for reading!

### Technologies used
[Google Maps API](https://developers.google.com/maps/documentation/javascript/?hl=es-419)

[react-google-maps](https://www.npmjs.com/package/react-google-maps)

[react-google-geocoder](https://www.npmjs.com/package/react-google-geocoder)

[axios](https://www.npmjs.com/package/axios)

### Resources used
[stackvoerflow: how-to-convert-an-address-to-a-latitude-longitude](https://stackoverflow.com/questions/98449/how-to-convert-an-address-to-a-latitude-longitude)

[How to Make a Google Map with React.js? - A Step-by-Step Tutorial](https://www.youtube.com/watch?v=LRptz31H0vI)


### What should you expect?

We expect that the exercise will take anywhere from 2-5 hours to complete
depending on your familiarity with React and with the GoogleMaps API.

We understand that this is a significant amount of time so we really appreciate
the effort you put into it.

### How should you submit your code?

Any way you want - email us a zip, a link to your personal repo, etc.
Please include a couple screenshots of the app.

### What if I don't know React?

Feel free to submit a solution that meets the requirements, but without using React.
React is an important part of our stack and you'll be using it every day so it's important
that you're excited to learn it! If you don't know React and you're able to learn the basics
in order to complete the exercise, we'll be impressed :)

<a href="https://tylermcginnis.com/react-js-tutorial-pt-1-a-comprehensive-guide-to-building-apps-with-react-js-8ce321b125ba#.h5n3iisi4">Here's a great React tutorial</a>

<a href="http://courses.reactjsprogram.com/courses/reactjsfundamentals">This one is also great.</a>

### How do you start?

Clone the repo on your computer

Run
```
npm install
npm start
open http://localhost:3000
```
Read the intro and next steps on localhost:3000
Edit `src/YourComponent.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### What do we look for?

* **Correctness**: does the application do what was asked (e.g., all the user stories are complete)? If there is anything missing, does the README explain why it is missing?
* **Code quality**: is the code simple, easy to understand, and maintainable?  Are there any code smells or other red flags? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
* **Testing**: Are there some unit and some integration tests?
	* We're not looking for full coverage (given time constraint) but just trying to get a feel for your testing skills.
* **UX**:  Is the web interface understandable and pleasing to use? Is it responsive to various screen sizes, and fast to load?
* **Technical choices**: do choices of libraries, databases, architecture etc. seem appropriate for the chosen application?

### Source

This boilerplate project is a mirror plus a few additions from gaearon's react boilerplate (https://github.com/gaearon/react-hot-boilerplate)
