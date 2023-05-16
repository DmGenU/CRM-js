import * as model from "./../model.js";
import * as view from "./edit.view.js";

const init = () => {
    const id = getID();
    const currentRequest = model.getRequestById(id);
    view.renderItem(currentRequest);
    eventsListener();
};

const getID = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
};

const eventsListener = () => {
    view.elements.form.addEventListener("submit", onSubmitHandler);
    view.elements.removeBtn.addEventListener("click", removeRequest);
};

const onSubmitHandler = (event) => {
    event.preventDefault();
    const editedData = view.getInputs();
    model.updateRequest(editedData);
    window.location = "./table.html";
};

const removeRequest = () => {
    const id = getID();
    model.removeRequest(id);
    window.location = "./table.html";
};

init();
