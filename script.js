document.addEventListener('DOMContentLoaded', () => {   
    const completeToggle = document.querySelector('[data-testid="test-todo-complete-toggle"]');
    const todoStatus = document.querySelector('[data-testid="test-todo-status"]');
    const card = document.querySelector('[data-testid="test-todo-card"]');
    const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');

    const timeOfDeadline = new Date("2026-04-16T23:59:59").getTime();

    function updateTime() {
        const currentDateTime = new Date().getTime();
        const timeDifference = timeOfDeadline - currentDateTime;

        if (timeDifference <= 0) {
            const hoursOver = Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60));

            timeRemaining.innerText = hoursOver > 0
                ? `Overdue by ${hoursOver} hour(s)`
                : "Due now!";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (days === 0) {
                timeRemaining.innerText = "Due today";
            } else if (days === 1) {
                timeRemaining.innerText = "Due tomorrow";
            } else {
                timeRemaining.innerText = `Due in ${days} days`;
            }
        }
    }

    updateTime();
    setInterval(updateTime, 60000); 

    completeToggle.addEventListener('change', () => {
    if (completeToggle.checked) {
        card.classList.add('completed');
        todoStatus.innerText = "Done";
    } else {
        card.classList.remove('completed');
        todoStatus.innerText = "Pending";
    }
});

    document.querySelector('[data-testid="test-todo-edit-button"]').onclick = () => {
        alert("You can now edit the todo");

    };

    document.querySelector('[data-testid="test-todo-delete-button"]').onclick = () => {
        alert("You have deleted the todo");
    };
});
