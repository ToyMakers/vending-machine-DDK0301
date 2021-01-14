const PUTMONEY = 'money/PUTMONEY' as const;
const PAYMONEY = 'money/PAYMONEY' as const;
const BACKMONEY = 'money/BACKMONEY' as const;
const TAKEMONEY = 'money/TAKEMONEY' as const;

export const putMoney = (_money: number) => ({ type: PUTMONEY, money: _money });
export const payMoney = (_money: number) => ({ type: PAYMONEY, money: _money });
export const backMoney = () => ({
  type: BACKMONEY,
});
export const takeMoney = () => ({
  type: TAKEMONEY,
});

type MoneyAction =
  | ReturnType<typeof putMoney>
  | ReturnType<typeof payMoney>
  | ReturnType<typeof backMoney>
  | ReturnType<typeof takeMoney>;

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
    case PAYMONEY:
      return {
        ...state,
        useMoney: state.useMoney - action.money,
      };
    case BACKMONEY:
      return {
        ...state,
        useMoney: 0,
        returnMoney: state.returnMoney + state.useMoney,
      };
    case TAKEMONEY:
      return {
        ...state,
        leftMoney: state.leftMoney + state.returnMoney,
        returnMoney: 0,
      };
    default:
      return state;
  }
}

export default money;
