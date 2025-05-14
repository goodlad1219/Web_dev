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

const parentElemet = document.getElementById("Parent");
var counter=1;
counter++;
var id = "taskbox"+counter;
console.log(id);

const newList = document.createElement("li");
newList.id = "ListItem";
const newDiv = document.createElement("div");
newDiv.classList.add("Entry");
newDiv.id = "Entry"

const newCheck = document.createElement("input");
newCheck.classList.add("checkbx");
newCheck.setAttribute("type","checkbox");
newCheck.setAttribute("checked","checked");
const newFCheck = document.createElement("span");
newFCheck.classList.add("checks")
const newtskbx = document.createElement("input");
newtskbx.id = id;
newtskbx.classList.add("taskbx");
newtskbx.setAttribute("type","text");

newDiv.appendChild(newCheck);
newDiv.appendChild(newFCheck);
newDiv.appendChild(newtskbx);

newList.appendChild(newDiv);

function newEntry(keypress) {
    let e = keypress.key;
    if (e==="Enter") {
        parentElemet.appendChild(newList);
        console.log("Done baby")
    }
};

document.getElementById("taskbx1").addEventListener("keydown",(kp) => {
    newEntry(kp);
});

// console.logdocument.getElementById("taskbx").nextSibling
