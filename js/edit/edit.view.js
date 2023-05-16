const elements = {
    form: document.querySelector("#form"),
    number: document.querySelector("#number"),
    date: document.querySelector("#date"),
    id: document.querySelector("#id"),
    product: document.querySelector("#product"),
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    phone: document.querySelector("#phone"),
    status: document.querySelector("#status"),
    removeBtn: document.querySelector("#removeBtn"),
};

const renderItem = (currentRequest) => {
    elements.number.innerText = currentRequest.id;
    elements.id.value = currentRequest.id;
    elements.date.innerText = `${currentRequest.dateDate} ${currentRequest.dateTime}`;
    elements.product.value = currentRequest.product;
    elements.name.value = currentRequest.name;
    elements.email.value = currentRequest.email;
    elements.phone.value = currentRequest.phone;
    elements.status.value = currentRequest.status;
};

const getInputs = () => {
    return new FormData(elements.form);
};

export { elements, renderItem, getInputs };
