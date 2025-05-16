import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

type Article = {
  title: string;
  url: string;
};

const fetchTopHeadlines = async (category: string): Promise<Article[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const response = await axios.get(`https://newsapi.org/v2/top-headlines `, {
    params: {
      category,
      apiKey: API_KEY,
    },
  });
  // Ensure the result is always an array
  return Array.isArray(response.data.articles) ? response.data.articles : [];
};

export default function NewsWidget({ category }: { category: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchTopHeadlines(category),
  });

  if (isLoading) {
    return (
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-4 animate-pulse">
        <h3 className="text-lg font-semibold mb-2 capitalize">{category}</h3>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-4/5"></div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-4">
      <h3 className="text-lg font-semibold capitalize">{category}</h3>
        <ul>
          {(Array.isArray(data) ? data : []).slice(0, 5).map((article, idx) => (
            <li key={idx} className="mb-2">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}