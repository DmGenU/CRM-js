let requests = loadFromLocalStorage();
const filter = loadFilter();

class Request {
    constructor(id, name, phone, email, product) {
        (this.id = id),
            (this.name = name),
            (this.phone = phone),
            (this.email = email),
            (this.product = product),
            (this.dateDate = new Date().toLocaleDateString()),
            (this.dateTime = new Date().toLocaleTimeString()),
            (this.status = "new");
    }
}

const addRequest = (formData) => {
    // const lastId = requests[requests.length - 1]["id"];
    let id = requests.length > 0 ? requests[requests.length - 1]["id"] + 1 : 1;
    const request = new Request(
        id,
        formData.get("name"),
        formData.get("phone"),
        formData.get("email"),
        formData.get("product")
    );

    requests.push(request);
    saveToLocalStorage(requests);
};

const changeFilterProduct = (product) => {
    filter.product = product;
    saveFilter();
};

const changefilterByStatus = (status) => {
    filter.status = status;
    saveFilter();
};

const getFilteredRequests = () => {
    const filteredByProduct =
        filter.product !== "all"
            ? requests.filter((item) => item.product == filter.product)
            : requests;

    const filtered =
        filter.status !== "all"
            ? filteredByProduct.filter((item) => item.status == filter.status)
            : filteredByProduct;

    return filtered;
};

const getNumber = () => {
    return requests.filter((item) => item.status == "new").length;
};

const getRequestById = (id) => {
    return requests.find((item) => item.id == id);
};

const updateRequest = (formData) => {
    const editedRequest = getRequestById(formData.get("id"));
    editedRequest.name = formData.get("name");
    editedRequest.phone = formData.get("phone");
    editedRequest.email = formData.get("email");
    editedRequest.product = formData.get("product");
    editedRequest.status = formData.get("status");

    saveToLocalStorage();
};

const removeRequest = (id) => {
    const removedRequest = getRequestById(id);
    const index = requests.indexOf(removedRequest);
    requests.splice(index, 1);

    saveToLocalStorage();
};

function saveToLocalStorage() {
    localStorage.setItem("requests", JSON.stringify(requests));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem("requests");
    return data ? JSON.parse(data) : [];
}

function saveFilter() {
    localStorage.setItem("filter", JSON.stringify(filter));
}

function loadFilter() {
    const data = localStorage.getItem("filter");
    return data
        ? JSON.parse(data)
        : {
              status: "all",
              product: "all",
          };
}

export {
    addRequest,
    getFilteredRequests,
    getRequestById,
    updateRequest,
    removeRequest,
    getNumber,
    changeFilterProduct,
    changefilterByStatus,
    filter,
};
