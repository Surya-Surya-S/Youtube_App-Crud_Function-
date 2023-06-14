let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


let data = {};
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick = "editPost(this)" class="fa-solid fa-pen-to-square" style="color: #326bcd;"></i>
            <i onClick = "deletePost(this)" class="fa-solid fa-trash" style="color: #326bcd;"></i>
        </span>
    </div>
    `;
    input.value = "";
};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Message Cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};