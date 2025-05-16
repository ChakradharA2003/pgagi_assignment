import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// === Types ===
export interface WeatherData {
  name: string;
  main: { temp: number };
  weather: Array<{ description: string }>;
}

export interface NewsArticle {
  title: string;
  url: string;
  description?: string;
}

export interface StockDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjustedClose: number;
  volume: number;
}

// === Helpers ===
const parseStockData = (rawData: any): StockDataPoint[] => {
  const timeSeries = rawData['Time Series (Daily)'] || {};
  return Object.keys(timeSeries).slice(0, 30).map((date) => ({
    date,
    open: parseFloat(timeSeries[date]['1. open']),
    high: parseFloat(timeSeries[date]['2. high']),
    low: parseFloat(timeSeries[date]['3. low']),
    close: parseFloat(timeSeries[date]['4. close']),
    adjustedClose: parseFloat(timeSeries[date]['5. adjusted close']),
    volume: parseInt(timeSeries[date]['6. volume']),
  }));
};

// --- Weather ---
const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};

// --- News ---
const fetchTopHeadlines = async (category: string): Promise<NewsArticle[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?category= ${category}&language=en&apiKey=${API_KEY}`
  );
  return res.data.articles;
};

// --- Stock ---
const fetchStockData = async (symbol: string): Promise<StockDataPoint[]> => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol= ${symbol}&outputsize=compact&apikey=demo`
  );
  const data = await res.json();
  return parseStockData(data);
};

// === React Query Hooks ===

export const useWeatherData = (city: string) =>
  useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherByCity(city),
  });

export const useNewsData = (category: string) =>
  useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchTopHeadlines(category),
  });

export const useStockData = (symbol: string) =>
  useQuery({
    queryKey: ['stock', symbol],
    queryFn: () => fetchStockData(symbol),
  });