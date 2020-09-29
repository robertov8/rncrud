import faker from 'faker/locale/pt_BR';

const SEED_MAX = 35;
const seeds = [];

for (let i = 0; i < SEED_MAX; i++) {
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
