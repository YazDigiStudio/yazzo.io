// All visible texts of the Company (About) and Team pages, the navigation bar
// and the footer, in English and Finnish. English pages live at /about and
// /team, Finnish ones at /fi/about and /fi/team.

export type Lang = "en" | "fi";

/** One person on the Team page. Bio and LinkedIn are optional. */
export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  bio?: string;
}

/** Path of a page in the given language. */
export function pagePath(page: "about" | "team", lang: Lang): string {
  return lang === "fi" ? `/fi/${page}` : `/${page}`;
}

export const NAV_TEXT = {
  en: { app: "Yazzo App", company: "Company", team: "Team", investors: "For Investors" },
  fi: { app: "Yazzo-sovellus", company: "Yritys", team: "Tiimi", investors: "Sijoittajille" },
} as const;

export const FOOTER_TEXT = {
  en: {
    description:
      "Yazzo is a local discovery app for real-time offers, events and experiences from restaurants, cafes, bars and local businesses.",
    company: "Company",
    about: "About us",
    team: "Team",
    investors: "Investors",
    yazzo: "Yazzo",
    app: "The Yazzo app",
    howItWorks: "How Yazzo works",
    forBusinesses: "For businesses",
    support: "Support",
    legal: "Legal",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    follow: "Follow us",
    companyLine: "Yazzo.io Oy · Business ID 3561958-3 · Helsinki, Finland",
    rights: "All rights reserved.",
    appUrl: "https://yazzoapp.com/en",
    howUrl: "https://yazzoapp.com/en/how-it-works",
    supportUrl: "https://yazzoapp.com/en/support",
    termsUrl: "https://yazzoapp.com/en/terms",
    privacyUrl: "https://yazzoapp.com/en/privacy",
  },
  fi: {
    description:
      "Yazzo on paikallinen löytösovellus ravintoloiden, kahviloiden, baarien ja muiden paikallisten yritysten reaaliaikaisille tarjouksille, tapahtumille ja elämyksille.",
    company: "Yritys",
    about: "Tietoa meistä",
    team: "Tiimi",
    investors: "Sijoittajat",
    yazzo: "Yazzo",
    app: "Yazzo-sovellus",
    howItWorks: "Näin Yazzo toimii",
    forBusinesses: "Yrityksille",
    support: "Tuki",
    legal: "Ehdot ja tietosuoja",
    terms: "Käyttöehdot",
    privacy: "Tietosuoja",
    follow: "Seuraa meitä",
    companyLine: "Yazzo.io Oy · Y-tunnus 3561958-3 · Helsinki",
    rights: "Kaikki oikeudet pidätetään.",
    appUrl: "https://yazzoapp.com",
    howUrl: "https://yazzoapp.com/nain-yazzo-toimii",
    supportUrl: "https://yazzoapp.com/support",
    termsUrl: "https://yazzoapp.com/terms",
    privacyUrl: "https://yazzoapp.com/privacy",
  },
} as const;

