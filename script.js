const translations = {
    es: {
        'nav.projects': 'Proyectos', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto',
        'home.title': 'Construyo sistemas de IA confiables sobre datos reales.',
        'home.lead': 'Diseño agentes, sistemas RAG y arquitecturas cloud con precisión, trazabilidad y costos controlados.',
        'home.projectsButton': 'Ver proyectos →', 'home.talkButton': 'Hablemos',
        'home.status': 'Disponible para proyectos de IA y colaboraciones',
        'projects.kicker': 'TRABAJO SELECCIONADO', 'projects.title': 'Proyectos construidos para funcionar.',
        'projects.intro': 'Dos productos de IA que convierten información y conversaciones en resultados claros, revisables y listos para usar.',
        'projects.viewProject': 'Ver proyecto →',
        'tourist.index': '01 · SISTEMA AGÉNTICO',
        'tourist.summary': 'Asistente de IA para consultas turísticas sobre Ecuador que usa RAG híbrido y agentes coordinados para fundamentar respuestas en fuentes oficiales.',
        'tourist.heroKicker': 'IA AGÉNTICA PARA TURISMO EN ECUADOR',
        'tourist.caseLead': 'Información oficial para tu viaje, en una sola conversación. Turístico transforma fuentes dispersas sobre alojamiento, guías, requisitos, tarifas y destinos en respuestas claras y trazables.',
        'tourist.storyKicker': 'EL RETO DEL VIAJERO', 'tourist.storyTitle': 'La información existe. El reto es encontrarla.',
        'tourist.storyBody': 'Planificar un viaje por Ecuador todavía implica buscar en distintas ventanillas digitales: establecimientos autorizados en un portal, guías con licencia vigente en otro, y requisitos de ingreso, tarifas de Galápagos, feriados o consulados en sitios diferentes. Turístico convierte ese recorrido fragmentado en una conversación natural.',
        'tourist.examplesKicker': 'PREGUNTAS REALES', 'tourist.examplesTitle': 'Pregunta como hablarías con una persona.',
        'tourist.question1': '¿Qué hospedajes autorizados hay en Cuenca?',
        'tourist.question2': '¿Qué guías turísticos de Tena tienen licencia vigente y hasta cuándo?',
        'tourist.question3': 'Soy canadiense, ¿qué requisitos necesito para ingresar a Ecuador?',
        'tourist.question4': '¿Cuánto cuesta ingresar a Galápagos según mi categoría?',
        'tourist.question5': '¿Qué puedo hacer y ver en Cuenca?',
        'tourist.trustTitle': 'Respuestas con respaldo', 'tourist.trustBody': 'Cada respuesta cita la fuente oficial que la sustenta. Si el dato no aparece en una fuente del Estado, el sistema lo comunica claramente en lugar de inventarlo.',
        'tourist.techTitle': 'IA agéntica verificable', 'tourist.techBody': 'El sistema interpreta la intención, decide qué fuente oficial consultar y verifica la respuesta antes de presentarla.',
        'tourist.scaleTitle': 'Diseñado para escalar', 'tourist.scaleBody': 'Actualmente funciona con recursos de IA gratuitos. Una infraestructura premium permitiría ampliar capacidad, velocidad y cobertura.',
        'tourist.ctaKicker': 'TURÍSTICO EN ACCIÓN', 'tourist.ctaTitle': 'Planifica con información que puedes verificar.',
        'tourist.ctaBody': 'Haz tu consulta en lenguaje natural y revisa las fuentes que respaldan cada respuesta.',
        'tourist.problem': 'Planificar un viaje puede exigir contrastar información distribuida entre portales y documentos oficiales; encontrar una respuesta útil y comprobar su origen toma tiempo.',
        'tourist.solution': 'El sistema localiza evidencia con recuperación híbrida, incorpora contexto geográfico y coordina agentes para generar respuestas respaldadas por las fuentes consultadas.',
        'tourist.value': 'Reúne información relevante en una respuesta clara y permite revisar su procedencia antes de tomar decisiones de viaje.',
        'tourist.flow1': 'Fuentes oficiales', 'tourist.flow2': 'Recuperación híbrida', 'tourist.flow3': 'Orquestación de agentes', 'tourist.flow4': 'Respuesta trazable',
        'tourist.demo': 'Abrir Turístico ↗', 'tourist.visual1': 'Fuentes', 'tourist.visual2': 'Agentes', 'tourist.hybridTag': 'RAG híbrido',
        'artefactito.index': '02 · COMERCIO CONVERSACIONAL',
        'artefactito.summary': 'Asistente web que convierte una conversación comercial en datos estructurados y una cotización PDF revisable, con validaciones integradas en el flujo.',
        'artefactito.heroKicker': 'ATENCIÓN CONVERSACIONAL PARA EL HOGAR',
        'artefactito.caseLead': 'Comprar un electrodoméstico debería comenzar con una conversación sencilla. Artefactito brinda atención personalizada, responde consultas en lenguaje natural y transforma el interés de compra en una cotización concreta.',
        'artefactito.storyKicker': 'COMPRAR SIN FRICCIÓN', 'artefactito.storyTitle': 'Comprar no debería depender de esperar.',
        'artefactito.storyBody': 'Quien busca un electrodoméstico no siempre quiere visitar un local, esperar a que un asesor se desocupe o hacer preguntas bajo presión. Cuando la atención está saturada, una consulta sencilla puede convertirse en tiempo perdido para el cliente y en una oportunidad comercial sin continuidad.',
        'artefactito.experienceTitle': 'Al ritmo del cliente', 'artefactito.experienceBody': 'La persona explica qué producto busca y aclara sus dudas de manera natural, sin filas ni presión. Artefactito mantiene el contexto y prepara una cotización del producto consultado.',
        'artefactito.businessTitle': 'Continuidad comercial', 'artefactito.businessBody': 'Ofrece un canal para atender consultas iniciales, organizar el interés de compra y complementar al equipo humano cuando aumenta la demanda.',
        'artefactito.techTitle': 'Del diálogo al documento', 'artefactito.techBody': 'El agente interpreta la intención, conserva el contexto, estructura los datos relevantes y genera una cotización para el producto tratado.',
        'artefactito.ctaKicker': 'ARTEFACTITO EN ACCIÓN', 'artefactito.ctaTitle': 'De la primera pregunta a una cotización.',
        'artefactito.ctaBody': 'Solicita acceso y explora cómo una consulta sobre un producto para el hogar avanza de manera natural hasta una propuesta concreta.',
        'artefactito.problem': 'Pasar de una conversación a una cotización exige interpretar la solicitud, completar datos y trasladarlos entre pasos manuales, lo que puede generar demoras o inconsistencias.',
        'artefactito.solution': 'El asistente guía la conversación, estructura la solicitud, valida los campos necesarios y genera una cotización PDF como salida del proceso.',
        'artefactito.value': 'Mantiene el contexto comercial de principio a fin y entrega un documento organizado que puede revisarse antes de compartirlo.',
        'artefactito.flow1': 'Necesidad del hogar', 'artefactito.flow2': 'Conversación natural', 'artefactito.flow3': 'Información del producto', 'artefactito.flow4': 'Cotización',
        'artefactito.tag1': 'Agente conversacional', 'artefactito.tag2': 'Atención personalizada', 'artefactito.tag3': 'Cotización de producto', 'artefactito.quote': 'Cotización', 'artefactito.verifiableTag': 'Flujo verificable', 'artefactito.demo': 'Solicitar acceso a la demo',
        'artefactito.accessKicker': 'DEMO CON ACCESO CONTROLADO', 'artefactito.accessTitle': 'Demo con acceso controlado',
        'artefactito.accessBody': 'Artefactito se presenta en un entorno privado para mantener estable la demostración y proteger sus datos de prueba. Solicita acceso por correo; si ya tienes autorización, puedes continuar.',
        'artefactito.requestAccess': 'Solicitar acceso por correo', 'artefactito.continueDemo': 'Ya tengo acceso · Abrir demo ↗',
        'case.back': '← Volver a proyectos', 'case.problem': 'El problema', 'case.solution': 'La solución', 'case.value': 'El valor',
        'case.flow': 'FLUJO DEL SISTEMA', 'case.other': 'Ver los dos proyectos', 'footer.talk': 'Conversemos ↗'
    },
    en: {
        'nav.projects': 'Projects', 'nav.about': 'About', 'nav.contact': 'Contact',
        'home.title': 'I build reliable AI systems on real-world data.',
        'home.lead': 'I design agents, RAG systems, and cloud architectures with accuracy, traceability, and controlled costs.',
        'home.projectsButton': 'View projects →', 'home.talkButton': 'Let’s talk',
        'home.status': 'Available for AI projects and collaborations',
        'projects.kicker': 'SELECTED WORK', 'projects.title': 'Projects built to work.',
        'projects.intro': 'Two AI products that turn information and conversations into clear, reviewable, ready-to-use outcomes.',
        'projects.viewProject': 'View project →',
        'tourist.index': '01 · AGENTIC SYSTEM',
        'tourist.summary': 'AI assistant for tourism questions about Ecuador, using hybrid RAG and coordinated agents to ground answers in official sources.',
        'tourist.heroKicker': 'AGENTIC AI FOR TRAVEL IN ECUADOR',
        'tourist.caseLead': 'Official travel information, in one conversation. Turístico turns fragmented sources about accommodation, guides, entry requirements, fees, and destinations into clear, traceable answers.',
        'tourist.storyKicker': 'THE TRAVELER’S CHALLENGE', 'tourist.storyTitle': 'The information exists. Finding it should not be the hard part.',
        'tourist.storyBody': 'Planning a trip through Ecuador still means searching across separate digital portals: authorized establishments in one place, licensed guides in another, and entry requirements, Galápagos fees, public holidays, or consular information elsewhere. Turístico turns that fragmented journey into a natural conversation.',
        'tourist.examplesKicker': 'REAL QUESTIONS', 'tourist.examplesTitle': 'Ask the way you would speak to a person.',
        'tourist.question1': 'Which authorized accommodations are available in Cuenca?',
        'tourist.question2': 'Which tourism guides in Tena have valid licenses, and until when?',
        'tourist.question3': 'I am Canadian. What requirements must I meet to enter Ecuador?',
        'tourist.question4': 'How much does it cost to enter Galápagos for my visitor category?',
        'tourist.question5': 'What can I see and do in Cuenca?',
        'tourist.trustTitle': 'Answers backed by sources', 'tourist.trustBody': 'Every response cites the official source that supports it. If the information is not found in a government source, the system says so clearly instead of making it up.',
        'tourist.techTitle': 'Verifiable agentic AI', 'tourist.techBody': 'The system interprets intent, decides which official source to consult, and verifies the answer before presenting it.',
        'tourist.scaleTitle': 'Designed to scale', 'tourist.scaleBody': 'It currently runs with free AI resources. Premium infrastructure would allow its capacity, speed, and coverage to expand.',
        'tourist.ctaKicker': 'TURÍSTICO IN ACTION', 'tourist.ctaTitle': 'Plan with information you can verify.',
        'tourist.ctaBody': 'Ask your question in natural language and review the sources behind each answer.',
        'tourist.problem': 'Planning a trip can require cross-checking information across official portals and documents; finding a useful answer and confirming its source takes time.',
        'tourist.solution': 'The system retrieves evidence through hybrid search, adds geographic context, and coordinates agents to produce answers grounded in the consulted sources.',
        'tourist.value': 'It brings relevant information into a clear answer and lets users review its origin before making travel decisions.',
        'tourist.flow1': 'Official sources', 'tourist.flow2': 'Hybrid retrieval', 'tourist.flow3': 'Agent orchestration', 'tourist.flow4': 'Traceable answer',
        'tourist.demo': 'Open Turístico ↗', 'tourist.visual1': 'Sources', 'tourist.visual2': 'Agents', 'tourist.hybridTag': 'Hybrid RAG',
        'artefactito.index': '02 · CONVERSATIONAL COMMERCE',
        'artefactito.summary': 'Web assistant that turns a sales conversation into structured data and a reviewable PDF quotation, with validation built into the workflow.',
        'artefactito.heroKicker': 'CONVERSATIONAL SERVICE FOR THE HOME',
        'artefactito.caseLead': 'Buying a home appliance should begin with a simple conversation. Artefactito provides personalized assistance, answers questions in natural language, and turns purchase interest into a clear quote.',
        'artefactito.storyKicker': 'A FRICTIONLESS PURCHASE', 'artefactito.storyTitle': 'Buying should not depend on waiting.',
        'artefactito.storyBody': 'People looking for a home appliance may not want to visit a store, wait for a sales associate, or ask questions under pressure. When customer service is busy, a simple inquiry can become lost time for the customer and a sales opportunity with no clear next step.',
        'artefactito.experienceTitle': 'At the customer’s pace', 'artefactito.experienceBody': 'Customers describe the product they need and clarify questions naturally, without queues or pressure. Artefactito keeps the context and prepares a quote for the product discussed.',
        'artefactito.businessTitle': 'Sales continuity', 'artefactito.businessBody': 'It provides a channel for initial inquiries, organizes purchase interest, and complements the human team when service demand increases.',
        'artefactito.techTitle': 'From dialogue to document', 'artefactito.techBody': 'The agent interprets intent, preserves context, structures the relevant details, and generates a quote for the product discussed.',
        'artefactito.ctaKicker': 'ARTEFACTITO IN ACTION', 'artefactito.ctaTitle': 'From the first question to a quote.',
        'artefactito.ctaBody': 'Request access and explore how a home-product inquiry moves naturally toward a concrete proposal.',
        'artefactito.problem': 'Turning a conversation into a quotation requires interpreting the request, completing missing details, and moving them through manual steps, which can lead to delays or inconsistencies.',
        'artefactito.solution': 'The assistant guides the conversation, structures the request, validates the required fields, and generates a PDF quotation as the outcome.',
        'artefactito.value': 'It preserves the commercial context from start to finish and delivers an organized document that can be reviewed before sharing.',
        'artefactito.flow1': 'Household need', 'artefactito.flow2': 'Natural conversation', 'artefactito.flow3': 'Product information', 'artefactito.flow4': 'Quote',
        'artefactito.tag1': 'Conversational agent', 'artefactito.tag2': 'Personalized assistance', 'artefactito.tag3': 'Product quote', 'artefactito.quote': 'Quotation', 'artefactito.verifiableTag': 'Verifiable flow', 'artefactito.demo': 'Request demo access',
        'artefactito.accessKicker': 'CONTROLLED-ACCESS DEMO', 'artefactito.accessTitle': 'Controlled-access demo',
        'artefactito.accessBody': 'Artefactito is presented in a private environment to keep the demonstration stable and protect its test data. Request access by email; if you are already authorized, you can continue.',
        'artefactito.requestAccess': 'Request access by email', 'artefactito.continueDemo': 'I have access · Open demo ↗',
        'case.back': '← Back to projects', 'case.problem': 'The problem', 'case.solution': 'The solution', 'case.value': 'The value',
        'case.flow': 'SYSTEM FLOW', 'case.other': 'View both projects', 'footer.talk': 'Let’s connect ↗'
    }
};

