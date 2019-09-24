import BaseDatePickerViewProps from '../date-picker-view/PropsType';

type getContainerFunc = () => HTMLElement;

export default interface BaseDatePickerProps extends BaseDatePickerViewProps {
  visible?: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  onOk?: (value?: object) => void;
  onCancel?: () => void;
  maskClosable?: boolean;
  getContainer?: HTMLElement | getContainerFunc;
  children?: any;
  disableBodyScroll: boolean;
}