export const ABOUT_TEXT = {
  en: {
    metaTitle: "Company",
    metaDescription:
      "Yazzo.io Oy is a Helsinki-based startup building a local discovery app that connects people with what is happening around them.",
    heroTitle: "About Yazzo",
    heroSubtitle:
      "Yazzo.io Oy is a Helsinki-based startup building a local discovery app that connects people with what is happening around them.",
    whoTitle: "Who we are",
    whoBody:
      "Yazzo.io Oy was founded in 2025 by Timo Saari, Matti Paloniemi, Erno Michelsson and Venla Ilona Blom. We combine first-hand experience from the cultural sector with modern software development skills.",
    meetTeam: "Meet the team",
    whyTitle: "Why we started",
    whyBody:
      "We faced the challenge of empty seats and last-minute ticket sales ourselves. Theatres and events often have free places that people nearby would gladly fill, but they do not hear about them in time.",
    grewTitle: "How we grew",
    grewBody:
      "We began in the cultural sector and soon saw the same challenge elsewhere: restaurants with quiet hours, yoga studios and dance schools with open places, sports facilities that sit underused. Yazzo grew from events and theatre to all kinds of local businesses, so that whatever is happening nearby can be found in one place.",
    doTitle: "What we do",
    doBody:
      "Yazzo is a free app that shows restaurants, events and last-minute offers on one map. Businesses publish offers in seconds in the Yazzo Partner portal; customers reserve and show a QR code at the venue.",
    doAppLink: "The Yazzo app",
    doPartnerLink: "For businesses",
    doAppUrl: "https://yazzoapp.com/en",
    missionTitle: "Mission",
    missionBody:
      "Build the real-time layer of the city — connecting people with everything happening around them, and giving every local business a better way to reach nearby customers than social media ads.",
    visionTitle: "Vision",
    visionBody:
      "Become the leading local discovery platform in the Nordics — the first place people open when they want to know what to do today, and the first place businesses publish when they have something to offer right now.",
    standTitle: "What we stand for",
    stand: [
      {
        title: "Optimize existing resources",
        body: "Instead of letting places go empty, we help local businesses make full use of the capacity they already have.",
      },
      {
        title: "Increase accessibility",
        body: "Make local experiences more accessible through affordable, last-minute offers that open doors for everyone.",
      },
      {
        title: "Support small entrepreneurs",
        body: "Give small local businesses and performers visibility without large marketing budgets.",
      },
      {
        title: "Strengthen local identity",
        body: "Guide consumers to local services and boost the vibrancy of the city through location-based discovery.",
      },
    ],
    infoTitle: "Company information",
    info: {
      name: "Company name",
      id: "Business ID",
      founded: "Founded",
      location: "Location",
      email: "Email",
      website: "Website",
      locationValue: "Helsinki, Finland",
    },
    imageMapAlt: "Yazzo map with live deals in Helsinki",
    imageOfferAlt: "Yazzo offer detail view",
  },
  fi: {
    metaTitle: "Yritys",
    metaDescription:
      "Yazzo.io Oy on helsinkiläinen startup, joka rakentaa paikallista löytösovellusta. Sovellus yhdistää ihmiset ja heidän lähellään tapahtuvat asiat.",
    heroTitle: "Tietoa Yazzosta",
    heroSubtitle:
      "Yazzo.io Oy on helsinkiläinen startup, joka rakentaa paikallista löytösovellusta. Sovellus yhdistää ihmiset ja heidän lähellään tapahtuvat asiat.",
    whoTitle: "Keitä olemme",
    whoBody:
      "Yazzo.io Oy perustettiin vuonna 2025. Perustajat ovat Timo Saari, Matti Paloniemi, Erno Michelsson ja Venla Ilona Blom. Yhdistämme käytännön kokemuksen kulttuurialalta ja modernin ohjelmistokehityksen osaamisen.",
    meetTeam: "Tutustu tiimiin",
    whyTitle: "Miksi aloitimme",
    whyBody:
      "Olemme itse kohdanneet tyhjien paikkojen ja viime hetken lipunmyynnin haasteen. Teattereissa ja tapahtumissa on usein vapaita paikkoja, jotka lähistön ihmiset täyttäisivät mielellään, mutta he eivät kuule niistä ajoissa.",
    grewTitle: "Kasvu uusille aloille",
    grewBody:
      "Aloitimme kulttuurialalta ja huomasimme pian saman haasteen muuallakin: ravintoloissa on hiljaisia hetkiä, joogastudioilla ja tanssikouluilla vapaita paikkoja ja urheilutiloilla vajaakäyttöä. Yazzo laajeni tapahtumista ja teattereista kaikenlaisiin paikallisiin yrityksiin, jotta kaiken lähellä tapahtuvan löytää yhdestä paikasta.",
    doTitle: "Mitä teemme",
    doBody:
      "Yazzo on ilmainen sovellus, joka näyttää ravintolat, tapahtumat ja viime hetken tarjoukset yhdellä kartalla. Yritykset julkaisevat tarjouksensa sekunneissa Yazzo Partner -portaalissa, ja asiakas varaa paikan ja näyttää QR-koodin paikan päällä.",
    doAppLink: "Yazzo-sovellus",
    doPartnerLink: "Yrityksille",
    doAppUrl: "https://yazzoapp.com",
    missionTitle: "Missio",
    missionBody:
      "Rakentaa kaupungin reaaliaikainen kerros: yhdistää ihmiset kaikkeen heidän ympärillään tapahtuvaan ja tarjota jokaiselle paikalliselle yritykselle parempi tapa tavoittaa lähellä olevat asiakkaat kuin somemainonta.",
    visionTitle: "Visio",
    visionBody:
      "Tulla johtavaksi paikalliseksi löytöalustaksi Pohjoismaissa: ensimmäinen paikka, jonka ihmiset avaavat, kun haluavat tietää mitä tänään tehdä, ja ensimmäinen paikka, johon yritykset julkaisevat, kun niillä on jotain tarjottavaa juuri nyt.",
    standTitle: "Mitä edustamme",
    stand: [
      {
        title: "Käytetään olemassa olevia resursseja",
        body: "Sen sijaan että paikat jäävät tyhjiksi, autamme paikallisia yrityksiä hyödyntämään kapasiteettinsa täysimääräisesti sillä, mitä niillä jo on.",
      },
      {
        title: "Parempaa saavutettavuutta",
        body: "Teemme paikalliset elämykset helpommin saavutettaviksi edullisilla viime hetken tarjouksilla, jotka avaavat ovet kaikille.",
      },
      {
        title: "Pienyrittäjien tukemista",
        body: "Annamme pienille paikallisille yrityksille ja esiintyjille näkyvyyttä ilman suuria markkinointibudjetteja.",
      },
      {
        title: "Paikallisen identiteetin vahvistamista",
        body: "Ohjaamme kuluttajia paikallisten palveluiden pariin ja lisäämme kaupungin elinvoimaa sijaintiin perustuvan löytämisen avulla.",
      },
    ],
    infoTitle: "Yrityksen tiedot",
    info: {
      name: "Yrityksen nimi",
      id: "Y-tunnus",
      founded: "Perustettu",
      location: "Sijainti",
      email: "Sähköposti",
      website: "Verkkosivusto",
      locationValue: "Helsinki",
    },
    imageMapAlt: "Yazzo-kartta ja reaaliaikaiset tarjoukset Helsingissä",
    imageOfferAlt: "Yazzon tarjouksen tiedot",
  },
} as const;

