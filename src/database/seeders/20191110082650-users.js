module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Matheus Paice',
        email: 'matheus@gmail.com',
        password: '12345678',
        phone: '14 998891198',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1998/11/04'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Leonardo Silva',
        email: 'leonardo@gmail.com',
        password: '12345678',
        phone: '14 997272234',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1998/02/27'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Roger Machado',
        email: 'roger@gmail.com',
        password: '12345678',
        phone: '14 9887255241',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Danilo Francisco',
        email: 'danilo@gmail.com',
        password: '12345678',
        phone: '14 9887255240',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Ivan',
        email: 'ivan@gmail.com',
        password: '12345678',
        phone: '14 9887255245',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1995/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: 'Marco',
        email: 'marco@gmail.com',
        password: '12345678',
        phone: '14 9887255244',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1997/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        name: 'Ronaldo',
        email: 'ronaldo@gmail.com',
        password: '12345678',
        phone: '14 9887255258',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1990/07/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        name: 'Leandro',
        email: 'Leandro@gmail.com',
        password: '12345627',
        phone: '14 9887255241',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        name: 'Farina',
        email: 'Farina@gmail.com',
        password: '12345678',
        phone: '14 9887255274',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1990/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        name: 'Cubas',
        email: 'cubas@gmail.com',
        password: '12345678',
        phone: '14 9887255756',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1988/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        name: 'Victor Francisco',
        email: 'vt@gmail.com',
        password: '12345678',
        phone: '14 9837255241',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        name: 'Felipe',
        email: 'felipe@gmail.com',
        password: '12345678',
        phone: '14 9883255241',
        user_uf: 'SP',
        user_city: 'Bauru',
        birth_date: new Date('1958/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        name: 'Fabricio Francisco',
        email: 'fabricio@gmail.com',
        password: '12345678',
        phone: '14 9887485241',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        name: 'Nei',
        email: 'nei@gmail.com',
        password: '12345678',
        phone: '14 9887325241',
        user_uf: 'SP',
        user_city: 'Lucianópolis',
        birth_date: new Date('1998/08/11'),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
