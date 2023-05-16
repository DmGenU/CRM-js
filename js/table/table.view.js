const elements = {
    tbody: document.querySelector("#tbody"),
    productSelect: document.querySelector("#productSelect"),
    topStatusBar: document.querySelector("#topStatusBar"),
    leftStatusBar: document.querySelector("#leftStatusBar"),
    badgeNew: document.querySelector("#badge-new"),
};

const renderTableElements = (requests) => {
    elements.tbody.innerHTML = "";

    const statuses = {
        new: "Новая",
        inwork: "В работе",
        complete: "Завершна",
    };

    const badges = {
        new: "badge-danger",
        inwork: "badge-warning",
        complete: "badge-success",
    };

    for (let item of requests) {
        let markup = "";
        markup += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.dateDate + " " + item.dateTime}</td>
            <td>${item.product}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>
                <div class="badge badge-pill ${badges[item.status]}">${
            statuses[item.status]
        }</div>
            </td>
            <td>
                <a href="edit.html?id=${item.id}">Редактировать</a>
            </td>
        </tr>
        `;

        elements.tbody.insertAdjacentHTML("beforeend", markup);
    }
};

const showNumber = (number) => {
    number > 0
        ? (elements.badgeNew.innerText = number)
        : (elements.badgeNew.style.display = "none");
};

const setActiveClasses = (filter) => {
    elements.productSelect.value = filter.product;

    elements.topStatusBar
        .querySelectorAll("a[data-value]")
        .forEach((item) => item.classList.remove("active"));

    elements.topStatusBar
        .querySelector(`a[data-value="${filter.status}"]`)
        .classList.add("active");

    elements.leftStatusBar
        .querySelectorAll("a[data-value]")
        .forEach((item) => item.classList.remove("active"));

    elements.leftStatusBar
        .querySelector(`a[data-value="${filter.status}"]`)
        .classList.add("active");
};

export { elements, renderTableElements, showNumber, setActiveClasses };
