//SpeedLimit = 70
//5 -> 1 point
//Math.floor(1.3)
//12 points = suspended 
console.log(checkSpeed(180));


function checkSpeed(speed){
 const speedLimt = 70;
 const demeritPoints = 5;
 const points = Math.floor((speed-speedLimt)/demeritPoints);

 if(speed< speedLimt + demeritPoints) return speed + ' ' + 'Okay.';

 if(points>=12) return 'License suspended';

 return 'Points: ' + points;

}