export const TEAM_TEXT = {
  en: {
    metaTitle: "Team",
    metaDescription:
      "Meet the people building Yazzo — combining first-hand experience from Finland's cultural sector with modern software development expertise.",
    title: "Our Team",
    subtitle: "Meet the people building Yazzo",
    strengthTitle: "Our Strength",
    strengthBody:
      "We combine first-hand experience from the cultural sector with modern software development skills. Having faced the challenge of empty seats and last-minute ticket sales ourselves, we understand the pain points of event organizers intimately. This insider perspective, paired with technical capability, positions us uniquely to build a solution that truly serves the needs of both venues and audiences.",
    members: [
      {
        name: "Timo Saari",
        role: "Founder & CEO",
        photo: "/TimoSquare.jpg",
        linkedin: "https://www.linkedin.com/in/timo-saari-373559110/",
        bio: "Timo is a software developer with strong AI expertise. Former choreographer in Finland’s major theatres and co-founder of two cultural companies, combining creative leadership with technical execution. This unique blend of creative and technical expertise drives Yazzo's vision to make culture more accessible and sustainable.",
      },
      {
        name: "Matti Paloniemi",
        role: "Co-Founder, Head of Marketing",
        photo: "/mattiSquare.jpg",
        // Short role-based text until Matti's own background is added
        bio: "Matti is a co-founder of Yazzo and leads its marketing. He is responsible for how Yazzo reaches local businesses and customers.",
      },
      {
        name: "Erno Michelsson",
        role: "Co-Founder & Full-Stack Developer",
        photo: "/ernoSquare.JPG",
        linkedin: "https://www.linkedin.com/in/erno-michelsson-29283832b/",
        bio: "Erno brings a decade of hands-on technical experience to Yazzo, combining a background in industrial science with modern software development. Having worked in process data analytics and laboratory systems, he applies engineering precision to building Yazzo's full-stack infrastructure — from real-time backend architecture to the multi-app ecosystem that powers the platform.",
      },
      {
        name: "Venla Ilona Blom",
        role: "Co-Founder & Creative Lead",
        photo: "/venlaSquare.jpg",
        linkedin: "https://www.linkedin.com/in/venla-ilona-blom/",
        bio: "Venla brings deep expertise in arts and cultural production, having worked extensively in Finland's vibrant cultural sector. Her experience in event management, audience engagement, and creative strategy helps Yazzo understand and serve the needs of event organizers, theatres, and cultural venues.",
      },
    ] as TeamMember[],
  },
  fi: {
    metaTitle: "Tiimi",
    metaDescription:
      "Tutustu Yazzon rakentajiin: yhdistämme käytännön kokemuksen Suomen kulttuurialalta ja modernin ohjelmistokehityksen osaamisen.",
    title: "Tiimimme",
    subtitle: "Tutustu Yazzon rakentajiin",
    strengthTitle: "Vahvuutemme",
    strengthBody:
      "Yhdistämme omakohtaisen kokemuksen kulttuurialalta ja modernin ohjelmistokehityksen osaamisen. Olemme itse kohdanneet tyhjien paikkojen ja viime hetken lipunmyynnin haasteen, joten ymmärrämme tapahtumajärjestäjien ongelmat läheltä. Tämä sisäpiirin näkökulma yhdessä teknisen osaamisen kanssa antaa meille poikkeuksellisen hyvät edellytykset rakentaa ratkaisu, joka palvelee sekä paikkoja että yleisöä.",
    members: [
      {
        name: "Timo Saari",
        role: "Perustaja ja toimitusjohtaja",
        photo: "/TimoSquare.jpg",
        linkedin: "https://www.linkedin.com/in/timo-saari-373559110/",
        bio: "Timo on ohjelmistokehittäjä, jolla on vahva tekoälyosaaminen. Hän on entinen koreografi Suomen suurissa teattereissa ja kahden kulttuuriyrityksen perustajajäsen, ja yhdistää luovan johtajuuden ja teknisen toteutuksen. Tämä ainutlaatuinen yhdistelmä ohjaa Yazzon visiota tehdä kulttuurista saavutettavampaa ja kestävämpää.",
      },
      {
        name: "Matti Paloniemi",
        role: "Perustajajäsen, markkinointijohtaja",
        photo: "/mattiSquare.jpg",
        // Lyhyt tehtäväkuvaus, kunnes Matin oma tausta lisätään
        bio: "Matti on Yazzon perustajajäsen ja vastaa yhtiön markkinoinnista. Hän huolehtii siitä, miten Yazzo tavoittaa paikalliset yritykset ja asiakkaat.",
      },
      {
        name: "Erno Michelsson",
        role: "Perustajajäsen ja full-stack-kehittäjä",
        photo: "/ernoSquare.JPG",
        linkedin: "https://www.linkedin.com/in/erno-michelsson-29283832b/",
        bio: "Ernolla on kymmenen vuoden käytännön tekninen kokemus, ja hän yhdistää teollisen tieteen taustan moderniin ohjelmistokehitykseen. Hän on työskennellyt prosessidatan analytiikan ja laboratoriojärjestelmien parissa ja soveltaa insinöörin tarkkuutta Yazzon full-stack-infrastruktuurin rakentamiseen: reaaliaikaisesta taustajärjestelmästä koko alustaa pyörittävään usean sovelluksen kokonaisuuteen.",
      },
      {
        name: "Venla Ilona Blom",
        role: "Perustajajäsen ja luova johtaja",
        photo: "/venlaSquare.jpg",
        linkedin: "https://www.linkedin.com/in/venla-ilona-blom/",
        bio: "Venla tuo mukanaan vahvan osaamisen taide- ja kulttuurituotannosta ja on työskennellyt laajasti Suomen vireällä kulttuurikentällä. Hänen kokemuksensa tapahtumajärjestämisestä, yleisötyöstä ja luovasta strategiasta auttaa Yazzoa ymmärtämään ja palvelemaan tapahtumajärjestäjien, teattereiden ja kulttuuripaikkojen tarpeita.",
      },
    ] as TeamMember[],
  },
} as const;
