import { useEffect } from 'react';

const useWebSocketUpdates = (onUpdate: (data: any) => void) => {
  useEffect(() => {
    const ws = new WebSocket('wss://ws.example.com/live-updates');

    ws.onmessage = (event) => {
      onUpdate(JSON.parse(event.data));
    };

    return () => {
      ws.close();
    };
  }, [onUpdate]);
};

export default useWebSocketUpdates;