import money, * as action from './money';

test('check existence action', () => {
  const expectedActions = [
    {
      type: 'money/PUTMONEY',
      money: 0,
    },
    {
      type: 'money/PAYMONEY',
      money: 0,
    },
    {
      type: 'money/BACKMONEY',
    },
    {
      type: 'money/TAKEMONEY',
    },
  ];
  const actions = [
    action.putMoney(0),
    action.payMoney(0),
    action.backMoney(),
    action.takeMoney(),
  ];
  expect(actions).toEqual(expectedActions);
});

test('check putMoney action', () => {
  const TestPutMoney = money(
    {
      leftMoney: 1000,
      useMoney: 0,
      returnMoney: 0,
    },
    {
      type: 'money/PUTMONEY',
      money: 500,
    },
  );
  expect(TestPutMoney).toHaveProperty('leftMoney', 500);
  expect(TestPutMoney).toHaveProperty('useMoney', 500);
});

test('check payMoney action', () => {
  const TestPutMoney = money(
    {
      leftMoney: 0,
      useMoney: 1000,
      returnMoney: 0,
    },
    {
      type: 'money/PAYMONEY',
      money: 500,
    },
  );
  expect(TestPutMoney).toHaveProperty('useMoney', 500);
});

test('check backMoney action', () => {
  const TestPutMoney1 = money(
    {
      leftMoney: 0,
      useMoney: 1000,
      returnMoney: 0,
    },
    {
      type: 'money/BACKMONEY',
    },
  );
  expect(TestPutMoney1).toHaveProperty('useMoney', 0);
  expect(TestPutMoney1).toHaveProperty('returnMoney', 1000);

  const TestPutMoney2 = money(
    {
      leftMoney: 0,
      useMoney: 1000,
      returnMoney: 500,
    },
    {
      type: 'money/BACKMONEY',
    },
  );
  expect(TestPutMoney2).toHaveProperty('useMoney', 0);
  expect(TestPutMoney2).toHaveProperty('returnMoney', 1500);
});

test('check takeMoney action', () => {
  const TestPutMoney = money(
    {
      leftMoney: 0,
      useMoney: 0,
      returnMoney: 1000,
    },
    {
      type: 'money/TAKEMONEY',
    },
  );
  expect(TestPutMoney).toHaveProperty('returnMoney', 0);
  expect(TestPutMoney).toHaveProperty('leftMoney', 1000);
});
