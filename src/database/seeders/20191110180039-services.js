module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('services',
    [
      {
        id: 1,
        user_id: 1,
        type: 'Analista',
        description: 'Teste',
        specialization: 'Analista',
        price_type: 'Por Hora',
        price: 130.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('services', null, {}),
};
