const PUTMONEY = 'money/PUTMONEY' as const;

export const putMoney = (_money: number) => ({ type: PUTMONEY, money: _money });

type MoneyAction = ReturnType<typeof putMoney>;

export type MoneyState = {
  leftMoney: number;
  useMoney: number;
  returnMoney: number;
};

const initialState: MoneyState = {
  leftMoney: 20000,
  useMoney: 0,
  returnMoney: 0,
};

function money(state: MoneyState = initialState, action: MoneyAction) {
  switch (action.type) {
    case PUTMONEY:
      return {
        ...state,
        leftMoney: state.leftMoney - action.money,
        useMoney: state.useMoney + action.money,
      };
    default:
      return state;
  }
}

export default money;
