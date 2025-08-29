import Hero from '@/components/hero';
import reliabilitySrc from '/public/reliability.jpg';

export default function Page() {
  return (
    <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Reliability" />
  );
}
