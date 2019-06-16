import alert from './alert';
import SFCModal from './Modal';
import operation from './operation';
import prompt from './prompt';

const Modal: any = SFCModal;

Modal.alert = alert;
Modal.prompt = prompt;
Modal.operation = operation;

export default Modal;
