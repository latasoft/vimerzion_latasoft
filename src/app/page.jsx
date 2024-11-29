import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Home() {
  return (
    <>
      <div className={` absolute top-0 left-0 bg-[url('/images/fondo_a.jpg')] bg-no-repeat bg-cover bg-center inset-0 `} />
      <div className={` absolute top-0 left-0 backdrop-blur-sm w-full h-full `} />
      <div className={` absolute top-0 left-0 bg-[linear-gradient(to_top,#1F1363,_#3A1E96,_#562BC8)] opacity-60 backdrop-blur-sm w-full h-full `} />

      <main className={` relative `}>

        <div className={` max-w-4xl mx-auto `}>
          <div className={` text-center `}>
            <img className={`  w-32 h-auto mx-auto mb-5 `} src={logo.src} alt='' />
            <p className={` font-Inter font-bold uppercase text-4xl text-white tracking-widest `}>Vimerzion</p>
            <p className={` font-Inter font-normal uppercase text-lg text-white tracking-widest `}>Realidad Virtual</p>
            {/*

            <p className={` font-Inter font-light text-lg text-white tracking-widest mt-16 indent-5 hyphens-auto text-left `}>
              Descubre la tecnología Háptica, una experiencia emocionante y revolucionaria que te sumerge en un mundo de sensaciones palpables. Mediante el uso de vibraciones sutiles, movimientos precisos y retroalimentación táctil, esta tecnología te permite sentir y experimentar visualmente cualquier cosa.
            </p>
            <p className={` font-Inter font-light text-lg text-white tracking-widest mt-5 indent-5 hyphens-auto text-left `}>
              Ya sea que estés explorando un videojuego, un metaverso o incluso participando en un entrenamiento virtual, la tecnología háptica te sumergirá por completo.
            </p>
            */}
            <p className={` font-Inter font-light text-3xl text-white text-opacity-70 tracking-wider leading-relaxed mt-24 text-left hyphens-auto `}>
              En Vimerzion, lideramos el futuro de los eventos con experiencias de realidad virtual inmersivas. Ya sea para empresas o eventos particulares, transformamos tus ideas en soluciones innovadoras que cautivan y sorprenden
            </p>

            <div className={` mt-24 flex flex-col md:flex-row gap-8 `}>
              <div>
                <h3 className={` text-left font-Inter font-bold uppercase text-xl text-white tracking-widest `}>Servicios Empresas</h3>
                <p className={` font-Inter font-light text-2xl text-white text-opacity-70 tracking-wider leading-relaxed mt-3 text-left hyphens-auto `}>
                  Eventos corporativos, activaciones publicitarias, team building, etc. Experiencias VR destacadas.</p>
              </div>
              <div>
                <h3 className={` text-left font-Inter font-bold uppercase text-xl text-white tracking-widest `}>Servicios Particulares</h3>
                <p className={` font-Inter font-light text-2xl text-white text-opacity-70 tracking-wider leading-relaxed mt-3 text-left hyphens-auto `}>
                  Fiestas de cumpleaños, matrimonios, graduaciones, bautizos, uso en casa, etc. Experiencias VR destacadas.</p>
              </div>
            </div>


            <h2 className={` mt-24 font-Inter font-bold uppercase text-xl text-white tracking-widest `}>Cotiza aquí</h2>
            <p className={` mt-3 flex flex-row items-center justify-center font-Oswald font-medium text-3xl uppercase tracking-normal text-center p-0 m-0 `} >
              <span className={` transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_0.6rem_rgba(255,255,255,255.25)] `} >
                <a href='empresasproductos/' className={` -mr-[0.81rem] px-10 py-3 inline-block text-black text-opacity-40 hover:text-opacity-80 bg-cyan-400 hover:bg-cyan-100 [clip-path:_polygon(0_0,calc(100%_-_1.62rem)_0,100%_100%,calc(0%_+_1.62rem)_100%)] cursor-pointer transition-all duration-300 ease-in-out `} >Empresas</a>
              </span>
              <span className={` transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_0.6rem_rgba(255,255,255,255.25)] `} >
                <a href='' className={` -ml-[0.81rem] px-10 py-3 inline-block text-white text-opacity-50 hover:text-opacity-100 bg-fuchsia-600 hover:bg-fuchsia-500 [clip-path:_polygon(0_0,calc(100%_-_1.62rem)_0,100%_100%,calc(0%_+_1.62rem)_100%)] cursor-pointer transition-all duration-300 ease-in-out `} >Particulares</a>
              </span>
            </p>

          </div>
        </div>
      </main>
    </>
  );
}
