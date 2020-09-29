import faker from 'faker/locale/pt_BR';

const seeds = [];

for (let i = 0; i < 10; i++) {
  const id = faker.random.number();
  const name = `${faker.name.lastName()} ${faker.name.lastName()}`;
  const email = faker.internet.email();
  const avatarUrl = `https://api.adorable.io/avatars/500/${id}`;

  seeds.push({
    id,
    name,
    email,
    avatarUrl,
  });
}

export default seeds;
