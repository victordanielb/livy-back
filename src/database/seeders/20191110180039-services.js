module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('services',
    [
      {
        id: 1,
        user_id: 1,
        type: 'Construção',
        description: 'Teste',
        specialization: 'Construção',
        price_type: 'Por Hora',
        price: 130.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        type: 'Mecânica',
        description: 'Manutenção em motores antigos',
        specialization: 'Motores antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 3,
        type: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 150.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        user_id: 5,
        type: 'Saúde',
        description: 'Manutenção em Saúde antigos',
        specialization: 'Saúde antigos',
        price_type: 'Por Hora',
        price: 90.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        user_id: 4,
        type: 'Educação',
        description: 'Segunda Guerra',
        specialization: 'Guerras',
        price_type: 'Por Hora',
        price: 120.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        user_id: 1,
        type: 'Informatica',
        description: 'Manutenção em Informatica antigos',
        specialization: 'Informatica antigos',
        price_type: 'Por Hora',
        price: 15.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        user_id: 3,
        type: 'Domésticos',
        description: 'Manutenção em Domésticos antigos',
        specialization: 'Domésticos antigos',
        price_type: 'Por Hora',
        price: 95.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        user_id: 4,
        type: 'Eletronicos',
        description: 'Manutenção em Eletronicos antigos',
        specialization: 'Eletronicos antigos',
        price_type: 'Por Hora',
        price: 12.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        user_id: 5,
        type: 'Eletrodomesticos',
        description: 'Manutenção em Eletrodomesticos antigos',
        specialization: 'Eletrodomesticos antigos',
        price_type: 'Por Hora',
        price: 1600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        user_id: 3,
        type: 'Eventos',
        description: 'Manutenção em Eventos antigos',
        specialization: 'Eventos antigos',
        price_type: 'Por Hora',
        price: 74.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        user_id: 3,
        type: 'Social',
        description: 'Manutenção em Social antigos',
        specialization: 'Social antigos',
        price_type: 'Por Hora',
        price: 98.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        user_id: 3,
        type: 'Outros',
        description: 'Manutenção em Outros antigos',
        specialization: 'Outros antigos',
        price_type: 'Por Hora',
        price: 19.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        user_id: 1,
        type: 'Construção',
        description: 'Teste',
        specialization: 'Construção',
        price_type: 'Por Hora',
        price: 15.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        user_id: 2,
        type: 'Mecânica',
        description: 'Manutenção em motores antigos',
        specialization: 'Motores antigos',
        price_type: 'Por Hora',
        price: 12.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        user_id: 3,
        type: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 500.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        user_id: 5,
        type: 'Saúde',
        description: 'Manutenção em Saúde antigos',
        specialization: 'Saúde antigos',
        price_type: 'Por Hora',
        price: 794.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 17,
        user_id: 4,
        type: 'Educação',
        description: 'Manutenção em Educação antigos',
        specialization: 'Educação antigos',
        price_type: 'Por Hora',
        price: 18.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 18,
        user_id: 1,
        type: 'Informatica',
        description: 'Manutenção em Informatica antigos',
        specialization: 'Informatica antigos',
        price_type: 'Por Hora',
        price: 98.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 19,
        user_id: 3,
        type: 'Domésticos',
        description: 'Manutenção em Domésticos antigos',
        specialization: 'Domésticos antigos',
        price_type: 'Por Hora',
        price: 158.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 20,
        user_id: 4,
        type: 'Eletronicos',
        description: 'Manutenção em Eletronicos antigos',
        specialization: 'Eletronicos antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 21,
        user_id: 5,
        type: 'Eletrodomesticos',
        description: 'Manutenção em Eletrodomesticos antigos',
        specialization: 'Eletrodomesticos antigos',
        price_type: 'Por Hora',
        price: 1781.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 22,
        user_id: 3,
        type: 'Eventos',
        description: 'Manutenção em Eventos antigos',
        specialization: 'Eventos antigos',
        price_type: 'Por Hora',
        price: 50.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 23,
        user_id: 3,
        type: 'Social',
        description: 'Manutenção em Social antigos',
        specialization: 'Social antigos',
        price_type: 'Por Hora',
        price: 1.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 24,
        user_id: 3,
        type: 'Outros',
        description: 'Manutenção em Outros antigos',
        specialization: 'Outros antigos',
        price_type: 'Por Hora',
        price: 58.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 25,
        user_id: 1,
        type: 'Construção',
        description: 'Teste',
        specialization: 'Construção',
        price_type: 'Por Hora',
        price: 27.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 26,
        user_id: 2,
        type: 'Mecânica',
        description: 'Manutenção em motores antigos',
        specialization: 'Motores antigos',
        price_type: 'Por Hora',
        price: 19.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 27,
        user_id: 3,
        type: 'Tecnologia',
        description: 'Teste',
        specialization: 'Formatação',
        price_type: 'Por Hora',
        price: 15.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 28,
        user_id: 5,
        type: 'Saúde',
        description: 'Manutenção em Saúde antigos',
        specialization: 'Saúde antigos',
        price_type: 'Por Hora',
        price: 69.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 29,
        user_id: 4,
        type: 'Educação',
        description: 'Manutenção em Educação antigos',
        specialization: 'Educação antigos',
        price_type: 'Por Hora',
        price: 94.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 30,
        user_id: 1,
        type: 'Informatica',
        description: 'Manutenção em Informatica antigos',
        specialization: 'Informatica antigos',
        price_type: 'Por Hora',
        price: 16.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 31,
        user_id: 3,
        type: 'Domésticos',
        description: 'Manutenção em Domésticos antigos',
        specialization: 'Domésticos antigos',
        price_type: 'Por Hora',
        price: 98.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 32,
        user_id: 4,
        type: 'Eletronicos',
        description: 'Manutenção em Eletronicos antigos',
        specialization: 'Eletronicos antigos',
        price_type: 'Por Hora',
        price: 777.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 33,
        user_id: 5,
        type: 'Eletrodomesticos',
        description: 'Manutenção em Eletrodomesticos antigos',
        specialization: 'Eletrodomesticos antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 34,
        user_id: 3,
        type: 'Eventos',
        description: 'Manutenção em Eventos antigos',
        specialization: 'Eventos antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 35,
        user_id: 3,
        type: 'Social',
        description: 'Manutenção em Social antigos',
        specialization: 'Social antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 36,
        user_id: 3,
        type: 'Outros',
        description: 'Manutenção em Outros antigos',
        specialization: 'Outros antigos',
        price_type: 'Por Hora',
        price: 600.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('services', null, {}),
};
