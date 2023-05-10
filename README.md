# [Copy & Paste 2.0](https://copy-paste.adaptable.app/)
This application is designed for 1 human being. That human being is Nicolette. 
<img width="1352" alt="Screenshot 2023-05-10 at 13 37 11" src="https://github.com/RainbowJM/human-centered-design-2223/assets/59873140/09c41090-76dc-46d7-a778-52fa8637ed7f">

## Table of Content
- [Concept](#concept)
- [Installation](#installation)
- [Design Principles](#design-principles)
- [User Needs](#user-needs)
- [Tests](#tests)

---
## Concept
The concept that was created is a site where the user can select, copy and paste using speech. The users talking is being listened to, so that the user can use it for commands.

## Installation
### Clone repo
```
git clone https://github.com/RainbowJM/human-centered-design-2223.git
```
For the installation of this application you will need the following:
- NPM
- NodeJS
- Express
- EJS
- Nodemon

### NPM and NodeJS
To install NPM, use
```
npm install
```
To install NodeJS on MacOS you can use the following command in your terminal
```
brew install node
```
After use the following command to set up you package.json
```
npm init
```
After doing this you will have to answer a few question so the set up, at the end you will get the following package.json file

```json
{
  "name": "human-centered-design-2223",
  "version": "1.0.0",
  "description": "The copy and paste machine 2.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/RainbowJM/human-centered-design-2223.git"
  },
  "keywords": [
    "copy",
    "paste",
    "table",
    "voice"
  ],
  "author": "Jevona Magdalena",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/RainbowJM/human-centered-design-2223/issues"
  },
  "homepage": "https://github.com/RainbowJM/human-centered-design-2223#readme",
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}

```

### Express
For the server side of the application, we used the library Express.
To install it you can use npm
```
npm install express
```
All the logic of the server you will find in the file `app.js`. 

### EJS
For this application the template engine that is used is EJS.
It will take care of the rendering of the static pages

To install the template you will have to do the following
```
npm install ejs
```
In the server you have to tell it where what template is used
This you do by adding the following in the `app.js`, the method `app.set()`
And for the static file like the stylesheet, img you have to use de static express middleware
Als you have to indicate that this is in the public file

```javascript
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));
```

### Nodemon
This package is life saver it makes it more easier, so that you don't have to restart your server each time you add/edit something in your code. It will take care of this for you.

By using the script options in the `package.json` you can make different script that you can then run by using a shorter command in your terminal

```javascript
 "scripts": {
    "start": "nodemon app.js",
    "dev": "node app.js"
},
```

## Server
To start the server use
```
npm start
```
The structure of the server you will find in the file `app.js`
``` javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

```
To import 'Express' you have to use 'require()' method

The localhost port in this case is `3000`, this is where the server will be running.
For all of this you have to have your application knowing where it should be listening to.
This part you can do by adding the following code in your `app.js`

```javascript
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Design Principles
### Study situation
<details><summary>Description</summary>Study situation is about studying the situation of one specific person, such as that person's physical capabilities and obstacles. 
By studying the situation, you will achieved the needed improvement in the design, among other things.</details>

- Minimum number of clicks required. Or non at all.

### Prioritize identity
<details><summary>Description</summary>Prioritize identity is about personalizing the product for one specific person, by listening carefully to the person in question and getting to know them better. 
By prioritizing identity, I achieved the design improvements below, among others.</details>

- Application is in Dutch
- Used light mode instead of dark mode.
- Color palette is based on the color of nature. Nature is something that Nicolette is fascinated about.

### Ignore conventions
<details><summary>Description</summary>Ignore conventions is about letting go of theoretical design rules, and prioritizing a design that works best for one specific person. 
By ignoring conventions, I achieved the design improvements below, among others.</details>

- Used speech recognition for copy and paste.

### Add nonsense
<details><summary>Description</summary>Add nonsense is about adding useless features or simply because it's fun. 
By adding nonsense, I achieved the below improvement in the design, among other things.</details>

- When you press the wrong key something will happen in the website.

## User Needs
### Who
Nicolette is a 76-year-old woman. Nicolette has limited use of her limbs, she can partially use her arm and legs. 
She uses a wheelchair to get around. She is trained geologist, and really love topics about climate change and nature. 
She worked at municipality of Amsterdam, where she organized many activities for disabled people.

### What
Nicolette has a laptop where she stores a lot of documents. 
To operate her laptop she uses a drawing tablet Wacom Intuos S and Dragon a speech software. 
She uses her drawing tablet as a mouse where she can click on elements. 
Because she has more control when she uses the pen. Furthermore, she uses the speech software as an alternative to the keyboard. 
She can type but not as fast, can press a key one by one. 
So Nicolette can operate her laptop on her own, but she would like to find an easier way to want to select, copy and paste important piece of text.

### How
This will be accomplished by using the user (Nicolette) will be able to copy and paste, this will be accomplished by using the web speech API.

src: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

### Why
With this concept it would be easier for the user (Nicolette), but also for a lot of other people, to select/copy/paste without having to use key combinations and precize movement with the mouse.

src: https://www.getfeedback.com/resources/ux/how-user-scenarios-help-to-improve-your-ux/

## Tests
### Round 1
<img width="1102" alt="Screenshot 2023-05-07 at 21 50 02" src="https://user-images.githubusercontent.com/59873140/236699647-d0a3877b-86f9-476e-9d1d-c8f4554faaa9.png">
For the first test I created a prototype based on the informations that we got from the assignment (without knowing her).
During the first test it was important to get to know Nicolette a little bit more.
By asking her a few questions.
Questions:
1. Can you tell us a little about yourself?
2. What do you do on the computer?
3. What can you do with your tablet?
4. How do you experience computer control with speech?
5. What kind of tablet do you have?
6. What settings have you set up on your tablet?
7. How do you paste and paste on the browser?
8. What are your limitations with the drawing tablet?
9. What do you still want to be able to do?
10. Why do you use tablet and not the mouse?

After the introduction round, was the round were Nicolette could try the first version of the prototype. 

Version one of the prototype you can find it in the following branch: [Version 1](https://github.com/RainbowJM/human-centered-design-2223/tree/v1)

The this prototype was made based on the informa=tion that we got ans assumptions that I made about Nicolette.
The first version of the prototype was a simple HTMl page  with nonsense text. 
For the copy and paste part, You had to select the text by dragging and by using the web speech api I should copy it and paste. 
But sadly while testing we found a bug, that is why tha prototype wasn't working as it should.

Feedback:
- She found it very difficult because she had to select everything
- She would like to select without scrolling 
- She has on her pen a right mouse button on so she can select a little bit, but it she wants to do it with speech
- Make settings of Speech easier to select text.
- She want a easier way to select text.

Plans/Idea's for next prototype:
- Ensuring that you can perform action with one command, key, tap, click.
- Copying without scrolling longer.
- Implement only light mode.
- There should have a clear contrast between the foreground and the background edge.
- Text should be large enough so she can read it.
- Selecting without dragging, instead use voice.
- Scroll down with a key/speech, or move to the side.
- Command that does a few actions, to cut and paste.
- Easier way to turn speech software on and off.


<details><summary>Full insight how the test went step by step</summary>
The first test went as follow.

She came in you could see already how she manage to transport herself in the wheelchair.
She was controlling the wheel chair by moving her feets.
She usually uses her second finger to operate her cell phone.
That was the fierst observation that I had.

We had a conversation with her, to get to know her better.
Here is where she explained to us that the connection between her brain and limbs, doesn't work as it should
She can't feel her limbs, or when she touch something.
Her central nervous system works fine, but the other nervous systems doesn't. 
She has spasms that are very painful. 
She can move her fingers but not all of them. 
It is a hassle for her to copy and paste.

Who is Nicolette:
- She is a geologist
- She worked at the municipality of Amsterdam
- SHe is president of the disabled organization southeastwest in 2001
- She is 76 years old 
- She goes to the gym, since 30 years she goes there, and has a feeling that she can operate more with her fingers. This also allows her to move her limbs better now. Before, she had to ask to lift her legs.
- She could not exercise according to the sports rehabilitation center when she was 40 years old. So she went to the doctor, because she did feel that she cannot live without moving.
- She goes to vacation with her new laptop, drawing tablet and microphone for speech.
- Because she is a geologist she is going to vacation to Iceland, she is going by helicopter. She goes to see spitsbergen.
- She reads mostly on paper, because she's old-fashioned. I think a lot of books.
- She uses all kinds of websites, especially architecture websites, climate change, biology, geology.
- She also reads newspapers.
- Subjects that interest her are, nature, climate change.
- Been very politically active, and she thinks it's not possible if you don't have a computer.
- Mountaineer was her hobby

Nicolette's Devices:
- Acer laptop windows 11
- Uses speech software, Dragon 6
- Drawing tablet,  Wacom intuos S, only as a mouse

Nicolette writes a lot, she has a lot of files. 
It is getting harder and harder to copy pieces from one place and place them in another file folder. 
The earlier version of windows it was easy to cut and paste. 
Windows 11 is a little more difficult. 

Step by step how Nicolette copy and paste text/files:
1. Piece is stored in a document in downloads. And you think that should be in another file.
2. Go up to get to the pin
3. Then open the file folder and if there are many file folder she has to scroll to go to the right file folder, and she finds it by scrolling.
4. She check the file she needs to copy and click the copy icon.
5. She has something installed that puts checkboxes at the front of all files.
6. When she checks the checkbox, the file is selected.
7. Then she goes to scissors, and hope she can click to scissors.
8. Then she has to go to the other folder to document (downloads), to share the document somewhere in the other file.
9. When she has found the folder she can paste.

Nicolette finds it complicated to navigate with the speech software, she wants to do as much as possible with the tablet that she uses as a mouse. 
But typing she does mostly with speech on her phone, she showed us how she sends a message to Eric with speech. 
She can type, because Eric name was written wrong and tap with to press the voice button. 
She can also hold her phone and say her message. 
She tapped the send button with her second finger. 
She finds it a little difficult to scroll( swiping) with her fingers. 
She did a circular motion, before she presses the send button.
It kind of aiming, if her hand does not do immediately, then she try to look from although her hand wants to take the target. 
Because it's going to take some time. 
And sometimes it doesn't work because when she has spasm she can't commuicate because it's very painful.

She was asked if she can work in public with her speech tool, but she does not find it comfortable to sit in a cafe with her laptop and tablet and start speaking long texts. Because then everyone will go crazy she thinks.

Nicolette can't double-click, because it's a quick move. 
So for example if you want to select a piece of text. 
You press down on the tablet and drag over the text. 
Then the text turns blue. 
That works for many people, but not for Nicolette.
She can go up and down with the pen but not accurately. 
Only it doesn't go as fast. 
Holding and dragging is not yet possible.
</details>

src:
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
- https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

### Round 2
After the first testing of the prototype. 
I continued to work on the prototype, and added more feature to it.

For the second testing op the prototype, I focus on how to copy paste with voice. 

Version two of the prototype you can find it in the following branch: [Version 2](https://github.com/RainbowJM/human-centered-design-2223/tree/v2)

For this testing I made a test plan.
The test plan was the following:

Create a scenario: 
- You would like to be able to select important texts, copy and paste it.

Task:
- You have read the text and would like to select, copy and paste it.

She did take a bit to understand, how you have to do this.
Mainly because the application was in english.
I did have to give a few hints to her. 
The dragging part is still a difficult part for her.
The part where she could use the speech tool to copy and past she liked it.

- Turn on/off the speech tool.

Again because de application was in english she did not understand, the instructions a first.
but after giving some hints, she did it.

- Give feedback about the styling in light mode

She like it that it was in light mode, because dark mode made it difficult for her to read

Plans/Idea's for next prototype:
- Change the language of the application
- Copying without scrolling longer.
- Text should be large enough so she can read it.
- Selecting without dragging, instead use voice.
- Scroll down with a key/speech, or move to the side.
- Command that does a few actions, to cut and paste.

src:
- https://developer.mozilla.org/en-US/docs/Web/API/Selection

## Feature
### Checklist
- [X] User can select one word or multiple words from the text copy and paste it by using speech.
- [X] User can copy the selected text using speech.
- [X] User can paste the copied text using speech.
- [X] Implement only light mode.
- [X] There should have a clear contrast between the foreground and the background edge.
- [X] Easier way to turn speech software on and off.
- [X] Command that does a few actions, to cut and paste.
- [X] Ensure that user can perform action with one command, key, tap, click.
- [X] Text should be large enough so she can read it.
- [X] Add nonsense

### Wishlist
- [] User can select one word or multiple words from the text using speech.
- [] User can copy without scrolling long.
- [] Selecting without dragging, instead use voice.
- [] Scroll down with a key/speech, or move to the side.




<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

