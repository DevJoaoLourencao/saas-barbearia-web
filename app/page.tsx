import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import BarbershopItem from "./_components/barbershop-item";
import BookingItem from "./_components/booking-item";
import Header from "./_components/header";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { quickSearchOptions } from "./_constants/search";
import { db } from "./_lib/prisma";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* {confirmedBookings.length > 0 && ( */}
        <>
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {/* {confirmedBookings.map((booking) => ( */}
            <BookingItem
              key={"123"}
              booking={JSON.parse(
                JSON.stringify({
                  id: "123",
                  date: new Date(),
                  service: {
                    id: "123",
                    name: "Corte de cabelo",
                    barbershop: {
                      id: "123",
                      name: "Barbearia do João",
                      imageUrl: "https://via.placeholder.com/150",
                      address: "Rua das Flores, 123",
                      phones: ["(11) 99999-9999"],
                    },
                  },
                }),
              )}
            />
            {/* ))} */}
          </div>
        </>
        {/* )} */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
