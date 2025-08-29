import Hero from '@/components/hero';
import scaleSrc from '/public/scale.jpg';

export default function Page() {
  return <Hero imgUrl={scaleSrc} altTxt="Scale" content="Scale" />;
}
