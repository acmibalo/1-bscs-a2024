    let pomodoro = document.getElementById("pomodoro-timer");
        let short = document.getElementById("short-timer");
        let long = document.getElementById("long-timer");
        let currentTimer = null;

        function showDefaultTimer() {
            pomodoro.style.display = "block";
            short.style.display = "none";
            long.style.display = "none";
        }

        showDefaultTimer();

        function hideAll() {
            let timers = document.querySelectorAll(".timer-display");
            timers.forEach((timer) => (timer.style.display = "none"));
        }

        document
            .getElementById("pomodoro-session")
            .addEventListener("click", function () {
            hideAll();

            pomodoro.style.display = "block";
            currentTimer = pomodoro;
            });
        document
            .getElementById("short-break")
            .addEventListener("click", function () {
            hideAll();

            short.style.display = "block";
            currentTimer = short;
            });
        document
            .getElementById("long-break")
            .addEventListener("click", function () {
            hideAll();

            long.style.display = "block";
            currentTimer = long;
            });

        let myInterval = null;

        function startTimer(timerdisplay) {
            if (myInterval) {
            clearInterval(myInterval);
            }

            timerDuration = timerdisplay
            .getAttribute("data-duration")
            .split(":")[0];
            console.log(timerDuration);

            let durationinmiliseconds = timerDuration * 60 * 1000;
            let endTimestamp = Date.now() + durationinmiliseconds;

            myInterval = setInterval(function () {
            const timeRemaining = new Date(endTimestamp - Date.now());

            if (timeRemaining <= 0) {
                clearInterval(myInterval);
                timerdisplay.textContent = "00:00";
                const alarm = new Audio(
                "https://www.freespecialeffects.co.uk/soundfx/scifi/electronic.wav"
                );
                alarm.play();
            } else {
                const minutes = Math.floor(timeRemaining / 60000);
                const seconds = ((timeRemaining % 60000) / 1000).toFixed(0);
                const formattedTime = `${minutes}:${seconds
                .toString()
                .padStart(2, "0")}`;
                console.log(formattedTime);
                timerdisplay.textContent = formattedTime;
            }
            }, 1000);
        }

        document.getElementById("start").addEventListener("click", function () {
            if (currentTimer) {
                startTimer(currentTimer);
                document.getElementById("timer-message").style.display = "none"; 
            } else {
                document.getElementById("timer-message").style.display = "block";
            }
        });

        document.getElementById("stop").addEventListener("click", function () {
            if (currentTimer) {
            clearInterval(myInterval);
            }
        });

        function updateTotalTime() {
            let endTime = Date.now();
            let elapsedTime = Math.floor((endTime - startTime) / 60000); // in minutes
          
            if (currentTimer === pomodoro) {
              totalFocusTime += elapsedTime;
              document.getElementById("total-focus-time").textContent = `${totalFocusTime} mins`;
            } else {
              totalBreakTime += elapsedTime;
              document.getElementById("total-break-time").textContent = `${totalBreakTime} mins`;
            }
          }
          
          document.getElementById("start").addEventListener("click", function () {
            if (currentTimer) {
              startTimer(currentTimer);
              document.getElementById("timer-message").style.display = "none";
            } else {
              document.getElementById("timer-message").style.display = "block";
            }
          });
          
          document.getElementById("stop").addEventListener("click", function () {
            if (currentTimer) clearInterval(myInterval);
          });
          
          document.getElementById("reset").addEventListener("click", function () {
            clearInterval(myInterval);
            showDefaultTimer();
            pomodoro.textContent = "25:00";
            short.textContent = "5:00";
            long.textContent = "10:00";
            currentTimer = null;
          });
          