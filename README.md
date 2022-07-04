<h1>:: 리팩토링 </h2>

- 스타일 컴포넌트

## 1. 스타일 컴포넌트

### 1.1. 설치

```shell
npm i styled-components
```

### LoginForm - 스타일 리팩토링

```jsx
const Form = styled.form`
  margin: 5% 0;
  position: absolute;
  width: 70%;
  height: 800px;
  left: 15%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  padding: 10%;
  display: block;
`;
const Button = styled.button`
  margin-top: 20px;
  height: 15%;
  width: 40%;
  font-size: 24px;
`;
```
