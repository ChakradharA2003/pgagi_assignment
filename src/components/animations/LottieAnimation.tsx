import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

export default function LottieAnimation({ animationPath }: { animationPath: string }) {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    import(`@/../public${animationPath}`).then((data) => {
      setAnimationData(data.default);
    });
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}