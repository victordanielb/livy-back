module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('done_workers',
    [
      {
        id: 1,
        comment: 'Profissional muito atencioso e prestativo',
        status_worker: 'F',
        status_contractor: 'F',
        total_price: 190.00,
        stars: 4,
        start_service: new Date('10/09/2021'),
        finish_service: new Date('10/09/2021'),
        status: 'F',
        created_at: new Date(),
        updated_at: new Date(),
        worker_id: 1,
        contractor_id: 6,
        service_id: 1,
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('done_workers', null, {}),
};
