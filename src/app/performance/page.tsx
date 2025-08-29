import Hero from '@/components/hero';
import React from 'react';
import performanceSrc from '/public/performance.jpg';

export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altTxt="Performance" content="Performance" />
  );
}
