/// <reference types="react" />
import './chat-box.module.scss';
export interface ChatBoxProps {
    bgColor?: string;
    openText?: string;
    closeText?: string;
    openIcon?: string;
    closeIcon?: string;
}
export declare function ChatBox(props: ChatBoxProps): JSX.Element;
export default ChatBox;
