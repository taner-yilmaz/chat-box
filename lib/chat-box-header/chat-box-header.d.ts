/// <reference types="react" />
import './chat-box-header.module.scss';
export interface ChatBoxHeaderProps {
    openDebugger: Function;
    onClose: Function;
}
export declare function ChatBoxHeader(props: ChatBoxHeaderProps): JSX.Element;
export default ChatBoxHeader;
