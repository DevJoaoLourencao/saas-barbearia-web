import Image from "next/image";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = async () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João, bem vindo!</h2>
        <p>
          <span className="capitalize">Segunda-feira, 10</span>
          <span>&nbsp;de&nbsp;</span>
          Fevereiro
        </p>

        {/* BUSCA */}
        <div className="mt-6">
          <Search />
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
