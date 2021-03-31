/// <reference types="react" />
import './icon.module.scss';
export interface IconProps {
    fill?: string;
    name: string;
    klass?: string;
    size?: 'xl' | 'large' | 'medium' | 'small' | 'mini';
}
export declare function Icon(props: IconProps): JSX.Element;
export default Icon;
