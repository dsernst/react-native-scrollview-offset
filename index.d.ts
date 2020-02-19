import { ReactNode } from 'react';
import { ScrollViewProps } from 'react-native';
declare function ScrollViewOffset(props: ScrollViewProps & {
    children: ReactNode;
    startAtEnd?: boolean;
}): JSX.Element;
export default ScrollViewOffset;
