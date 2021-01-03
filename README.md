# 🥤 Vending Machine 🥤

![React](https://img.shields.io/badge/React-61Dafb?style=flat-square&logo=React&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-%233178c6?style=flat-square&logo=TypeScript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-%23764abc?style=flat-square&logo=Redux&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-%23db7093?style=flat-square&logo=Sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-%23C21325?style=flat-square&logo=Jest&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-%23ff4785?style=flat-square&logo=Storybook&logoColor=white)

간단한 자판기 프로젝트입니다.  
`TypeScript`와 `Jest`를 주로 공부하기 위한 프로젝트입니다.

## 요구사항

- 지갑의 코인은 [50, 100, 500, 1000]단위로 사용할 수 있다.
- 음료는 [이름 / 재고 / 가격] 정보를 가지고 있다.
- 지갑의 코인을 클릭 또는 자판기에 드래그하면 자판기에 표시된 금액이 증가한다.
- 반환 레버를 클릭하면 자판기에 들어간 모든 코인은 반환구에 쌓이고 자판기에 표시된 금액이 0이 된다.
- 동전 반환구를 클릭하면 쌓여있던 코인은 모두 지갑으로 되돌아 간다.
- 자판기의 금액을 초과하지 않는 금액의 음료만 선택할 수 있다.
- 재고가 없는 음료는 품절 처리되고 선택할 수 없다.
- 선택한 음료는 문을 클릭하기 전까지는 기계안에 있고, 문을 클릭하면 선택했던 음료를 모두 인벤토리에 담을 수 있다.
