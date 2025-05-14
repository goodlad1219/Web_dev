function time_subtitle() {
    let DT = new Date();
    let year = DT.getFullYear();
    let month = DT.getMonth();
    let day = DT.getDate();
    let hour = DT.getHours();
    let minute = DT.getMinutes();
    let seconds = DT.getSeconds();

    hour = hour <10 ? "0"+hour : hour;
    minute = minute <10 ? "0"+minute : minute;
    seconds = seconds <10 ? "0"+seconds : seconds;

    time= hour+":"+minute+":"+seconds;

    day = day <10 ? "0"+day : day;
    month = month <10 ? "0"+month : month;

    date = day+"-"+month+"-"+year;

    let subtitle = date+" | "+time;

    document.getElementById("Subtitle").innerHTML = subtitle
    // console.log(time);
    // console.log(date);
    // console.log(subtitle)
}

setInterval(time_subtitle, 1000) 

const parentElement = document.getElementById("Parent");



function addNewEntry(value=''){
    const newDiv = document.createElement("div");
    newDiv.classList.add("Entry");


    const newFCheck = document.createElement("span");
    newFCheck.classList.add("checks")

    const newtskbx = document.createElement("input");
    newtskbx.classList.add("taskbx");
    newtskbx.type = 'text';
    newtskbx.value = value;

    newtskbx.addEventListener("keydown", function (e) {
        if (e.key==="Enter" && newtskbx.value.trim() !== '') {
            newtskbx.setAttribute('readonly', true);
            addNewEntry();
        }
    });

    newFCheck.addEventListener("click", () => {

        const task = newtskbx.value.trim();

        if (task === '') return;

        const isChecked = newFCheck.innerText === "✔"
        newFCheck.innerText = isChecked ? '' : '✔'
        newtskbx.classList.toggle("done", !isChecked);
    })

    newDiv.appendChild(newFCheck);
    newDiv.appendChild(newtskbx);

    parentElement.appendChild(newDiv);
    newtskbx.focus();
}

addNewEntry();
