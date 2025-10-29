import { faker } from "@faker-js/faker";

const BASE_URL = "https://automationintesting.online/";
export { BASE_URL };

// Generates random user details using faker for use in tests
const userDetails = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
};

export { userDetails };

// Combines first and last name for use in contact form
const fullName = userDetails.firstName + " " + userDetails.lastName;

export { fullName };
