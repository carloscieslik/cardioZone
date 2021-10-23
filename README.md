# cardioZone
The Project aims to provide assistance to instructors / monitors of gym or fitness rooms where they work with people who want to improve their health through physical activity. The aim of this tool is for instructors to be able to view in a web browser all the people with whom they are working, which is the maximum heart rate of each people and the pulsations they must maintain during the training session.
It’s important to know that not everyone has the same levels of effort, so the same pulse zones cannot be applied to two different people. Nor are zones of effort shared between two people of the same age since a person can have an active sports life and the partner be sedentary.

The methods used to calculate the maximum heart rate and the zone that each person should work according to intensity are based on the Karvonen formula, which establishes the following:

The Karvonen Formula takes into account the maximum heart rate (HRmax) and the resting heart rate (HR rest) to calculate a certain zone of effort.

How to calculate the maximum HR?
Men: HRmax = 220 - age
Women: HRmax = 226 – age

How to calculate HR at rest?
To calculate the heart rate at rest, each people must measure their heart rate at times of zero physical activity, for example, just when you wake up in the morning.

How to calculate the target HR or work zone?
HR = ((HRmax – HRrest) × % intensity) + HRrest


Effort zones
Four areas of effort are distinguished, and each student will be identified with a color according to the area in which they are working:
Zone 1 (low): up to 30%, it’s a zone of warm-up, rehabilitation, conditioning, a low initial intensity.
 
Zone 2 (normal): between 31% and 49%, represents a basic cardio training, easy pace.

Zone 3 (medium): between 50% and 69%, the aerobic zone with a moderate / high rhythm in which quality work is carried out for the cardiovascular system.

Zone 4 (high): between 70% and 100%, it is the zone of maximum effort and intensity. People works the anaerobic resistance. It cannot be maintained for long periods of time.


How does Cardio Zone work?
When the instructor enters the system, he can load the people who frequently come to class and are already loaded into a database, pressing "View students" will show all those students with their respective HRmax and training zones. (In this case a "data.json" is called to test the communication and obtain data).

If you want to enter a new people, loading the data in the enabled fields, and then pressing "Add new", the people will be added to the rest of the classmates with their respective HRmax and training zone.
When all people are loaded, they are saved in the browser's localStorage, with each student's ID as an identifier.
If you want to remove a people, by clicking on "Remove" of the respective people, that student will no longer be displayed on the screen and it will be removed from the localStorage.
If you want to remove all the loaded people, pressing "Remove all" will remove all the people, they are no longer visible on the screen and are removed from the localStorage.

Future improvements:
-Incorporate images of each people with their data
-Filter people according to effort zones
-Real time people heart rate readings through devices such as smart bands, smart watches, etc.

