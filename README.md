# Next.js Comprehensive Analytics Dashboard

A modern, responsive analytics dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and integrated with multiple APIs (Weather, News, Finance). This app features drag-and-drop widgets, real-time updates, animations using Lottie/Three.js, and supports multi-language and dark/light themes.

---

## 🧩 Features

✅ **Responsive Layout**
- Works on mobile, tablet, and desktop

✅ **API Integrations**
- **OpenWeatherMap**: Real-time weather + 7-day forecast
- **NewsAPI**: Latest headlines across categories
- **Alpha Vantage**: Stock data and historical charts
- Optional: GitHub/Spotify API integrations

✅ **Advanced UI Components**
- Draggable widgets using `react-dnd`
- Interactive charts using `recharts`
- Animated background using **Lottie** or **Three.js**

✅ **User Experience**
- Theme toggle (dark/light)
- Modal views for detailed content
- Skeleton loaders while data loads
- Toast notifications

✅ **Performance & Optimization**
- Code splitting
- Image optimization with Next.js Image component
- Lazy loading of heavy components
- Caching with `react-query`

✅ **Accessibility**
- ARIA attributes
- Keyboard navigation
- Semantic HTML

✅ **Extra Features**
- Multi-language support (i18n)
- Real-time updates via SSE/WebSocket
- Widget persistence using `localStorage`
- User authentication with **NextAuth.js**

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | [Next.js](https://nextjs.org/ ) |
| Language | TypeScript |
| Styling | Tailwind CSS, SCSS |
| State Management | Redux Toolkit + RTK Query |
| Data Fetching | TanStack Query (`react-query`) |
| Animations | Lottie / Three.js |
| Drag & Drop | `react-dnd` |
| Charts | Recharts |
| Localization | `next-i18next` |
| Auth | NextAuth.js |

---

## 📁 Folder Structure



---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn
- Git (optional)

### Clone the Project

```bash
git clone https://github.com/yourname/your-dashboard.git 
cd your-dashboard
```

### Install Dependencies
```
npm install
# or
yarn install
```

## Set Up Environment Variables
### Create a .env.local file at root:

```
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_api_key
NEXT_PUBLIC_STOCK_API_KEY=your_alphavantage_api_key

```

### 🎯 Usage
#### Start Development Server
```
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 in your browser.

## 📈 Future Enhancements
#### ✅ Add role-based access control
#### 📥 Implement widget persistence using IndexedDB or Firebase
#### 📊 Add more chart types (bar, pie, candlestick)
#### 📲 Mobile menu toggle for sidebar
#### 📈 Dynamic chart update from WebSocket
#### 🎨 Allow users to customize theme colors
