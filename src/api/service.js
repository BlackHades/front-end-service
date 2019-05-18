let faker = require('faker');

let generateWorkers = () => {
    let services = [];

    for (let id = 1; id < 30; id++) {
        let serviceName = faker.commerce.productName();
        let serviceDescription = faker.lorem.sentences();
        let serviceImage = faker.image.business();

        let numberOfSubscribers = faker.random.number();
        let date = faker.date.past();

        services.push({
            "id": id,
            "serviceName": serviceName,
            "serviceDescription": serviceDescription,
            "serviceImage": serviceImage,
            date,
            numberOfSubscribers
        });
    }

    return { "services": services }
}

module.exports = generateWorkers;