import { transformer } from './transformer';

const onLoad = () => {
    // const body = document.body;

    // const num_count = document.createElement("p");
    // num_count.id = "num_count";
    // num_count.innerHTML = "This message will be changed";

    // const button = document.createElement("button");
    // button.type = "button";
    // button.innerHTML = "Click me";

    // body.appendChild(num_count);
    // body.appendChild(button);

    const button = document.getElementById("btn_click");
    button.addEventListener("click", function() {
        import("./name.js").then(function(module) {
            document.getElementById("num_count").innerHTML = transformer(module.message);
        });
    });

   
}

document.body.onload = onLoad;