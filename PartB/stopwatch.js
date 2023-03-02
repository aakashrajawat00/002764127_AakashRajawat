$(document).ready(()=>{
    var execution = 0,
    intervalSetup = null,
    startTime = null,
    pauseTime = null,
    pauseDuration = 0;

  $("#start").on("click", start);
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);

  

  function start() {
    if (execution) {
      
    }else {
      if (pauseTime === null) {
        startTime = new Date();
        intervalSetup = setInterval(count, 10);
        execution = 1;
      } else {
        pauseDuration += new Date() - pauseTime;
        intervalSetup = setInterval(count, 10);
        execution = 1;
      }
    }
  }

  function stop(){
    if (execution) {
      clearInterval(intervalSetup);
      pauseTime = new Date();
      execution = 0;
    } else {
      if (pauseTime === null) {
        startTime = new Date();
        intervalSetup = setInterval(count, 10);
        execution = 1;

      } 
    }
  }

  function reset() {
    clearInterval(intervalSetup);
    pauseDuration = 0;
    startTime = null;
    pauseTime = null;
    execution = 0;
    $("#stopwatch").text("00 hr: 00 min: 00 sec");
  }

  function count() {
    var elapsedTime = new Date(new Date() - startTime - pauseDuration);
    var hr = elapsedTime.getUTCHours(),
      min = elapsedTime.getUTCMinutes(),
      sec = elapsedTime.getUTCSeconds();

    $("#stopwatch").text(
      Zeros(hr, 2) + " hr: " + Zeros(min, 2) + " min: " + Zeros(sec, 2)+" sec "
    );
  }

  function Zeros(value, digit) {
    var dummyZeros = "";
    for (i = 0; i < digit; i++) {
      dummyZeros += "0";
      return (dummyZeros + value).slice(-digit);
    }
  }
});
