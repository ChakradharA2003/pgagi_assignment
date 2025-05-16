import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StockDataPoint {
  date: string;
  adjustedClose: number;
}

interface Props {
  symbol: string;
}

export default function StockChartWidget({ symbol }: Props) {
  // Sample data — replace with real API call
  const sampleData = [
    { date: '2025-05-01', adjustedClose: 180 },
    { date: '2025-05-02', adjustedClose: 185 },
    { date: '2025-05-03', adjustedClose: 190 },
    { date: '2025-05-04', adjustedClose: 188 },
    { date: '2025-05-05', adjustedClose: 192 },
  ];

  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-2">📈 {symbol} Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={sampleData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="adjustedClose" stroke="#8884d8" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}