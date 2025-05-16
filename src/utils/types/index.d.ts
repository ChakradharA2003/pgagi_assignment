export interface DragItem {
  type: string;
  id: string;
}

export interface DropTargetProps {
  accepts: string; // e.g., 'widget'
  onDrop: (item: DragItem) => void;
}