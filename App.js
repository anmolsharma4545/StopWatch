 const handler = document.querySelector('#handler');
 const resetBtn =document.querySelector('.reset');
 const hour = document.querySelector('.hours');
 const minute = document.querySelector('.minutes');
 const second = document.querySelector('.seconds');

    let hours = 0;
	let minutes= 0;
	let seconds = 0;

	let displaySeconds = 0;
	let displayMinutes = 0;
	let displayHours =0;
	let status = 'Stopped';
	let interval = '';

	function StartWatch(){
	seconds++;
	if(seconds/60 === 1)
	{
	seconds = 0;
	minutes += 1;

	if(minutes/60 ==1)
	{
	minutes = 0;
	hours += 1;
	}};
	if (seconds< 10){
	displaySeconds = '0' + seconds.toString();
	}
	else
	{
	displaySeconds=seconds;
	}
	if (minutes< 10){
	displayMinutes = '0' + minutes.toString();
	}
	else
	{
	displayMinutes=minutes;
	}
	if (hours< 10){
	displayHours = '0' + hours.toString();
	}
	else
	{
	displayHours=hours;
	}

	hour.innerHTML = displayHours + ":" + " ";
	minute.innerHTML =  displayMinutes + ":" + " ";
	second.innerHTML = displaySeconds;
	}

    handler.addEventListener('click', () =>{
   if(status =='Stopped')
	{
	interval = window.setInterval(StartWatch,1000);
	handler.innerHTML = 'Stop';
	handler.style.backgroundColor = "rgba(221, 68, 68, 0.9)";
	status = 'Started';
	}
	else if(status =='Started')
	{
	window.clearInterval(interval);
	handler.innerHTML = 'Start';
	handler.style.backgroundColor = "rgba(71, 201, 45, 0.9)";
	status = 'Stopped';
	}
    });
	resetBtn.addEventListener('click', () =>{
    seconds=0;
	minutes=0;
	hours=0;
	window.setInterval(interval);
	hour.innerHTML =  "00:";
	minute.innerHTML =  "00:";
	second.innerHTML = "00";
	handler.innerHTML = "Start";
	status = 'Stopped' ;
  });