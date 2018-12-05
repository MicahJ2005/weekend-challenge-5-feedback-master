# Redux Feedback Loop
This Project is a fully functioning feedback application

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - feedback project"` and add your remote. 




### ADD NEW FEEDBACK

> This multi-form project utilizes Redux to store data across views.

The parts:
- How are you feeling today?

- How well are you understanding the content?

- How well are you being supported?

- Any comments you want to leave?

While there is no nav bar, each part of the form has its own route. Clicking next should move the user to the appropriate step in the process.

 When the form is complete, the submission is saved in the database. The user should see a submission success page.

### DISPLAY FEEDBACK

Display all of the existing feedback at the route `/admin`. The Admin page is easily accessed by clicking the "Admin Only" button in the top right corner of the page. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database. 


