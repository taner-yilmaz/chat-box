import './chatbox-native-js.module.scss';
declare global {
    interface Window {
        ChatboxNativeJs: any;
    }
}
export interface ChatboxNativeJsProps {
    options?: any;
    element: any;
}
export declare function ChatboxNativeJs(props: ChatboxNativeJsProps): void;
export default ChatboxNativeJs;
