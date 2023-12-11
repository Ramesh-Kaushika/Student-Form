console.log("Check");

let form = document.getElementById("form");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button click");
    formValidationc();
});

let formValidationc = () => {

    if (input1, input2, input3, input4.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();

    }

}

let data = {};

let acceptData = () => {

    data["text1"] = input1.value;
    data["text2"] = input2.value;
    data["number"] = input3.value;
    data["text3"] = input4.value;
    console.log(data);
    createPost();
}

let createPost = () => {

    posts.innerHTML +=
        `
     <div class="card w-auto  text-bg-info border-primary border-3 rounded-3 text-black " style="text-align: center;">
     <p class="output">First Name :${data.text1}</p>
     <p class="output">Second Name :${data.text2}</p>
     <p class="output">Age :${data.number}</p>
     <p class="output">Address :${data.text3}</p>
     <button type="button" class="btn btn-danger" onClick = "deletePost(this)" >Delete</button>
 </div>  
     `;

     input1.value = "";
     input2.value = "";
     input3.value = "";
     input4.value = "";

}

let deletePost = (e) => {

    e.parentElement.remove();

}