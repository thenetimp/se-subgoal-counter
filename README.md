# Stream Elements Subgoal Counter

The Stream Elements Subgoal Counter is a Stream Elements custom widget for tracking subscriber goals and auto incrementing them when met.

To start click on the green button above that is labled "Code" and from the dropdown menu click on "Download Zip".  This will download the latest version of the main branch of this repository containing 4 files.  This readme document, plus 3 files contain what is needed for the widget.

Next go to Stream Elements and log into your account.  Go to `Streaming Tools` and then to `My Overlays`.  You can either put this custom widget in an existing or a new overlay.  That decision is up to you.

In your overlay click on the blue button with the plus sign, and choose `STATIC / CUSTOM` and then `Custom Widget`.  This will create a new custom widget in the left hand side bar and it will have the settings tab selected.

From the settings tab you should see a link "Open Editor".  Click on this link and it will open the editor modal which is where we will put the code you downloaded from the zip file.

Using a simple text editor application (In windows Notepad is recommended, and for Mac TextEdit is recommended) we will open the files we downloaded.

Open main.html and copy the contents to your clipboard.  Then in the Stream Elements editor click HTML and remove what is there and paste in the code from main.html

Open main.css and copy the contents to your clipboard.  Then in the Stream Elements editor click CSS and remove what is there and paste in the code from main.css

Open main.js and copy the contents to your clipboard.  Then in the Stream Elements editor click Javascript and remove what is there and paste in the code from main.js

In the lower corner of the editor click done, and in the top right of the browser click the save button.

The Subgoal counter/tracker is now installed.  It is designed to calculate based on a base increment of 10 subscriptions.  If you have 100 subscriptions, your next goal is 110 if you have 150 your next is 160.

This behaviour can be changed.  Once again in the widget click on `Open Editor` and click on Javascript.  On the 3rd line is this variable definition. `const goalIncrementValue = 10;`.   Change this to any other positive integer will change the behavior.  For example changing it to 50 would make your base subgoal 50 when you reached 50 it would then go to 100 and so on and so forth.
