import { history } from 'umi';

export default function Login() {
  return (
    <h1
      onClick={() => {
        localStorage.setItem('isLogin', '1');
        history.push('/index');
      }}
    >
      我是登陆页面，点击我登陆
    </h1>
  );
}
