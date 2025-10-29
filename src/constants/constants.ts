import { faker } from '@faker-js/faker';

const BASE_URL = 'https://automationintesting.online/';
export { BASE_URL };

   
const userDetails = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
};

export { userDetails };

const fullName = userDetails.firstName + " " +  userDetails.lastName;   
export { fullName };