# Visualizing Law
### Understanding the sex offender registry laws and their collateral consequences

This thesis is about the visual exploration of the sex offender registry laws and an attempt to understand how examining these laws from an objective lens can debunk myths about society. Moreover, it also tries to explore the collateral consequences that these laws have, specifically the residence restrictions that it imposes on offenders, and raises questions about the effectiveness of their intentions.

I have chosen the sex offender registry laws as my topic of research because at times when we are dealing with issues that are sensitive, such as this one, we fail to look at the complete picture before we form opinions and take actions. I believe this analysis will produce some unexpected answers to questions like: Who is required to register in the sex offender registry? For how long? Do they have a high risk of reoffending? Are all victims under eighteen? What proportion of sex offenders are juveniles, what proportion are women? How are residence restrictions imposed on offenders? What proportion of a city is inaccessible to them as a result of these restrictions? Are these restrictions effective in regards to what the intend to achieve? 

I will approach this project from three different stages. Starting at a macro level, visualizing these laws from the national viewpoint, trying to answer broader questions about their history, their inception, and presence across the country. I will then move to the state level, where narrower questions about the sex offender registry and their demographic make-up will be addressed. Finally, I would move to the district level, which will examine the impact of the collateral consequences in detail. 

I am hoping that this work will compell the user to look at a sensitive topic, such as this one, from a different perspective, at the same time making them well informed and aware, rectifying myths and misconceptions along the way.

___


## Storyboard

### National Level: 
Understanding the sex offender registry laws, their history, inception and implementation across different states
* What are sex offender registry Laws?
* How are these laws implemented across different states?
  * Who is required to register?
  *	For how long?
  * How are sex offenders categorized?
  * What restrictions are imposed?
    * Residency restrictions
    * Mobility restrictions


Variables to be visualized:
*	Number of sex offenders by state - timeline
*	Safety zones [schools, parks, day care centers]
*	Buffer area [500 ft, 1000 ft, 1500 ft, 2000 ft, 2500 ft]
*	Presence restrictions, Work restrictions
*	Restrictions by risk type [high, medium, low]
*	Duration of registration [5 yr, 10 yr, 15 yr]

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

![Alt text](visualization/cityLevel.jpg?raw=true "City Level Prototype")

Data Sources: https://datahub.cmap.illinois.gov/





### Other Ideas:

Sex Offender Registry Laws: Timeline-
![Alt text](visualization/IMG_3538.JPG?raw=true "City Level Prototype")

Mobility: Possible violations based on start and end point-
![Alt text](visualization/IMG_3539.JPG?raw=true "City Level Prototype")

