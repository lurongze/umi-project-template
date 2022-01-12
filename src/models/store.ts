import { DefaultRootState } from 'react-redux';
import { GlobalModelState } from './global';
import { BreadcrumbModelState } from './breadcrumb';
export default interface RootStoreType extends DefaultRootState {
  global: GlobalModelState;
  breadcrumb: BreadcrumbModelState;
}