function setLanguage(language) {
    const selected = translations[language] ? language : 'es';
    document.documentElement.lang = selected;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = translations[selected][element.dataset.i18n];
        if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-language-toggle]').forEach((button) => {
        const nextLanguage = selected === 'es' ? 'en' : 'es';
        button.textContent = nextLanguage.toUpperCase();
        button.setAttribute('aria-label', selected === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
    });
    localStorage.setItem('portfolio-language', selected);
}

document.addEventListener('DOMContentLoaded', () => {
    const preferred = localStorage.getItem('portfolio-language') || 'es';
    setLanguage(preferred);

    document.querySelectorAll('[data-language-toggle]').forEach((button) => {
        button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es'));
    });

    const accessDialog = document.querySelector('[data-access-dialog]');
    const demoGate = document.querySelector('[data-demo-gate]');
    if (accessDialog && demoGate) {
        demoGate.addEventListener('click', (event) => {
            event.preventDefault();
            accessDialog.showModal();
        });
        accessDialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => accessDialog.close());
        accessDialog.addEventListener('click', (event) => {
            if (event.target === accessDialog) accessDialog.close();
        });
    }

    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.borderBottomColor = window.scrollY > 50 ? 'var(--border-hover)' : 'var(--border)';
        }, { passive: true });
    }
});
