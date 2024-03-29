# vite react 專案

## 目錄

- [環境](#環境)
- [執行](#執行)
- [專案結構](#專案結構)
- [狀態管理 - store](#狀態管理---store)
- [React 注意事項](#react-注意事項)
- [i18n](#i18n)
- [其他](#其他)

---

## 環境

### Node 版本

使用 Node 16.20.2 以上 的版本

再用 Node 16.20.2 以上 去裝 pnpm

```bash
$ npm install -g pnpm
```

---

## 執行

script 命令

### 安裝 套件

```bash
$ pnpm install
```

### Husky Install

```bash
$ pnpm prepare
```

### 開發

跑本地開發

```bash
$ pnpm dev
```

也要打開 gulp task 到背景工作

```bash
$ pnpm gulp
```

### 打包

會生成到 dist 資料夾中

```bash
$ pnpm build
```

### 預覽

啟動一個本地靜態 Web 伺服器，運行 dist 資料夾，來預覽

```bash
$ pnpm preview
```

### Eslint

lint 檢查

```bash
$ pnpm lint
```

lint + fix

```bash
$ pnpm lint:fix
```

---

## 專案結構

#### 資料夾說明

```
Root
  ├── public                           # 公用文件，如網站圖示（favicon.ico）等
  ├── src                              # 主要原始碼目錄
  |   └── assets                       # 靜態資源文件，如圖片、字體等
  |   └── components                   # 可重複使用的 React 元件
  |   |   |                              元件命名 大駝峰
  |   |   |                              HOC => "with" 開頭 ex. withBaseForm,withBaseTable
  |   └── consts                       # 存放常數或設定文件，用於整個應用的常數定義
  |   └── helpers                      # 存放共用業務邏輯模塊，具有業務邏輯
  |   └── hooks                        # 自訂 React 鉤子函數
  |   |   |                              檔案命名 小駝峰，"use" 開頭 ex. useUpload
  |   |   └── useAppDispatch           # 拿到 dispatch 的 hoook
  |   |   └── useAppSelector           # 拿取 redux store 的 hook
  |   └── i18n                         # 存放 多國語系
  |   └── layouts                      # 存放 layout
  |   └── pages                        # 頁面
  |   └── plugins                      # 與特定函式庫相關
  |   └── services                     # 存放與後端的 API 接口
  |   └── store                        # 全域狀態管理的程式碼
  |   └── styles                       # 存放全域樣式檔案。
  |   |   |                              檔案命名 小駝峰
  |   |   └── global.scss              # 全域 scss 樣式設定
  |   |   └── variables.scss           # 全域 scss 變數設定
  |   |   └── reset.scss               # 重置樣式文件，用於重置瀏覽器預設樣式，以確保跨瀏覽器一致性。
  |   └── types                        # 存放全域 TypeScript 類型宣告檔
  |   └── utils                        # 存放通用的工具函數/模塊，不具有業務邏輯
```

---

## 狀態管理 - store

在 src 資料夾下的 react 元件中，我們用 hook 來載入 state 和 dispatch

比如用 **useAppSelector** hook 來載入 state

```javascript
import useAppSelector from '@/hooks/useAppSelector';

function About() {
  const auth = useAppSelector((state) => state.auth);
  // ....
}
```

比如用 **useAppDispatch** hook 來拿到 dispatch

```javascript
import useAppDispatch from '@/hooks/useAppDispatch';

function About() {
  const dispatch = useAppDispatch();
  // ....
}
```

非 react 元件時，直接載入 store 來使用

```javascript
import store from '@/store';

const rootState = store.getState();
store.dispatch(logout());
```

---

## React 注意事項

- componentDidMount 轉換 useEffect
  若想模擬 react componentDidMount 生命週期，掛載後只觸發一次，使用以下方法

  ```javascript
  const isMountRef = useRef(false);
  useEffect(() => {
    if (isMountRef.current) return;

    initGlobal();

    isMountRef.current = true;
  }, []);
  ```

---

## i18n

元件中 i18n hook

```javascript
import { useTranslation } from 'react-i18next';
// ...
function about() {
  const { t } = useTranslation();
  // ...
}
```

非元件中，使用 i18n

```javascript
import i18n from '@/i18n';
// ...
const { t } = i18n;
```

---

## 其他

其他註記事項

### 約定式提交 Conventional Commits

#### type (類型)

| 類型     | 說明                                                                            |
| -------- | ------------------------------------------------------------------------------- |
| feat     | 功能的變動，比如 新增 修改 刪除... 等等的                                       |
| fix      | 修復 bug                                                                        |
| docs     | 文件更改                                                                        |
| style    | coding style 的調整，例如：空白、分號、空格等，不影響程式碼的內容               |
| refactor | 重構現有程式碼，不屬於新增新功能或是修 bug                                      |
| perf     | 提升效能的改進                                                                  |
| test     | 新增或修改測試                                                                  |
| build    | 和打包或外部依賴相關，或輔助工具的修改，例如：npm、gulp、broccoli               |
| ci       | 與 CI 設定檔或 script 相關的修改，例如：Travis、Circle、BrowserStack、SauceLabs |
| chore    | 其他，並且也不會修改原始碼或是測試，例如：storybook 的新增或變更                |
| revert   | 回復前一個提交的 commit                                                         |

### Vscode 套件推薦

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 套件版本

| 套件                                            | 版本 |
| ----------------------------------------------- | ---- |
| React                                           | 18   |
| typescript                                      | 5    |
| [React Router](https://reactrouter.com/en/main) | 6    |
| [lodash](https://lodash.com/docs/4.17.15)       | 4    |

### 連結

- [React Hook](https://zh-hant.legacy.reactjs.org/docs/hooks-intro.html)
- [Vite](https://cn.vitejs.dev/guide/)
- [Airbnb JavaScript 风格指南](https://lin-123.github.io/javascript/)
- [語意化版本 2.0.0](https://semver.org/lang/zh-TW/)
- [RESTful API](https://tw.alphacamp.co/blog/rest-restful-api)
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
