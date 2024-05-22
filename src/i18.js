import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-locize-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
    resources: {
      en: {
        translation: {
          headline: "About us",
          homepage: "OilTarator s.r.o",
          description1:
            "We are a trading company operating extensively in the technical vegetable oil trade industry.",
          description2:
            "Our product database includes oils in a wide range of species, from pure vegetable oils:",
          description3:
            "to oils with increased acidity, and mixtures of vegetable oils prepared especially at the customer's request, under specific parameters.",
          description4:
            "Oiltarator s.r.o. has modern technical facilities with a storage capacity of up to 1,300 tons. Our base is located in Ostrava, approx. 20 km to the Polish border, close to the motorway exit, which makes organizing transport much easier. As a company, we also provide goods storage and reloading services.",
          description5:
            "We invite you to cooperate. We will be happy to answer all your questions.",
          oil1: "soybean",
          oil2: "sunflower",
          oil3: "rapeseed",
          nav1: "Home",
          nav2: "Contact",
          nav3: "Gallery",
          contact: "Send us a message!",
          contacth1: "Where can you find us?",
          footer: "Designed by CheeseField",
          ceo: "Chief Executive Officer",
          message:
            "If you are interested in any of our services or have any questions, do not hesitate to contact us. We will be happy to answer all your questions.",
        },
      },
      cz: {
        translation: {
          headline: "O nás",
          homepage: "OilTarator s.r.o",
          description1:
            "Představuje se Vám,obchodní firma s širokým záběrem na trhu z oleji technickými rostlinného původu.",
          description2:
            "V nabídce našich produktů můžete najít rozsáhle spektrum druhů a jakosti od čistých olejů rostlinných:",
          description3:
            "až po oleje se zvýšenou hodnotou mastných kyselin. Umíme připravit mix olejů rostlinných, dle požadovaných parametrů zákazníka. ",
          description4:
            "Oiltarator s.r.o. využívá moderní technické vybavení se skladovou kapacitou až 1 300 tun. Naše firma se nachází v Ostravě, 20 km od hranic z Polska poblíž sjezdu z dálnicemi dobrém dopravním dosahu, což velice zjednodušuje organizaci transportu. Zabýváme se také uskladňováním olejů a jejich překládkou. ",
          description5:
            "Těšíme se na spolupráci. Rádi zodpovíme všechny Vaše dotazy.",
          oil1: "sojový",
          oil2: "slunečnicový",
          oil3: "řepkový",
          nav1: "Domů",
          nav2: "Kontakt",
          nav3: "Galerie",
          contact: "Pošlete nám zprávu!",
          contacth1: "Kde nás můžete najít?",
          footer: "Vytvořil CheeseField",
          ceo: "Výkonný ředitel",
          message:
            "Jestli máte zájem o nějáké z našich služeb nebo máte jakýkoliv dotaz, neváhejte se nám ozvat. Rádi zodpovíme všechny Vaše dotazy.",
        },
      },
      pl: {
        translation: {
          headline: "O nas",
          homepage: "OilTarator s.r.o",
          description1:
            "Jesteśmy firmą handlową szeroko działająco w branży handlu olejami roślinnymi technicznymi.",
          description2:
            "W bazie naszych produktów znajdą Państwo oleje w szerokim spectrum gatunkowym, od czystych olei roślinnych:",
          description3:
            "po oleje o podwyższonej kwasowości, oraz miksy olejów roślinnych przygotowywane specjalnie na zamówienie klienta, pod określone parametry.",
          description4:
            "Oiltarator s.r.o. posiada nowoczesne zaplecze techniczne z pojemnością magazynowanie towaru do 1300 ton. Nasza baza mieści się w Ostravie, ok. 20 km do granicy z Polską, niedaleko zjazdu z autostrady, co znacznie ułatwia organizację transportu. Jako firma świadczymy również usługi magazynowania towaru, oraz przeładunku. ",
          description5:
            "Zapraszamy do współpracy. Chętnie odpowiemy na wszystkie Państwa pytania. ",
          oil1: "sojowego",
          oil2: "słonecznikowego",
          oil3: "rzepakowego",
          nav1: "Dom",
          nav2: "Kontakt",
          nav3: "Galeria",
          contact: "Wyślij nam wiadomość!",
          contacth1: "Gdzie możesz nas znaleźć?",
          footer: "Zaprojektowany przez CheeseField",
          ceo: "Dyrektor naczelny",
          message:
            "Jeśli jesteś zainteresowany którąkolwiek z naszych usług lub masz jakiekolwiek pytania, nie wahaj się z nami skontaktować. Chętnie odpowiemy na wszystkie Twoje pytania.",
        },
      },
    },
    backend: {
      projectId: "6957c97a-86bb-43bb-b865-8853217d965d",
      apiKey: "c48cb26d-6eda-46ca-91b6-65e32d2f90ac",
    },
  });
