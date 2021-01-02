import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className="grid w-full grid-cols-1 grid-rows-3 mt-10 md:mt-24 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          href={'/nextjs'}
          imgSrc={'/img/nextjs.svg'}
          layoutId={'nextjs-logo'}
        />

        <Card
          href={'/tailwind'}
          imgSrc={'/img/tailwind.svg'}
          layoutId={'tailwind-logo'}
        />

        <Card
          href={'/framermotion'}
          imgSrc={'/img/framermotion.svg'}
          layoutId={'framermotion-logo'}
        />
      </div>
    </div>
  );
};

export default Home;
