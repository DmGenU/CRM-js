import * as model from "./../model.js";
import * as view from "./table.view.js";

const init = () => {
    const requests = model.getFilteredRequests();
    view.renderTableElements(requests);
    view.setActiveClasses(model.filter);
    updateBadge();
    eventsListener();
};

const eventsListener = () => {
    view.elements.productSelect.addEventListener("change", filterByProduct);
    view.elements.topStatusBar.addEventListener("click", filterByStatus);
    view.elements.leftStatusBar.addEventListener("click", filterByBids);
};

const updateBadge = () => {
    const number = model.getNumber();
    view.showNumber(number);
};

const filterByProduct = () => {
    model.changeFilterProduct(view.elements.productSelect.value);
    const requests = model.getFilteredRequests();
    view.renderTableElements(requests);
};

const filterByStatus = (event) => {
    const status = event.target.dataset.value;
    model.changefilterByStatus(status);
    const requests = model.getFilteredRequests();
    view.renderTableElements(requests);
    view.setActiveClasses(model.filter);
};

const filterByBids = (event) => {
    const status = event.target.dataset.value;
    model.changeFilterProduct("all");
    model.changefilterByStatus(status);
    const requests = model.getFilteredRequests();
    view.renderTableElements(requests);
    view.setActiveClasses(model.filter);
};

init();
