'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// This file will only run on the client (thanks to 'use client')
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

interface LottieAnimationProps {
  animationPath: string;
}

export default function LottieAnimation({ animationPath }: LottieAnimationProps) {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    // Dynamically load JSON animation data
    import(`/src/lottie1${animationPath}`).then((data) => {
      setAnimationData(data.default);
    });
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}