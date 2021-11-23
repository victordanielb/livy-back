module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Victor Conceicão',
        email: 'victor@gmail.com',
        password: '123456789',
        phone: '14 996207227',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('2000/10/25'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
