class ExampleItem {
    constructor(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

const testData = [
    new ExampleItem(
        "Джонни Депп",
        "+7 (901) 123-45-67",
        "depp@mail.com",
        "course-html"
    ),
    new ExampleItem(
        "Семен Свалов",
        "+7 (902) 987-65-43",
        "semenov@mail.com",
        "course-js"
    ),
    new ExampleItem(
        "Сильвестр Сталлоне",
        "+7 (903) 456-78-90",
        "stallone@mail.com",
        "course-vue"
    ),
    new ExampleItem(
        "Скарлетт Йохансон",
        "+7 (904) 198-72-63",
        "johanson@mail.com",
        "course-php"
    ),
    new ExampleItem(
        "Николаc Кейдж",
        "+7 (905) 678-91-34",
        "cage@mail.com",
        "course-wordpress"
    ),
    new ExampleItem(
        "Дэнзел Вашингтон",
        "+7 (906) 345-09-09",
        "washington@mail.com",
        "course-html"
    ),
    new ExampleItem(
        "Джек Николсон",
        "+7 (907) 560-90-11",
        "nicholson@mail.com",
        "course-js"
    ),
    new ExampleItem(
        "Морган Фримэн",
        "+7 (908) 877-99-02",
        "freeman@mail.com",
        "course-vue"
    ),
    new ExampleItem(
        "Брэд Питт",
        "+7 (909) 109-09-88",
        "pitt@mail.com",
        "course-php"
    ),
    new ExampleItem(
        "Брэдли Купер",
        "+7 (910) 892-34-10",
        "cooper@mail.com",
        "course-wordpress"
    ),
    new ExampleItem(
        "Борис Бритва",
        "+7 (911) 440-77-19",
        "britva@mail.com",
        "course-html"
    ),
    new ExampleItem(
        "Гарри Олдман",
        "+7 (912) 761-09-82",
        "oldman@mail.com",
        "course-js"
    ),
    new ExampleItem(
        "Джон Траволта",
        "+7 (913) 332-45-03",
        "travolta@mail.com",
        "course-vue"
    ),
    new ExampleItem(
        "Мэл Гибсон",
        "+7 (914) 745-23-70",
        "gibson@mail.com",
        "course-php"
    ),
    new ExampleItem(
        "Дуэйн Джонсон",
        "+7 (915) 209-80-91",
        "johnson@mail.com",
        "course-wordpress"
    ),
];

function getRandomIndex() {
    return Math.floor(Math.random() * testData.length);
}

export default function getRandomData() {
    const index = getRandomIndex();
    return testData[index];
}
