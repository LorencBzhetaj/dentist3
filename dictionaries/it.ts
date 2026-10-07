import type { Dictionary } from "./index";

const it: Dictionary = {
  meta: {
    title: "Sorèr Dental Clinic – Clinica dentale a Tirana, Albania",
    description:
      "Sorèr Dental Clinic al Garden Building, Rruga e Kavajës, Tirana. Implantologia, protesi dentale, ortodonzia, Invisalign, odontoiatria estetica, innesto osseo e turismo dentale.",
  },
  nav: {
    home: "Home",
    services: "Servizi",
    about: "La clinica",
    cases: "Prima & Dopo",
    contact: "Contatti",
  },
  common: {
    book: "Prenota",
    requestConsult: "Richiedi una consulenza",
    viewServices: "Scopri i servizi",
    contact: "Contatti",
    call: "Chiama",
    learnMore: "Scopri di più",
    allServices: "Tutti i servizi",
    menu: "Apri il menu",
    close: "Chiudi il menu",
    language: "Lingua",
    directions: "Indicazioni stradali",
    openMaps: "Apri in Google Maps",
    phone: "Telefono",
    address: "Indirizzo",
    instagram: "Instagram",
    hours: "Orari",
    hoursPending: "Gli orari settimanali completi saranno pubblicati dopo la conferma della clinica. Chiamaci per fissare un orario.",
    nipt: "NIPT (P. IVA)",
    before: "Prima",
    after: "Dopo",
    mapTitle: "Posizione di Sorèr Dental Clinic sulla mappa",
    skip: "Vai al contenuto",
  },
  home: {
    hero: {
      eyebrow: "Tirana · Albania",
      title: "Sorèr Dental Clinic",
      subtitle:
        "Una clinica dentale nel cuore di Tirana, al Garden Building. Trattamenti di implantologia, protesi, ortodonzia ed estetica, pianificati con cura per ogni paziente.",
      mobileSubtitle: "Clinica dentale a Tirana",
      imageAlt: "Reception di Sorèr Dental Clinic con il logo della clinica sulla parete",
      roomAlt: "Sala trattamenti di Sorèr Dental Clinic con poltrona odontoiatrica e finestra sulla città",
    },
    services: {
      eyebrow: "Servizi",
      title: "I nostri trattamenti",
      subtitle: "I servizi offerti dalla clinica, come pubblicati sul profilo ufficiale di Sorèr.",
    },
    clinic: {
      eyebrow: "La clinica",
      title: "Uno spazio tranquillo, moderno e luminoso",
      text: "Sorèr Dental Clinic si trova al Garden Building, in Rruga e Kavajës. Gli ambienti sono pensati per rendere ogni visita serena, dalla reception alla poltrona.",
      link: "Scopri la clinica",
    },
    cases: {
      eyebrow: "Prima & Dopo",
      title: "Casi clinici",
      subtitle: "Foto reali prima e dopo il trattamento di pazienti della clinica.",
      link: "Vedi i casi",
    },
    tourism: {
      eyebrow: "Turismo dentale",
      title: "Vieni dall'estero?",
      text: "Contattaci prima del viaggio per parlare delle tue esigenze e pianificare le visite in clinica.",
      link: "Scopri di più",
    },
    visit: {
      eyebrow: "Vieni a trovarci",
      title: "Dove siamo",
    },
  },
  services: {
    page: {
      eyebrow: "Servizi",
      title: "I servizi della clinica",
      subtitle:
        "Ogni trattamento inizia con una valutazione clinica. Piano, durata e costi vengono definiti individualmente dopo la consulenza.",
    },
    detail: {
      back: "Tutti i servizi",
      eyebrow: "Servizio odontoiatrico",
      about: "Il trattamento",
      benefits: "Cosa comprende",
      process: "Come si svolge",
      faq: "Domande frequenti",
      related: "Servizi correlati",
      sidebarTitle: "Vuoi sapere se questo trattamento fa per te?",
      sidebarText: "Invia una richiesta di appuntamento o chiamaci. La clinica ti contatterà per confermare l'orario.",
      disclaimer: "Informazioni generali. L'idoneità a ogni trattamento viene valutata dal dentista durante la visita.",
    },
    items: {
      "dental-implants": {
        title: "Impianti dentali",
        short: "Sostituzione dei denti mancanti con impianti, pianificata in base allo stato di osso e gengive.",
        description:
          "L'impianto dentale è una radice artificiale inserita nell'osso mascellare che sostiene una corona, un ponte o una protesi. Dopo la visita clinica e gli esami di imaging necessari, il dentista valuta se l'impianto è la soluzione giusta e come pianificarlo.",
        benefits: [
          "Valutazione di osso e gengive",
          "Sostituzione di uno o più denti",
          "Base per corone, ponti o protesi su impianti",
          "Piano di trattamento spiegato passo dopo passo",
        ],
        process: [
          { title: "Consulenza", description: "Visita clinica e discussione di esigenze e opzioni." },
          { title: "Pianificazione", description: "Imaging se necessario e piano di trattamento personalizzato." },
          { title: "Inserimento dell'impianto", description: "L'impianto viene inserito in anestesia locale." },
          { title: "Guarigione", description: "L'impianto si integra con l'osso, con controlli programmati." },
          { title: "Riabilitazione", description: "Viene applicata la corona o la protesi definitiva sull'impianto." },
        ],
        faqs: [
          { question: "Sono un candidato per l'impianto?", answer: "Dipende dalla salute generale, dal volume osseo e dallo stato delle gengive. Il dentista lo valuta durante la consulenza." },
          { question: "Quanto dura l'intero trattamento?", answer: "Varia da caso a caso e dipende dalla guarigione e dall'eventuale necessità di procedure aggiuntive, come l'innesto osseo." },
          { question: "Come si cura un impianto?", answer: "Con un'igiene orale regolare e controlli periodici, come per i denti naturali." },
        ],
      },
      prosthodontics: {
        title: "Protesi dentale",
        short: "Corone, ponti e protesi per ripristinare la funzione e l'aspetto dei denti.",
        description:
          "La protesi dentale si occupa di ricostruire e sostituire denti danneggiati o mancanti. A seconda del caso, la soluzione può essere una corona, un ponte, una protesi mobile o una protesi su impianti.",
        benefits: [
          "Ricostruzione dei denti danneggiati",
          "Sostituzione dei denti mancanti",
          "Recupero della funzione masticatoria",
          "Soluzioni su misura per il tuo sorriso",
        ],
        process: [
          { title: "Valutazione", description: "Esame di denti, occlusione e gengive." },
          { title: "Piano protesico", description: "Si discute la soluzione più adatta al tuo caso." },
          { title: "Preparazione e impronte", description: "Si prendono le impronte per il lavoro protesico." },
          { title: "Prova e applicazione", description: "Il lavoro viene provato, adattato e applicato." },
        ],
        faqs: [
          { question: "Che differenza c'è tra corona e ponte?", answer: "La corona ricopre un singolo dente, mentre il ponte sostituisce uno o più denti mancanti appoggiandosi ai denti vicini o agli impianti." },
          { question: "Quante visite servono?", answer: "Dipende dal tipo di lavoro ed è indicato nel piano di trattamento." },
        ],
      },
      orthodontics: {
        title: "Ortodonzia",
        short: "Correzione della posizione dei denti e dell'occlusione, per bambini e adulti.",
        description:
          "L'ortodonzia corregge denti storti, spazi e problemi di occlusione. Dopo la valutazione, il dentista consiglia l'apparecchio più adatto, inclusi gli allineatori trasparenti come Invisalign quando il caso lo consente.",
        benefits: [
          "Valutazione di posizione dei denti e occlusione",
          "Apparecchi fissi o allineatori trasparenti",
          "Igiene più semplice con denti allineati",
          "Controlli durante tutto il trattamento",
        ],
        process: [
          { title: "Valutazione ortodontica", description: "Esame di denti, occlusione e mascelle." },
          { title: "Piano di trattamento", description: "Scelta dell'apparecchio e spiegazione del percorso previsto." },
          { title: "Applicazione", description: "Si applica l'apparecchio o si consegnano i primi allineatori." },
          { title: "Controlli", description: "Visite regolari per seguire i progressi." },
          { title: "Contenzione", description: "Un retainer mantiene i denti nella nuova posizione." },
        ],
        faqs: [
          { question: "C'è un limite di età per l'ortodonzia?", answer: "Il trattamento ortodontico è possibile anche in età adulta. L'idoneità viene valutata caso per caso." },
          { question: "Apparecchio fisso o allineatori?", answer: "Entrambi hanno i loro vantaggi. Il dentista consiglia la soluzione adatta al tuo caso." },
        ],
      },
      invisalign: {
        title: "Invisalign",
        short: "Allineatori trasparenti e rimovibili per allineare i denti, nell'ambito del trattamento ortodontico.",
        description:
          "Invisalign è un sistema di trattamento ortodontico con allineatori trasparenti e rimovibili che spostano gradualmente i denti. L'idoneità viene stabilita dopo una valutazione ortodontica e il trattamento è seguito con controlli regolari in clinica.",
        benefits: [
          "Allineatori quasi invisibili",
          "Rimovibili per mangiare e per l'igiene",
          "Senza fili né brackets",
          "Parte di un piano ortodontico completo",
        ],
        process: [
          { title: "Valutazione ortodontica", description: "Verifichiamo se il tuo caso è adatto agli allineatori." },
          { title: "Piano", description: "Si prepara il piano dei movimenti dentali." },
          { title: "Allineatori", description: "Ricevi gli allineatori e le istruzioni per indossarli." },
          { title: "Controlli", description: "Visite periodiche per seguire i progressi." },
        ],
        faqs: [
          { question: "Quante ore al giorno vanno indossati?", answer: "Di solito per la maggior parte della giornata. Il dentista ti darà indicazioni precise per il tuo caso." },
          { question: "Invisalign è adatto a ogni caso?", answer: "Non a tutti. Dopo la valutazione ortodontica il dentista ti dirà se gli allineatori sono la soluzione giusta." },
        ],
      },
      "cosmetic-dentistry": {
        title: "Odontoiatria estetica",
        short: "Migliorare forma, colore e armonia del sorriso con un piano personalizzato.",
        description:
          "L'odontoiatria estetica mira a un sorriso più armonioso preservando la salute dei denti. Le opzioni vengono discusse dopo la valutazione clinica e scelte in base alle esigenze e ai desideri del paziente.",
        benefits: [
          "Analisi del sorriso e delle aspettative",
          "Piano estetico personalizzato",
          "Combinabile con trattamenti protesici o ortodontici",
          "Attenzione a un risultato naturale",
        ],
        process: [
          { title: "Consulenza", description: "Parliamo di cosa vorresti cambiare nel tuo sorriso." },
          { title: "Valutazione", description: "Si controlla la salute di denti e gengive." },
          { title: "Piano", description: "Si propone il piano e si spiegano le opzioni." },
          { title: "Trattamento", description: "I trattamenti vengono eseguiti secondo il piano concordato." },
        ],
        faqs: [
          { question: "Quali trattamenti sono inclusi?", answer: "Dipende dal caso. Le opzioni concrete vengono discusse con il dentista dopo la valutazione." },
          { question: "Il risultato sarà naturale?", answer: "L'obiettivo è un risultato in armonia con il viso e i denti. Le aspettative vengono discusse fin dalla prima consulenza." },
        ],
      },
      "bone-grafting": {
        title: "Innesto osseo",
        short: "Ricostruzione dell'osso quando il volume non è sufficiente per impianti o riabilitazioni.",
        description:
          "L'innesto osseo si utilizza quando l'osso mascellare non ha un volume sufficiente, ad esempio dopo la perdita di denti. Può essere una fase preparatoria prima dell'inserimento degli impianti.",
        benefits: [
          "Valutazione del volume osseo",
          "Preparazione all'inserimento di impianti",
          "Supporto per riabilitazioni durature",
          "Controlli durante la guarigione",
        ],
        process: [
          { title: "Valutazione", description: "Visita e imaging per misurare l'osso disponibile." },
          { title: "Piano", description: "Si stabilisce se serve un innesto e di che tipo." },
          { title: "Procedura", description: "L'innesto viene eseguito in anestesia locale." },
          { title: "Guarigione", description: "Controlli finché l'osso è pronto per la fase successiva." },
        ],
        faqs: [
          { question: "Quando serve un innesto osseo?", answer: "Quando l'osso non basta a sostenere un impianto in modo stabile. Il dentista lo stabilisce dopo la valutazione." },
          { question: "Si fa insieme all'impianto?", answer: "A volte sì, a volte come fase separata. Dipende dal caso." },
        ],
      },
      "dental-tourism": {
        title: "Turismo dentale",
        short: "Pianificazione del trattamento per pazienti che arrivano dall'estero.",
        description:
          "Sorèr Dental Clinic accoglie anche pazienti dall'estero. Puoi contattarci prima del viaggio per parlare delle tue esigenze e pianificare le visite in clinica in base al periodo che trascorrerai a Tirana.",
        benefits: [
          "Contatto prima dell'arrivo a Tirana",
          "Visite pianificate in base al tuo soggiorno",
          "Informazioni chiare su ogni fase",
          "Clinica nel centro di Tirana",
        ],
        process: [
          { title: "Contattaci", description: "Scrivici o chiamaci e descrivi le tue esigenze." },
          { title: "Prima consulenza", description: "La valutazione definitiva avviene durante la visita in clinica." },
          { title: "Piano delle visite", description: "Le visite vengono organizzate in base al piano e al tuo soggiorno." },
          { title: "Dopo il trattamento", description: "Indicazioni per la cura post-trattamento e i controlli successivi." },
        ],
        faqs: [
          { question: "Hotel, transfer o voli sono inclusi?", answer: "No. Questo sito non offre pacchetti con alloggio, transfer o voli. Per domande specifiche contatta direttamente la clinica." },
          { question: "Posso avere un piano di trattamento prima di partire?", answer: "Puoi discutere il tuo caso con la clinica in anticipo, ma il piano definitivo viene stabilito dopo la visita in clinica." },
        ],
      },
    },
  },
  about: {
    eyebrow: "La clinica",
    title: "Sorèr Dental Clinic",
    subtitle: "Clinica dentale al Garden Building, Rruga e Kavajës, Tirana.",
    introTitle: "Cure dentali nel centro di Tirana",
    intro: [
      "Sorèr Dental Clinic offre impianti dentali, protesi, ortodonzia, Invisalign, odontoiatria estetica e innesto osseo, e accoglie anche pazienti dall'estero.",
      "Ogni trattamento inizia con una valutazione clinica e un confronto chiaro su opzioni, fasi e aspettative.",
    ],
    receptionAlt: "Reception di Sorèr Dental Clinic con bancone in marmo e logo sulla parete",
    valuesTitle: "Come lavoriamo",
    values: [
      { title: "Valutazione attenta", text: "Ogni piano di trattamento si basa sulla visita clinica del tuo caso." },
      { title: "Comunicazione chiara", text: "Fasi e opzioni vengono spiegate prima dell'inizio del trattamento." },
      { title: "Un ambiente sereno", text: "Spazi moderni e luminosi, pensati per il comfort del paziente." },
    ],
    galleryTitle: "Gli ambienti",
    gallery: [
      { key: "reception", alt: "Sala d'attesa e reception della clinica" },
      { key: "treatmentRoom", alt: "Sala trattamenti con poltrona odontoiatrica e finestra" },
    ],
  },
  cases: {
    eyebrow: "Prima & Dopo",
    title: "Casi clinici",
    subtitle:
      "Foto reali di pazienti della clinica. In ogni immagine, la parte superiore mostra la situazione prima del trattamento e la parte inferiore dopo.",
    caseTitle: "Caso clinico",
    alt: "Foto combinata: in alto prima del trattamento, in basso dopo il trattamento",
    note: "Le descrizioni dei trattamenti saranno aggiunte dalla clinica. I risultati variano da paziente a paziente.",
  },
  contact: {
    eyebrow: "Contatti",
    title: "Contattaci",
    subtitle: "Chiamaci, scrivici su Instagram o invia una richiesta di appuntamento.",
    formTitle: "Richiesta di appuntamento",
    formSubtitle: "Questa è una richiesta, non una prenotazione confermata. La clinica ti contatterà per confermare data e ora.",
  },
  form: {
    name: "Nome e cognome",
    namePlaceholder: "Il tuo nome",
    phone: "Numero di telefono",
    phonePlaceholder: "+39 3XX XXX XXXX",
    email: "Email (facoltativa)",
    emailPlaceholder: "nome@esempio.it",
    service: "Servizio",
    servicePlaceholder: "Seleziona un servizio",
    serviceOther: "Altro / non sono sicuro",
    date: "Data preferita (facoltativa)",
    dateHint: "La data scelta non è una prenotazione confermata.",
    message: "Messaggio (facoltativo)",
    messagePlaceholder: "Descrivi brevemente il motivo della visita…",
    consent: "Acconsento all'uso dei miei dati da parte della clinica solo per essere ricontattato riguardo a questa richiesta.",
    submit: "Invia richiesta",
    sending: "Invio in corso…",
    successTitle: "Richiesta inviata",
    successText: "Grazie. La clinica ti contatterà per confermare l'appuntamento. L'appuntamento non è confermato finché la clinica non te lo conferma.",
    again: "Invia un'altra richiesta",
    notConfigured: "L'invio online del modulo non è ancora attivo. Chiamaci o scrivici su Instagram.",
    error: "Non è stato possibile inviare la richiesta. Riprova o chiamaci.",
    rateLimited: "Troppi tentativi. Riprova tra poco.",
    errors: {
      name: "Inserisci il tuo nome (almeno 2 caratteri).",
      phone: "Inserisci un numero di telefono valido.",
      email: "Inserisci un indirizzo email valido.",
      service: "Seleziona un servizio.",
      message: "Il messaggio è troppo lungo.",
      consent: "Per inviare la richiesta è necessario il consenso.",
    },
  },
  cta: {
    title: "Pronto per il primo passo?",
    subtitle: "Invia una richiesta di consulenza o chiamaci.",
  },
  footer: {
    tagline: "Clinica dentale a Tirana.",
    explore: "Pagine",
    services: "Servizi",
    contact: "Contatti",
    rights: "Tutti i diritti riservati.",
    privacy: "Informativa sulla privacy",
    terms: "Condizioni d'uso",
  },
  legal: {
    draft: "Bozza demo — il testo definitivo deve essere rivisto e approvato dalla clinica.",
    updated: "Aggiornato: ottobre 2026",
    privacy: {
      title: "Informativa sulla privacy",
      sections: [
        { title: "Chi siamo", text: "Sorèr Dental Clinic, Garden Building, Rruga e Kavajës, Tirana 1001, Albania. NIPT M52109034H." },
        { title: "Quali dati raccogliamo", text: "Quando invii una richiesta di appuntamento raccogliamo nome, numero di telefono, email (se fornita), servizio scelto, data preferita e messaggio." },
        { title: "Come li usiamo", text: "I dati vengono usati solo per ricontattarti riguardo alla tua richiesta. Non vengono venduti né condivisi a fini di marketing." },
        { title: "Conservazione", text: "I dati sono conservati solo per il tempo necessario a gestire la richiesta o quanto richiesto dalla legge." },
        { title: "I tuoi diritti", text: "Puoi chiedere l'accesso, la rettifica o la cancellazione dei tuoi dati contattandoci per telefono." },
        { title: "Servizi di terze parti", text: "La mappa del sito è fornita da Google Maps, che può trattare dati secondo le proprie policy." },
      ],
    },
    terms: {
      title: "Condizioni d'uso",
      sections: [
        { title: "Informazioni generali", text: "I contenuti di questo sito hanno solo scopo informativo e non sostituiscono una visita o un parere medico." },
        { title: "Richieste di appuntamento", text: "Il modulo invia una richiesta. L'appuntamento è confermato solo dopo che la clinica ti ha contattato e lo ha confermato." },
        { title: "Risultati", text: "Le foto prima/dopo mostrano casi individuali. I risultati variano da paziente a paziente." },
        { title: "Contatti", text: "Per qualsiasi domanda puoi contattarci al +355 68 476 7455 o su Instagram @sorer_dental_clinic." },
      ],
    },
  },
  notFound: {
    title: "Pagina non trovata",
    text: "La pagina che cerchi non esiste o è stata spostata.",
    home: "Torna alla home",
  },
};

export default it;
