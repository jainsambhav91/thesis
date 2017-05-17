# Visualizing Law
### Understanding the sex offender registry laws and their collateral consequences

### Abstract

This thesis is about the visual exploration of the current sex offender registration and community notification laws in the United States. It is an attempt to understand how examining these laws and their impact on society from an objective lens can debunk myths and create awareness. It tries to explore the collateral consequences that these laws have, specifically the residence restrictions that are imposed on offenders, and raises questions about the effectiveness of their intentions. This work also aims to serve as a tool for lawmakers to visualize what the consequences of their actions might look like, and help them to preempt decisions that may not be in the best interest of society.

---

### Presentation slides (including project URL and video):

https://jainsambhav91.github.io/thesis/work/finalViz/

---

### Project URL:

* Residence and Employment Restrictions: https://goo.gl/DDfj6O
* Mobility and Presence Restrictions: https://goo.gl/3xphT6

---


### Feature List

Housing and Employment
* Show residential land use area 
* Show commercial/institutional land use area 
* Recalculate restricted area on map movement/map zoom --> changed to displaying restricted areas by neighborhood
* On hover, show restricted area for that neighborhood

Mobility and Presence
* Enter origin and destination locations
* Show possible violations
* Project violations on the side bar
* Explore violation locations - like schools/parks

---




prototype:
![Alt text](visualization/nationalLevelPrototype.jpg?raw=true "National Level Prototype")

Data Sources:
* https://www.parentsformeganslaw.org/public/meganReportCard.html
* http://all4consolaws.org/wp-content/uploads/2017/01/Summary-of-State-Registration-Laws-Concerning-Short.pdf



### State Level:
Understanding the demographics of the registrants: _State of Illinois_
*	What proportion of registered offenders are females?
*	What proportion of registered offenders are juveniles?
*	Which ethnicities have a higher chance of convictions?
*	Are all victims children? What proportion are adults?
*	How are offenders categorized by risk of re-offense?


Variables to be visualized:
Distribution by:
*	Age
*	Gender
*	Ethnicity
*	Victim Age
*	Type of Crime




prototype:
![Alt text](visualization/stateLevelPrototype.png?raw=true "State Level Prototype")

Data Sources:
* https://www.isp.state.il.us/sor/


### City Level
Understanding the impact of collateral consequences: _Chicago_

#### Residence restrictions
*	What proportion of the city is inaccessible for registered offenders to _live_?
    * Mapping schools, day care centers and public parks parcel data with 500 ft buffers
    * Mapping the city of Chicago and representing the percentage of city area that is prohibited for the sex offenders to live
* Mapping actual available area
  * Mapping schools, day care centers and public parks parcel data with 500 ft buffers
  * Mapping residential area parcels in the city of Chicago (excluding industrial, commerical, farmland, healthcare parcels)  and excluding the safety zones to analyse the actual resiential area that is accessible.

#### Work Restrictions
* What proportion of the city is inaccessible for registered offenders to _work_?
  * Mapping schools, day care centers and public parks parcel data with 500 ft buffers
  * Mapping employment and work area parcels in the city of Chicago and excluding the safety zones to analyse the actual area available to them for work
  
#### Presence Restrictions
* To avoid the risk of not "loitering" around schools and public parks and violating the law, what areas become inaccessible for the _presence_ and _mobility_ of registered offenders?
  * Mapping schools, day care centers and public parks parcel data with 500 ft buffers
  * Mapping streets of Chicago and analysing the ones that fall under safety zones to understand inaccessability. 

#### Other Impacts
* To avoid the risk of not "loitering" around schools and public parks and violating the law, what other public ameneties become inaccessible to the registered offenders? 
  * Mapping schools, day care centers and public parks parcel data with 500 ft buffers
  * Mapping Hospitals and healthcare facilities parcel data and analysing the ones that fall under safety zones to understand inaccessability.




prototype:

![Alt text](visualization/Untitled-1.png?raw=true "City Level Prototype")

![Alt text](visualization/Untitled-2.png?raw=true "City Level Prototype")

![Alt text](visualization/Untitled-3.png?raw=true "City Level Prototype")

![Alt text](visualization/Untitled-4.png?raw=true "City Level Prototype")


Data Sources: https://datahub.cmap.illinois.gov/


