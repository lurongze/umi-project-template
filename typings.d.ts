/* eslint-disable no-undef */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'JSX';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
