import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/modules';
import { takeMoney } from '@/modules/money';
import { getDrink } from '@/modules/drink';
import '@scss/commons/ReturnDoor.scss';

enum Door {
  DRINK = 'drink',
  MONEY = 'money',
}

export interface ReturnDoorProps {
  /** 문 종류  */
  doorType?: string;
}

export function ReturnDoor({ doorType }: ReturnDoorProps) {
  const dispatch = useDispatch();
  const { returnMoney, storage } = useSelector((state: RootState) => ({
    returnMoney: state.money.returnMoney,
    storage: state.drink.storage,
  }));
  switch (doorType) {
    case Door.DRINK: {
      return (
        <div
          className={classNames(
            'returndoor',
            Door.DRINK,
            storage.length !== 0 ? 'exsit' : 'noexsit',
          )}
        >
          <button
            type="button"
            disabled={storage.length === 0}
            onClick={() => {
              dispatch(getDrink());
            }}
          >
            Push
          </button>
        </div>
      );
    }
    case Door.MONEY: {
      return (
        <div
          className={classNames(
            'returndoor',
            Door.MONEY,
            returnMoney ? 'exsit' : 'noexsit',
          )}
        >
          <button
            type="button"
            disabled={returnMoney === 0}
            onClick={() => {
              dispatch(takeMoney());
            }}
          >
            Push
          </button>
        </div>
      );
    }
    default:
      return (
        <div className="returndoor">
          <button type="button">Push</button>
        </div>
      );
  }
}

ReturnDoor.defaultProps = {
  doorType: 'none',
} as Partial<ReturnDoorProps>;
