import type { Dictionary } from "./index";

const en: Dictionary = {
  meta: {
    title: "Sorèr Dental Clinic – Dental clinic in Tirana, Albania",
    description:
      "Sorèr Dental Clinic at Garden Building, Rruga e Kavajës, Tirana. Dental implants, prosthodontics, orthodontics, Invisalign, cosmetic dentistry, bone grafting and dental tourism.",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    cases: "Before & After",
    contact: "Contact",
  },
  common: {
    book: "Book a visit",
    requestConsult: "Request a consultation",
    viewServices: "View services",
    contact: "Contact",
    call: "Call",
    learnMore: "Learn more",
    allServices: "All services",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
    directions: "Get directions",
    openMaps: "Open in Google Maps",
    phone: "Phone",
    address: "Address",
    instagram: "Instagram",
    hours: "Opening hours",
    hoursPending: "Full weekly opening hours will be published once confirmed by the clinic. Please call us to arrange a time.",
    nipt: "NIPT (Tax ID)",
    before: "Before",
    after: "After",
    mapTitle: "Location of Sorèr Dental Clinic on the map",
    skip: "Skip to content",
  },
  home: {
    hero: {
      eyebrow: "Tirana · Albania",
      title: "Sorèr Dental Clinic",
      subtitle:
        "A dental clinic in the heart of Tirana, at Garden Building. Implant, prosthetic, orthodontic and cosmetic treatments, carefully planned for every patient.",
      mobileSubtitle: "Dental clinic in Tirana",
      imageAlt: "Reception of Sorèr Dental Clinic with the clinic logo on the wall",
      roomAlt: "Treatment room at Sorèr Dental Clinic with a dental chair and a window overlooking the city",
    },
    services: {
      eyebrow: "Services",
      title: "Our treatments",
      subtitle: "The services offered by the clinic, as published on Sorèr's official profile.",
    },
    clinic: {
      eyebrow: "The clinic",
      title: "A calm, modern and bright space",
      text: "Sorèr Dental Clinic is located at Garden Building on Rruga e Kavajës. The space is designed to make every visit feel calm, from reception to the treatment chair.",
      link: "Discover the clinic",
    },
    cases: {
      eyebrow: "Before & After",
      title: "Clinical cases",
      subtitle: "Real before and after photos of the clinic's patients.",
      link: "View cases",
    },
    tourism: {
      eyebrow: "Dental tourism",
      title: "Travelling from abroad?",
      text: "Get in touch before your trip to discuss your needs and plan your visits to the clinic.",
      link: "Read more",
    },
    visit: {
      eyebrow: "Visit us",
      title: "Where to find us",
    },
  },
  services: {
    page: {
      eyebrow: "Services",
      title: "Clinic services",
      subtitle:
        "Every treatment starts with a clinical assessment. The plan, duration and cost are defined individually after the consultation.",
    },
    detail: {
      back: "All services",
      eyebrow: "Dental service",
      about: "About the treatment",
      benefits: "What it involves",
      process: "How it works",
      faq: "Frequently asked questions",
      related: "Related services",
      sidebarTitle: "Wondering if this treatment is right for you?",
      sidebarText: "Send an appointment request or call us. The clinic will contact you to confirm a time.",
      disclaimer: "General information. Suitability for any treatment is assessed by the dentist during your visit.",
    },
    items: {
      "dental-implants": {
        title: "Dental implants",
        short: "Replacing missing teeth with implants, planned around the condition of your bone and gums.",
        description:
          "A dental implant is an artificial root placed in the jawbone that supports a crown, bridge or denture. After a clinical examination and the necessary imaging, the dentist determines whether an implant is the right solution and how to plan it.",
        benefits: [
          "Assessment of bone and gum condition",
          "Replacement of one or several teeth",
          "Support for implant crowns, bridges or dentures",
          "A treatment plan explained step by step",
        ],
        process: [
          { title: "Consultation", description: "Clinical examination and discussion of your needs and options." },
          { title: "Planning", description: "Imaging as needed and a personalised treatment plan." },
          { title: "Implant placement", description: "The implant is placed under local anaesthesia." },
          { title: "Healing", description: "The implant integrates with the bone, with check-ups as planned." },
          { title: "Restoration", description: "The final crown or prosthesis is fitted on the implant." },
        ],
        faqs: [
          { question: "Am I a candidate for implants?", answer: "It depends on your general health, bone volume and gum condition. The dentist assesses this during the consultation." },
          { question: "How long does the whole treatment take?", answer: "It varies from case to case and depends on healing and on whether additional procedures, such as bone grafting, are needed." },
          { question: "How do I care for an implant?", answer: "With regular oral hygiene and periodic check-ups, just like natural teeth." },
        ],
      },
      prosthodontics: {
        title: "Prosthodontics",
        short: "Crowns, bridges and dentures to restore the function and appearance of your teeth.",
        description:
          "Prosthodontics restores and replaces damaged or missing teeth. Depending on the case, the solution may be a crown, a bridge, a removable denture or an implant-supported prosthesis.",
        benefits: [
          "Restoration of damaged teeth",
          "Replacement of missing teeth",
          "Restored chewing function",
          "Solutions tailored to your smile",
        ],
        process: [
          { title: "Assessment", description: "Examination of teeth, bite and gums." },
          { title: "Prosthetic plan", description: "We discuss the most suitable solution for your case." },
          { title: "Preparation and impressions", description: "Impressions are taken for the prosthetic work." },
          { title: "Try-in and fitting", description: "The work is tried in, adjusted and fitted." },
        ],
        faqs: [
          { question: "What is the difference between a crown and a bridge?", answer: "A crown covers a single tooth, while a bridge replaces one or more missing teeth by resting on neighbouring teeth or implants." },
          { question: "How many visits are needed?", answer: "It depends on the type of work and is set out in your treatment plan." },
        ],
      },
      orthodontics: {
        title: "Orthodontics",
        short: "Correcting tooth position and bite, for children and adults.",
        description:
          "Orthodontics corrects crooked teeth, gaps and bite problems. After an assessment, the dentist recommends the most suitable appliance, including clear aligners such as Invisalign when the case allows.",
        benefits: [
          "Assessment of tooth position and bite",
          "Fixed braces or clear aligner options",
          "Easier hygiene with aligned teeth",
          "Check-ups throughout the treatment",
        ],
        process: [
          { title: "Orthodontic assessment", description: "Examination of teeth, bite and jaws." },
          { title: "Treatment plan", description: "Choice of appliance and an explanation of the expected progress." },
          { title: "Fitting", description: "Braces are fitted or the first aligners are handed over." },
          { title: "Check-ups", description: "Regular visits to follow your progress." },
          { title: "Retention", description: "A retainer keeps the teeth in their new position." },
        ],
        faqs: [
          { question: "Is there an age limit for orthodontics?", answer: "Orthodontic treatment can also be done in adulthood. Suitability is assessed individually." },
          { question: "Braces or aligners?", answer: "Both have their advantages. The dentist recommends the solution that fits your case." },
        ],
      },
      invisalign: {
        title: "Invisalign",
        short: "Clear, removable aligners to straighten teeth, as part of orthodontic treatment.",
        description:
          "Invisalign is an orthodontic treatment system using clear, removable aligners that move teeth gradually. Suitability is determined after an orthodontic assessment, and treatment is followed with regular check-ups at the clinic.",
        benefits: [
          "Nearly invisible aligners",
          "Removable for eating and cleaning",
          "No wires or brackets",
          "Part of a complete orthodontic plan",
        ],
        process: [
          { title: "Orthodontic assessment", description: "We check whether your case is suitable for aligners." },
          { title: "Plan", description: "A plan of tooth movements is prepared." },
          { title: "Aligners", description: "You receive your aligners and instructions for wearing them." },
          { title: "Check-ups", description: "Periodic visits to follow your progress." },
        ],
        faqs: [
          { question: "How many hours a day should aligners be worn?", answer: "Usually most of the day. The dentist gives you exact instructions for your case." },
          { question: "Is Invisalign suitable for every case?", answer: "Not every case. After an orthodontic assessment the dentist will tell you whether aligners are the right solution." },
        ],
      },
      "cosmetic-dentistry": {
        title: "Cosmetic dentistry",
        short: "Improving the shape, colour and harmony of your smile with a personalised plan.",
        description:
          "Cosmetic dentistry aims for a more harmonious smile while preserving the health of your teeth. Options are discussed after a clinical assessment and chosen according to the patient's needs and wishes.",
        benefits: [
          "Smile and expectation analysis",
          "A personalised aesthetic plan",
          "Combined with prosthetic or orthodontic care when needed",
          "Focus on a natural-looking result",
        ],
        process: [
          { title: "Consultation", description: "We discuss what you would like to change about your smile." },
          { title: "Assessment", description: "The health of teeth and gums is checked." },
          { title: "Plan", description: "A plan is proposed and the options are explained." },
          { title: "Treatment", description: "Treatments are carried out according to the agreed plan." },
        ],
        faqs: [
          { question: "Which treatments are included?", answer: "It depends on the case. Specific options are discussed with the dentist after the assessment." },
          { question: "Will it look natural?", answer: "The goal is a result in harmony with your face and teeth. Expectations are discussed from the first consultation." },
        ],
      },
      "bone-grafting": {
        title: "Bone grafting",
        short: "Rebuilding bone when there is not enough volume for implants or restorations.",
        description:
          "Bone grafting is used when the jawbone lacks sufficient volume, for example after tooth loss. It can be a preparatory step before implant placement.",
        benefits: [
          "Assessment of bone volume",
          "Preparation for implant placement",
          "Support for long-term restorations",
          "Follow-up during healing",
        ],
        process: [
          { title: "Assessment", description: "Examination and imaging to measure the available bone." },
          { title: "Plan", description: "We determine whether a graft is needed and which type." },
          { title: "Procedure", description: "The graft is placed under local anaesthesia." },
          { title: "Healing", description: "Check-ups until the bone is ready for the next step." },
        ],
        faqs: [
          { question: "When is bone grafting needed?", answer: "When there is not enough bone to support an implant securely. The dentist decides after the assessment." },
          { question: "Is it done at the same time as the implant?", answer: "Sometimes yes, sometimes as a separate step. It depends on the case." },
        ],
      },
      "dental-tourism": {
        title: "Dental tourism",
        short: "Treatment planning for patients travelling from outside Albania.",
        description:
          "Sorèr Dental Clinic also welcomes patients from abroad. You can contact us before your trip to discuss your needs and plan your clinic visits around the time you will spend in Tirana.",
        benefits: [
          "Contact before you arrive in Tirana",
          "Visits planned around your stay",
          "Clear information on each treatment step",
          "A clinic in central Tirana",
        ],
        process: [
          { title: "Get in touch", description: "Write or call us and describe your needs." },
          { title: "First consultation", description: "The final assessment takes place during your visit to the clinic." },
          { title: "Visit plan", description: "Visits are arranged around the plan and your time in Tirana." },
          { title: "Aftercare", description: "Instructions for aftercare and further check-ups." },
        ],
        faqs: [
          { question: "Are hotel, transfers or flights included?", answer: "No. This website does not offer packages with accommodation, transfers or flights. For specific questions, please contact the clinic directly." },
          { question: "Can I get a treatment plan before I travel?", answer: "You can discuss your case with the clinic in advance, but the final plan is defined after an examination at the clinic." },
        ],
      },
    },
  },
  about: {
    eyebrow: "About the clinic",
    title: "Sorèr Dental Clinic",
    subtitle: "A dental clinic at Garden Building, Rruga e Kavajës, Tirana.",
    introTitle: "Dental care in central Tirana",
    intro: [
      "Sorèr Dental Clinic offers dental implants, prosthodontics, orthodontics, Invisalign, cosmetic dentistry and bone grafting, and also welcomes patients from outside Albania.",
      "Every treatment begins with a clinical assessment and a clear conversation about options, steps and expectations.",
    ],
    receptionAlt: "Reception of Sorèr Dental Clinic with a marble desk and the logo on the wall",
    valuesTitle: "How we work",
    values: [
      { title: "Careful assessment", text: "Every treatment plan is based on a clinical examination of your case." },
      { title: "Clear communication", text: "Steps and options are explained before treatment begins." },
      { title: "A calm environment", text: "Modern, bright spaces designed with patient comfort in mind." },
    ],
    galleryTitle: "The space",
    gallery: [
      { key: "reception", alt: "Waiting area and reception of the clinic" },
      { key: "treatmentRoom", alt: "Treatment room with a dental chair and a window" },
    ],
  },
  cases: {
    eyebrow: "Before & After",
    title: "Clinical cases",
    subtitle:
      "Real photos of the clinic's patients. In each image, the upper part shows the situation before treatment and the lower part after treatment.",
    caseTitle: "Clinical case",
    alt: "Combined photo: top before treatment, bottom after treatment",
    note: "Treatment descriptions will be added by the clinic. Results vary from patient to patient.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    subtitle: "Call us, message us on Instagram or send an appointment request.",
    formTitle: "Appointment request",
    formSubtitle: "This is a request, not a confirmed booking. The clinic will contact you to confirm the date and time.",
  },
  form: {
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    phonePlaceholder: "+355 6X XXX XXXX",
    email: "Email (optional)",
    emailPlaceholder: "you@example.com",
    service: "Service",
    servicePlaceholder: "Select a service",
    serviceOther: "Other / not sure",
    date: "Preferred date (optional)",
    dateHint: "The selected date is not a confirmed booking.",
    message: "Message (optional)",
    messagePlaceholder: "Briefly describe the reason for your visit…",
    consent: "I agree that the clinic may use my details only to contact me about this request.",
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Request sent",
    successText: "Thank you. The clinic will contact you to confirm your appointment. The appointment is not confirmed until the clinic confirms it with you.",
    again: "Send another request",
    notConfigured: "Online form submission is not enabled yet. Please call us or message us on Instagram.",
    error: "Your request could not be sent. Please try again or call us.",
    rateLimited: "Too many attempts. Please try again shortly.",
    errors: {
      name: "Please enter your name (at least 2 characters).",
      phone: "Please enter a valid phone number.",
      email: "Please enter a valid email address.",
      service: "Please select a service.",
      message: "The message is too long.",
      consent: "You need to agree in order to send the request.",
    },
  },
  cta: {
    title: "Ready to take the first step?",
    subtitle: "Send a consultation request or give us a call.",
  },
  footer: {
    tagline: "Dental clinic in Tirana.",
    explore: "Pages",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms of use",
  },
  legal: {
    draft: "Demo draft — the final text must be reviewed and approved by the clinic.",
    updated: "Updated: October 2026",
    privacy: {
      title: "Privacy policy",
      sections: [
        { title: "Who we are", text: "Sorèr Dental Clinic, Garden Building, Rruga e Kavajës, Tirana 1001, Albania. NIPT M52109034H." },
        { title: "What data we collect", text: "When you send an appointment request we collect your name, phone number, email (if provided), the selected service, your preferred date and your message." },
        { title: "How we use it", text: "Your data is used only to contact you about your request. It is not sold or shared for marketing purposes." },
        { title: "Retention", text: "Data is kept only as long as needed to handle your request or as required by law." },
        { title: "Your rights", text: "You can request access to, correction or deletion of your data by contacting us by phone." },
        { title: "Third-party services", text: "The map on this site is provided by Google Maps, which may process data according to its own policies." },
      ],
    },
    terms: {
      title: "Terms of use",
      sections: [
        { title: "General information", text: "The content of this website is for information only and does not replace a medical examination or advice." },
        { title: "Appointment requests", text: "The form sends a request. An appointment is confirmed only once the clinic contacts you and confirms it." },
        { title: "Results", text: "Before/after photos show individual cases. Results vary from patient to patient." },
        { title: "Contact", text: "For any questions you can reach us at +355 68 476 7455 or on Instagram @sorer_dental_clinic." },
      ],
    },
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved.",
    home: "Back to home",
  },
};

export default en;
