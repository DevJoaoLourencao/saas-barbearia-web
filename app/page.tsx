import Image from "next/image";
import BookingItem from "./_components/booking-item";
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

        {/* {confirmedBookings.length > 0 && ( */}
        <>
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>

          {/* AGENDAMENTO */}
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {/* {confirmedBookings.map((booking) => ( */}
            <BookingItem
              key="123"
              booking={JSON.parse(
                JSON.stringify({
                  id: "123",
                  date: new Date(),
                  service: {
                    name: "Corte de cabelo",
                    price: 100,
                    barbershop: {
                      name: "Barbearia do João",
                      imageUrl:
                        "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
                      address: "Rua da Barbearia, 123",
                      phones: ["(11) 99999-9999", "(11) 99999-9999"],
                      description: "Barbearia do João",
                    },
                  },
                  barbershop: {
                    name: "Barbearia do João",
                    imageUrl:
                      "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
                    address: "Rua da Barbearia, 123",
                    phones: ["(11) 99999-9999", "(11) 99999-9999"],
                    description: "Barbearia do João",
                  },
                }),
              )}
            />
            {/* ))} */}
          </div>
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default Home;
