import drink, * as action from './drink';

test('check existence action', () => {
  const expectedActions = [
    {
      type: 'drink/BUYDRINK',
      name: 'coca-cola',
    },
    {
      type: 'drink/GETDRINK',
    },
  ];
  const actions = [action.buyDrink('coca-cola'), action.getDrink()];
  expect(actions).toEqual(expectedActions);
});

test('check buyDrink action', () => {
  const TestBuyDrink1 = drink(
    {
      drinks: [
        { name: 'coca-cola', count: 10, price: 1300 },
        { name: 'dr-pepper', count: 10, price: 1200 },
        { name: 'fanta', count: 10, price: 800 },
        { name: 'lets-be', count: 10, price: 600 },
        { name: 'sprite', count: 10, price: 900 },
        { name: 'tejava', count: 10, price: 1100 },
        { name: 'water', count: 10, price: 500 },
        { name: 'welchs', count: 10, price: 1000 },
      ],
      storage: [],
      inventory: [],
    },
    {
      type: 'drink/BUYDRINK',
      name: 'coca-cola',
    },
  );
  expect(TestBuyDrink1).toHaveProperty('drinks', [
    { name: 'coca-cola', count: 9, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ]);
  expect(TestBuyDrink1).toHaveProperty('storage', [
    { name: 'coca-cola', count: 1 },
  ]);

  const TestBuyDrink2 = drink(
    {
      drinks: [
        { name: 'coca-cola', count: 10, price: 1300 },
        { name: 'dr-pepper', count: 10, price: 1200 },
        { name: 'fanta', count: 10, price: 800 },
        { name: 'lets-be', count: 10, price: 600 },
        { name: 'sprite', count: 10, price: 900 },
        { name: 'tejava', count: 10, price: 1100 },
        { name: 'water', count: 10, price: 500 },
        { name: 'welchs', count: 10, price: 1000 },
      ],
      storage: [{ name: 'coca-cola', count: 1 }],
      inventory: [],
    },
    {
      type: 'drink/BUYDRINK',
      name: 'coca-cola',
    },
  );
  expect(TestBuyDrink2).toHaveProperty('drinks', [
    { name: 'coca-cola', count: 9, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ]);
  expect(TestBuyDrink2).toHaveProperty('storage', [
    { name: 'coca-cola', count: 2 },
  ]);

  const TestBuyDrink3 = drink(
    {
      drinks: [
        { name: 'coca-cola', count: 10, price: 1300 },
        { name: 'dr-pepper', count: 10, price: 1200 },
        { name: 'fanta', count: 10, price: 800 },
        { name: 'lets-be', count: 10, price: 600 },
        { name: 'sprite', count: 10, price: 900 },
        { name: 'tejava', count: 10, price: 1100 },
        { name: 'water', count: 10, price: 500 },
        { name: 'welchs', count: 10, price: 1000 },
      ],
      storage: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
      ],
      inventory: [],
    },
    {
      type: 'drink/BUYDRINK',
      name: 'coca-cola',
    },
  );
  expect(TestBuyDrink3).toHaveProperty('drinks', [
    { name: 'coca-cola', count: 9, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ]);
  expect(TestBuyDrink3).toHaveProperty('storage', [
    { name: 'coca-cola', count: 2 },
    { name: 'dr-pepper', count: 1 },
    { name: 'fanta', count: 1 },
    { name: 'lets-be', count: 1 },
  ]);

  const TestBuyDrink4 = drink(
    {
      drinks: [
        { name: 'coca-cola', count: 10, price: 1300 },
        { name: 'dr-pepper', count: 10, price: 1200 },
        { name: 'fanta', count: 10, price: 800 },
        { name: 'lets-be', count: 10, price: 600 },
        { name: 'sprite', count: 10, price: 900 },
        { name: 'tejava', count: 10, price: 1100 },
        { name: 'water', count: 10, price: 500 },
        { name: 'welchs', count: 10, price: 1000 },
      ],
      storage: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
      ],
      inventory: [],
    },
    {
      type: 'drink/BUYDRINK',
      name: 'welchs',
    },
  );
  expect(TestBuyDrink4).toHaveProperty('drinks', [
    { name: 'coca-cola', count: 10, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1200 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 9, price: 1000 },
  ]);
  expect(TestBuyDrink4).toHaveProperty('storage', [
    { name: 'coca-cola', count: 1 },
    { name: 'dr-pepper', count: 1 },
    { name: 'fanta', count: 1 },
    { name: 'lets-be', count: 1 },
    { name: 'welchs', count: 1 },
  ]);
});

test('check getDrink action', () => {
  const TestGetDrink1 = drink(
    {
      drinks: [],
      storage: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
      ],
      inventory: [],
    },
    {
      type: 'drink/GETDRINK',
    },
  );
  expect(TestGetDrink1).toHaveProperty('inventory', [
    { name: 'coca-cola', count: 1 },
    { name: 'dr-pepper', count: 1 },
  ]);

  const TestGetDrink2 = drink(
    {
      drinks: [],
      storage: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
      ],
      inventory: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
      ],
    },
    {
      type: 'drink/GETDRINK',
    },
  );
  expect(TestGetDrink2).toHaveProperty('inventory', [
    { name: 'coca-cola', count: 2 },
    { name: 'dr-pepper', count: 2 },
    { name: 'fanta', count: 1 },
    { name: 'lets-be', count: 1 },
  ]);

  const TestGetDrink3 = drink(
    {
      drinks: [],
      storage: [
        { name: 'coca-cola', count: 1 },
        { name: 'dr-pepper', count: 1 },
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
        { name: 'sprite', count: 1 },
        { name: 'tejava', count: 1 },
        { name: 'water', count: 1 },
        { name: 'welchs', count: 1 },
      ],
      inventory: [
        { name: 'fanta', count: 1 },
        { name: 'lets-be', count: 1 },
      ],
    },
    {
      type: 'drink/GETDRINK',
    },
  );
  expect(TestGetDrink3).toHaveProperty('inventory', [
    { name: 'fanta', count: 2 },
    { name: 'lets-be', count: 2 },
    { name: 'coca-cola', count: 1 },
    { name: 'dr-pepper', count: 1 },
    { name: 'sprite', count: 1 },
    { name: 'tejava', count: 1 },
    { name: 'water', count: 1 },
    { name: 'welchs', count: 1 },
  ]);
});
