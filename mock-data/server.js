const { faker } = require("@faker-js/faker");

module.exports = function () {
  const data = { contacts: [] };
  for (let i = 0; i < 10; i++) {
    data.contacts.push({
      id: i,
      first: faker.person.firstName(),
      last: faker.person.lastName(),
      twitter: faker.internet.displayName(),
      avatar: faker.image.avatar(),
      createdAt: faker.date.past(),
    });
  }
  return data;
};
