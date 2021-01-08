const GETDRINK = 'drink/GETDRINK' as const;

export const getDrink = (_drinks: DrinkInfo[]) => ({
  type: GETDRINK,
  drinks: _drinks,
});

type DrinkAction = ReturnType<typeof getDrink>;

export type DrinkInfo = {
  readonly name: string;
  count: number;
  readonly price?: number;
};

export type DrinkState = {
  drinks: DrinkInfo[];
  inventory: DrinkInfo[];
};

const initialState: DrinkState = {
  drinks: [
    { name: 'coca-cola', count: 10, price: 1300 },
    { name: 'dr-pepper', count: 10, price: 1000 },
    { name: 'fanta', count: 10, price: 800 },
    { name: 'lets-be', count: 10, price: 600 },
    { name: 'sprite', count: 10, price: 900 },
    { name: 'tejava', count: 10, price: 1100 },
    { name: 'water', count: 10, price: 500 },
    { name: 'welchs', count: 10, price: 1000 },
  ],
  inventory: [],
};

function money(state: DrinkState = initialState, action: DrinkAction) {
  switch (action.type) {
    case GETDRINK: {
      let addInventory = action.drinks;
      const newinventory = state.inventory.map(drink => {
        const addDrinkIndex = addInventory.findIndex(newItem => {
          return newItem.name === drink.name;
        });
        if (addDrinkIndex !== -1) {
          const addDrink = addInventory[addDrinkIndex];
          addInventory = [
            ...addInventory.slice(0, addDrinkIndex),
            ...addInventory.slice(addDrinkIndex + 1),
          ];
          return { ...drink, count: drink.count + addDrink.count };
        }
        return drink;
      });
      return {
        ...state,
        inventory: [...newinventory, ...addInventory],
      };
    }
    default:
      return state;
  }
}

export default money;
