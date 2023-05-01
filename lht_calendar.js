"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: jameel
   Date:  4/10/2023

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// set the date displayed in the calendar 
let thisDay = new Date("August 24,2018");  

// Write the calendar table element with the id of"calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Definition of the function that generates the calendar table
function createCalendar(calDate) {
   let calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
//return statement that hands data off to the script
   return calendarHTML;
}//end of create calendar()
//Definition of the function to write the calendar caption
function calCaption(calDate){
//monthName array contains the list of month names
   let monthName=["January","February","March","April","May","June","July","August","September", "October","November","December"];
// Determine the numeric value of the current month
let thisMonth = calDate.getMonth();
// Determine the current year of the date given
let thisYear= calDate.getFullYear();
//Use those variable to write the table caption
return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}
//end of calCaption () function

//Definition of a function to write a table row with the weekday abbreviations
function calWeekdayRow(){
   //Array of weekday abbreviations
   let dayName = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
   let rowHtml = "<tr>";
   //loop through the dayName array
   for(let i=0; i< dayName.length; i++) {
      rowHtml+= "<th class='calendar_weekdays'>" + dayName[i]+"</th>"; 
   }//end of for loop
rowHtml+= "<tr/>";
//send the rowHtml data that this function built back to the script
return rowHtml;

}//end of the calWeekdayRow( function)

//definition of the function to calculate the number of days in the month 
function daysInMonth (calDate){
   //Array of days in each month
   let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];

  //Extract the four digit year and  month values
   let thisYear = calDate.getFullYear();
   let thisMonth = calDate.getMonth();

   //Revise the days in february for leap years 
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 !=0) || (thisYear % 400=== 0)){
         dayCount[1] = 29;
      }
   } 
   
  //Return the number of dayss for the given month
   return dayCount[thisMonth];
 
}//End of the daysInMonth() function

//Definition of function to write the table rows for each day in the month
function calDays(calDate) {
   //Determine the starting day of  the month
   let day = new Date(calDate.getFullYear(), calDate.getMonth(),1);
   let weekDay = day.getDay();
   //Write blank cells preceding the starting day
   let htmlCode = "<tr";
   for(let i = 0; i< weekDay; i++){
      htmlCode += "<td></td>"

   }
   //write cells for each actual day in the month 
   let totalDays = daysInMonth(calDate);
   let highlightDay = calDate.getDate();
   for(let i = 1; i <= totalDays; i ++){
      day.setDate(i)
      weekDay = day.getDay();
      // The loop must decide too end a <tr> when it's Saturday and start a new <tr> when it's Sunday
      if(weekDay===0){
         htmlCode += "<tr>";
      }

      if(i=== highlightDay){
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      }else{
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";

      }

      if(weekDay===6){
         htmlCode += "<tr>";
      }

   }//End of totalDays loop
   return htmlCode;
}// end of calDays() function 

   



