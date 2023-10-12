Smart-UI

## Description

This project devises a UI for a futuristic design of a smart table. Through multiple iterations of interviews and design prototypes, I envision a futuristic table with multiple motors to adjust the height of the table, a simple UI to control the motors, along various functionalities, such as the ability to sync your phone and watch to the UI and charge them at the same time along with your airpods. For the UI, I envision an iPad-like interface with a simple scroll at the top, a customizable home screen depending on the user, an option to add to-do list items and delete them per the user's convenience, a notification block showing different important notifcations, an option to select which user is using the app, along with app icons for the users apple watch, airpods and iphone if/when they're connected.

I envision the smart UI would be sort of a rotateable interface sitting on top the desk, along with a connecter that connects the users devices to the desk. In certain cases, the rotatable device sitting on top of test could potentially be used a secondary monitor.
<img width="969" alt="table-2" src="https://github.com/naachiketdighe/Smart-UI/assets/88009707/1f33ed1a-9878-4ba1-9ec0-5b9cbdeb3dfc">

## Requirements and interview findings

Interview 1: Jenna (20 years old, pre-med at University of Cincinnati)
Questions:
1.	How often do you use a desk at work or home?
o	Jenna uses her desk at home as a workspace and to complete her homework for at least 3 hours.
1.	What is the ideal shape of the desk?
o	Jenna would prefer that her desk be shaped like a U, where she can place her books around her, and then or a turning desk, that she can move around in a certain space.
1.	What do you pay extra if your desk had a monitor attached?
o	Jenna does not know the average cost of desks, but she would be willing to pay extra for a monitor.
1.	What features do you think a smart desk should have?
o	Jenna imagines that the smart desk would have features like a smart fridge, along with the notification features like an apple watch, such as reminders to drink water or to take a walk.
1.	Are there any health-related features you'd like the smart desk to have?
o	Jenna would like a good chair to encourage good posture and keep herself comfortable. She also imagines that the smart desk would have ergonomic features as well.
Interview 2: Kshitij Bilakhiya (23 years old, Biomedical Engineering, University of Cincinnati)
Questions:
1.	What do you like or dislike about your desk?
o	Dislikes the desk height, likes the desk size.
1.	Do you store things in or on your desk?
o	KB stores his laptop, his notebooks, and his notes.
1.	How would you imagine a smart desk?
o	KB imagines the desk will have 2 motors to control the height on each side. He also expects the smart desk to have a custom setting to change height according to the time he sets.
1.	What kind of productivity applications do you use daily?
o	KB uses the notes app and an in-app timer to stop usage of certain apps.
1.	Do you have any concerns about data privacy or security with a smart desk?
o	KB has a few concerns about his work hours being released based on when the desk is lowered or upped.

Interview 3: Kartik  (29 years old, operations analyst at Bluesnap)
Questions:
1.	Tell me about your work routine and how a desk plays into it.
o	Kartik works from home, so his desk is his office. He spends long hours writing and needs a clutter-free workspace.
1.	Are there any specific features that would enhance your productivity?
o	Kartik wants a desk that organizes cables, integrates with his calendar, and reminds him to stay hydrated.
1.	How would you like to control and customize the desk's settings?
o	Kartik wants a  simple and intuitive touch screen interface.
1.	Do you have any preferences regarding the desk's material or build quality?
o	Kartik believes sturdy construction is important. 
1.	Are there any environmental or sustainability considerations you'd like the smart desk to address?
o	Yes, Kartik would appreciate it if the desk was made from eco-friendly materials or is recyclable.

Thus, after taking in all the feedback, I deciced to base my UI for the smart desk on the follwing:
- Simple UI with familiar design.
- Productivity apps such as notes, calender and timer on the main screen.
- Scroll bar for adjusting the incline of the desk, set for different users.
- Large desk size with the monitor for the UI be used as a secondary screen.
-  Notification features such as reminding user to take a break, or remdinding them of the homework due. I chose to have a timer on when the homework is due such that it keeps the user on their toes and gives them appropriate time to prepare for it.
-   UI integrates with different apps such as canvas or the calender. UI also integrates with the users iphone and apple watch, provided them give permission.


## My interface

My interface is comprised of 5 main parts:

Starting from the left-hand side, i have the 3 main apps that are rotated according to the prefernece of the user. For Example, for user Nachi, these are the icons:

<img width="1406" alt="Screen Shot 2023-10-12 at 11 26 04 PM" src="https://github.com/naachiketdighe/Smart-UI/assets/88009707/b0845fa5-80b0-4669-a002-233a8aed8829">

Whereas for user Jenna, these are the icons: 

<img width="1395" alt="Screen Shot 2023-10-12 at 11 28 51 PM" src="https://github.com/naachiketdighe/Smart-UI/assets/88009707/dfacda10-e339-4fcb-84f2-cdeb76820dd0">

Then we have the scroll bar, which if the user decided to set at a certain level, it then retains the original value set by the selected user.

Then we have the main four apps in the home screen, which, for the sake of simplicity, I decided to not change depending on the user. They're all productivity apps.

<img width="348" alt="Screen Shot 2023-10-12 at 11 31 39 PM" src="https://github.com/naachiketdighe/Smart-UI/assets/88009707/b1d5e160-5c44-4b8b-87f5-ac54e3239fa4">

Then, depending on if the user has connected their apple devices to the UI, these icons show the battery being charged:

<img width="380" alt="Screen Shot 2023-10-12 at 11 32 06 PM" src="https://github.com/naachiketdighe/Smart-UI/assets/88009707/476be328-9adc-43d8-a1d8-baf643430c2b">

THen I have the notifications, which remind you of the important tasks coming up. For an actual UI,ideally, these would get information from the Canvas app on the users iphone, and project upcoming appointments in one section, and then information from other productivity apps in the other notifications. Ideally there could be more than three notiifcations.



