# Automated Resume Taloring

Nodejs/Javascript webapp that automates resume tailoring to just one line command!
![](/WebApp.png?raw=true "Title")

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Dependencies](#dependencies)

### Installation
Create a directory
Clone the git repository:
```console
$ git clone https://github.com/w28ahmad/Automated-Resume-Tailoring.git
```

Install necessary dependencies
```console
$ npm install
```

Go ahead and run the server:
```console
$ npm run dev
```
Go to your browser and go to http://localhost:3000

### Usage
#### 1. Add your personl information
Go to app/UserInfo/Information.json and fill in all the constant information. (Ex: first name, last name, ...)
```json
"first_name": "Wahab",
"last_name": "Ahmad",
"email": "EMAIL",
"phone": "PHONE NUMBER",
"student_number": "STUDENT NUMBER",
"program_term": "ECE Term 1A"
...
```
#### 2. Add your summary, projects and workterms
In that same information.json file, add your mutable informaion. (Ex: summary, projects and workterm)
```json
    "summary": [
      "• Managed a weekly job and several extracurricular activities successfully while simultaneously placing at the top of my classes",
      "• Experienced with C++ through university courses",
      "• Enthusiastic about learning, testing and challenging my problem-solving skills",
      "• Love designing functional and appealing webpages",
      "• this is a test"
    ],
    "projects": [
      {
        "title": "Web-Design (HTML, CSS, Sass, cPanel, PHP)",
        "date": "Aug. 2018",
        "data": [
          "• Expanded my experience with programming through learning HTML, CSS, Sass and PHP from online courses",
          "• The purpose of my website is to display all my projects, acting as a digital resume. Link is in the header",
          "• Programmed a working contact me page for my website using PHP "
        ]
      }
      ....
```
Save Information file 

#### 3. Quick taloring
Now go back to http://localhost:3000 and you should be able to tailor your resume using the following commands.
```
show projects - Shows your current projects in the browser
show summary - Shows you current summary point in the browser
clear - clears any output shown in the browser

add projects (numbers) - Adds those numbered projects to your resume in the specified order
    Ex: add projects 0 1 3 2 - adds project 0 1 3 2 to your projects section
    
add summary (numbers)- Adds those numbered summary points to your resume in the specified order 
    Ex: add summary 0 1 3 2 - adds summary points 0 1 3 2 to your summary section section

show resume - opens the resume in new tab
```

#### 4. Review
Finally you open the resume in a new tab and review it. If you are content you can with the way it is, you can print it or save it as a pdf. 

### Dependencies
1. Express
2. hbs
3. jsdom
4. loadash
5. path
6. yargs
