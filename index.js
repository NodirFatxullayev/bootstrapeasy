const name = document.querySelector(".name"),
    secondname = document.querySelector(".secondname"),
    email = document.querySelector(".email"),
    btn = document.querySelector(".btn"),
    tbody = document.querySelector("tbody");


btn.addEventListener("click", () => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    if (name.value != "" && secondname.value != "" && email.value != "") {
        td1.textContent = name.value;
        td2.textContent = secondname.value;
        td3.textContent = email.value;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }else{
        alert("Hamma maydoni to'ldorong");
    }
})