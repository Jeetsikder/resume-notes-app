// ***Date & Time***
//   let testElementDate = verifiDate.split("/");
//   let testElementTime = verifiTime.split(":");
//   console.log(testElementTime);

//   // ***DATE***
//   let testMonth = testElementDate[0];
//   let testDate = testElementDate[1];
//   let testYear = testElementDate[2];

//   // ***TIME***
//   let theTime = testElementTime[0];
//   let theMinutes = testElementTime[1];
//   let theSecond = testElementTime[2];
//   theSecond = theSecond.split(" ", 1);

//   console.log("H", theTime);
//   console.log("M", theMinutes);
//   console.log("The Seconds", theSecond);
//   console.log("D", testDate);
//   console.log("Mon", testMonth);
//   console.log("Y", testYear);

//   let theDate = new Date();
//   theDate.setDate(testDate);
//   theDate.setMonth(testMonth - 1);
//   theDate.setFullYear(testYear);
//   theDate.setHours(theTime);
//   theDate.setMinutes(theMinutes);
//   theDate.setSeconds(theSecond);
//   theDate.setMilliseconds(330);
//   console.log(JSON.stringify(theSecond).split(" "))