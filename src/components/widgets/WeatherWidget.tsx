import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Lottie from 'lottie-react';
import weatherSunny from '../../lottie1/lottie/weather-cloudy.json';
import weatherRain from '../../lottie1/lottie/weather-rain.json';
import weatherCloudy from '../../lottie1/lottie/weather-sunny.json';
import weatherDefault from '../../lottie1/lottie/weather-default.json';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};

const getAnimation = (description: string) => {
  if (description.includes('rain')) return weatherRain;
  if (description.includes('cloud')) return weatherCloudy;
  if (description.includes('clear')) return weatherSunny;
  return weatherDefault;
};

export default function WeatherWidget({ city }: { city: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherByCity(city),
  });

  if (isLoading || !data) {
    return (
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-4 animate-pulse">
        <h3 className="text-lg font-semibold mb-2">{city}</h3>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/ ${weather[0].icon}@2x.png`;
  const animationData = getAnimation(weather[0].description);

  return (
    <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105">
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <Lottie animationData={getAnimation(weather[0].description)} loop={true} autoplay={true} />
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
          <span>{name}</span>
          <img src={iconUrl} alt={weather[0].description} width={32} height={32} />
        </h3>
        <p className="text-2xl font-bold">{Math.round(main.temp)}°C</p>
        <p className="capitalize text-sm opacity-80">{weather[0].description}</p>
        <div className="mt-2 text-sm opacity-70">
          <p>Humidity: {main.humidity}%</p>
          <p>Wind: {wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}