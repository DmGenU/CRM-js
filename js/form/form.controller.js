import * as view from "./form.view.js";
import * as model from "./../model.js";
import getRandomData from "./../test-data/test-data.js";

const init = () => {
    renderTestData();
    eventsListener();
};

const renderTestData = () => {
    const testData = getRandomData();
    view.insertTestData(testData);
};

const eventsListener = () => {
    view.elements.form.addEventListener("submit", submitFormHandler);
};

const submitFormHandler = (event) => {
    event.preventDefault();
    const formData = view.getInput();
    model.addRequest(formData);
    view.resetForm();
    renderTestData();
};

init();
