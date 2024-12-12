const url = "https://tink.fly.dev/chat/MBtheGoat"
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let tehe = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            answer = eval(tehe);
            input.value = answer;

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({tehe, answer})
            });

        }

        else if (e.target.innerHTML == 'AC') {
            tehe = "";
            input.value = tehe;
        }
        else if (e.target.innerHTML == 'DEL') {
            tehe = tehe.substring(0, tehe.length - 1);
            input.value = tehe;
        }
        else {
            tehe += e.target.innerHTML;
            input.value = tehe;
        }

    })
})



async function fetchMessages() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector(".history");
    element.innerHTML = 'History'
    console.log("tere")
    data.forEach(item => element.innerHTML += `<p>${item.tehe + " = " + item.answer}</p>`)
}

setInterval(fetchMessages, 3000);