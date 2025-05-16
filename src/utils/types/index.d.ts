export interface DragItem {
  type: string;
  id: string;
}

export interface DropTargetProps {
  accepts: string; // e.g., 'widget'
  onDrop: (item: DragItem) => void;
}

declare module 'lottie-react' {
  import { FC } from 'react';
  export { default as Lottie } from 'react-lottie-component';
  export default FC<{
    animationData: object;
    loop?: boolean;
    autoplay?: boolean;
    style?: React.CSSProperties;
  }>;
}