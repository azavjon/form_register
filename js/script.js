const fullname = document.createElement("form");
fullname.id = "form";
fullname.style.margin = "30vh";
fullname.style.backgroundColor = "grey";
fullname.style.textAlign = "center";
fullname.style.width = "300px";
fullname.style.height = "200px";


const nameinput = document.createElement("input");
nameinput.name = "name";
nameinput.type = "text";
nameinput.placeholder = "Ф.И.О";
nameinput.style.margin = "10px";
nameinput.required;
nameinput.classList.add("name");


const brinp = document.createElement("br");


const emailinput = document.createElement("input");
emailinput.type = "email";
emailinput.name = "email";
emailinput.placeholder = "Электроний почта";
emailinput.style.marginBottom = "10px";
emailinput.classList.add("email");

const brnp = document.createElement("br");

const textareaInput = document.createElement("textarea");
textareaInput.name = "textarea";
textareaInput.placeholder = "Комментария";
textareaInput.style.marginBottom = "10px";
textareaInput.classList.add("textarea");

const brp = document.createElement("br");

const btnInput = document.createElement("input");
btnInput.type = "submit";
btnInput.textContent = "Отправить"




fullname.appendChild(nameinput);
fullname.appendChild(brinp);
fullname.appendChild(emailinput);
fullname.appendChild(brnp);
fullname.appendChild(textareaInput);
fullname.appendChild(brp);
fullname.appendChild(btnInput);

document.body.appendChild(fullname);


const add = [];
fullname.addEventListener('submit', (event) => {
    event.preventDefault();
    const FormElement = event.target.elements;
    const data = {
        name: FormElement.name.value,
        email: FormElement.email.value,
        textarea: FormElement.textarea.value
    }
    if (data.name.trim() !== '' && data.email.trim() !== '' && data.textarea.trim() !== '') {
        add.push(data);

        fullname.reset();
        console.log(add);

    }
});