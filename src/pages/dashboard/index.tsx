import React from 'react';
import WeatherWidget from '../../components/widgets/WeatherWidget';
import NewsWidget from '../../components/widgets/NewsWidget';
import StockChartWidget from '../../components/widgets/StockChartWidget';
import DraggableWidget from '../../components/widgets/DraggableWidget';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import LottieAnimation from '@/components/animations/LottieAnimation';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto relative">
        <Header />

        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <LottieAnimation animationPath="/lottie/weather-sunny.json" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
          <DraggableWidget>
            <WeatherWidget city="London" />
          </DraggableWidget>

          <DraggableWidget>
            <NewsWidget category="technology" />
          </DraggableWidget>

          <DraggableWidget>
            <StockChartWidget symbol="AAPL" />
          </DraggableWidget>
        </div>
      </main>
    </div>
  );
}