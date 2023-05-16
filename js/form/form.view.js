const elements = {
    form: document.querySelector("#form"),
    name: document.querySelector("#name"),
    phone: document.querySelector("#phone"),
    email: document.querySelector("#email"),
    product: document.querySelector("#product"),
};

const insertTestData = (data) => {
    elements.name.value = data.name;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.product;
};

const getInput = () => {
    return new FormData(elements.form);
};

const resetForm = () => {
    elements.form.reset();
};

export { elements, insertTestData, getInput, resetForm };
