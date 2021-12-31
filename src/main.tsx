// 应用最外层
import React, { Component } from 'react';
import { Redirect } from 'umi';

// export default function Main(props: any) {
//   const item: string = localStorage.getItem('isLogin') || '';
//   if (Number(item) !== 1) {
//     return <Redirect to="/login" />;
//   }
//   return props.children;
// }

class Main extends Component {
  public render(): React.ReactNode {
    const item: string = localStorage.getItem('isLogin') || '';
    if (Number(item) !== 1) {
      return <Redirect to="/login" />;
    }
    return this.props.children;
  }
}

export default Main;
