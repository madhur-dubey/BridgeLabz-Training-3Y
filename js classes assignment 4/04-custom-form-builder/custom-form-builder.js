"use strict";

// Q4: Build form fields from an array of descriptions.
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm(container) {
        const form = document.createElement("form");

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = true;

            label.appendChild(input);
            form.appendChild(label);
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";
        form.appendChild(button);

        form.addEventListener("submit", event => {
            event.preventDefault();
            document.getElementById("output").textContent =
                JSON.stringify(this.getFormData(form), null, 2);
        });

        container.appendChild(form);
    }

    getFormData(form) {
        const data = {};
        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });
        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" }
];

new FormBuilder(fields).createForm(document.getElementById("formArea"));
