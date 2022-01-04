import { DefaultRootState } from 'react-redux';
import { GlobalModelState } from './global';
export default interface RootStoreType extends DefaultRootState {
  global: GlobalModelState;
}
