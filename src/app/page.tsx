
export default function Home() {
  return (
    <div className="flex justify-center w-full">

      <div className="flex flex-col gap-6 bg-white mt-28 p-10 pt-10 pb-10 rounded-lg">
        <button className="bg-blue-600 p-2 ps-5 pe-5 rounded-lg text-white">
          REJESTRACJA WIZYTY
        </button>
        <div>
          <div className="font-bold ">GODZINY PRACY</div>
          <div>
            <div>PONIEDZIAŁEK</div>
            <div>WTOREK</div>
            <div>ŚRODA</div>
            <div>CZWARTEK</div>
            <div>PIĄTEK</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
