const BUYDRINK = 'drink/BUYDRINK' as const;
const GETDRINK = 'drink/GETDRINK' as const;

export const buyDrink = (_name: string) => ({
  type: BUYDRINK,
  name: _name,
});

export const getDrink = () => ({
  type: GETDRINK,
});

type DrinkAction = ReturnType<typeof buyDrink> | ReturnType<typeof getDrink>;

export type DrinkInfo = {
  readonly name: string;
  count: number;
  readonly price?: number;
};

export type DrinkState = {
  drinks: DrinkInfo[];
  storage: DrinkInfo[];
  inventory: DrinkInfo[];
};

const initialState: DrinkState = {
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
};

function money(state: DrinkState = initialState, action: DrinkAction) {
  switch (action.type) {
    case BUYDRINK: {
      const changeDrinks = state.drinks.map(drink =>
        drink.name === action.name
          ? { ...drink, count: drink.count - 1 }
          : { ...drink },
      );
      const storageIndex = state.storage.findIndex(
        drink => drink.name === action.name,
      );
      if (storageIndex !== -1) {
        const newStorage = state.storage;
        newStorage[storageIndex].count += 1;
        return {
          ...state,
          drinks: [...changeDrinks],
          storage: [...newStorage],
        };
      }
      return {
        ...state,
        drinks: [...changeDrinks],
        storage: [...state.storage, { name: action.name, count: 1 }],
      };
    }
    case GETDRINK: {
      let addInventory = state.storage;
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
        storage: [],
        inventory: [...newinventory, ...addInventory],
      };
    }
    default:
      return state;
  }
}

export default money;
