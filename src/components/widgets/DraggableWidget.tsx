import React from 'react';
import { useDrag } from 'react-dnd';

interface DragItem {
  type: string;
  id: string;
}

export default function DraggableWidget({ children }: { children: React.ReactNode }) {
  const [{ isDragging }, drag] = useDrag<
    DragItem,
    unknown,
    { isDragging: boolean }
  >(() => ({
    type: 'widget',
    item: { type: 'widget', id: Math.random().toString() },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (divRef.current) {
      drag(divRef.current);
    }
  }, [drag]);

  return (
    <div ref={divRef} className={`p-4 border rounded shadow ${isDragging ? 'opacity-50' : ''}`}>
      {children}
    </div>
  );
}