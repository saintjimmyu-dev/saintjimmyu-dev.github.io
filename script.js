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
        'tourist.caseLead': 'Convierte información turística dispersa en respuestas claras y trazables. La arquitectura combina recuperación híbrida, contexto geográfico y agentes coordinados para sustentar cada respuesta en fuentes oficiales.',
        'tourist.problem': 'Planificar un viaje puede exigir contrastar información distribuida entre portales y documentos oficiales; encontrar una respuesta útil y comprobar su origen toma tiempo.',
        'tourist.solution': 'El sistema localiza evidencia con recuperación híbrida, incorpora contexto geográfico y coordina agentes para generar respuestas respaldadas por las fuentes consultadas.',
        'tourist.value': 'Reúne información relevante en una respuesta clara y permite revisar su procedencia antes de tomar decisiones de viaje.',
        'tourist.flow1': 'Fuentes oficiales', 'tourist.flow2': 'Recuperación híbrida', 'tourist.flow3': 'Orquestación de agentes', 'tourist.flow4': 'Respuesta trazable',
        'tourist.demo': 'Abrir demo ↗', 'tourist.visual1': 'Fuentes', 'tourist.visual2': 'Agentes', 'tourist.hybridTag': 'RAG híbrido',
        'artefactito.index': '02 · COMERCIO CONVERSACIONAL',
        'artefactito.summary': 'Asistente web que convierte una conversación comercial en datos estructurados y una cotización PDF revisable, con validaciones integradas en el flujo.',
        'artefactito.caseLead': 'Conecta una necesidad de compra con una propuesta comercial concreta. El flujo conversacional captura y valida la información necesaria antes de generar la cotización.',
        'artefactito.problem': 'Pasar de una conversación a una cotización exige interpretar la solicitud, completar datos y trasladarlos entre pasos manuales, lo que puede generar demoras o inconsistencias.',
        'artefactito.solution': 'El asistente guía la conversación, estructura la solicitud, valida los campos necesarios y genera una cotización PDF como salida del proceso.',
        'artefactito.value': 'Mantiene el contexto comercial de principio a fin y entrega un documento organizado que puede revisarse antes de compartirlo.',
        'artefactito.flow1': 'Conversación', 'artefactito.flow2': 'Datos de la solicitud', 'artefactito.flow3': 'Validación', 'artefactito.flow4': 'Cotización PDF',
        'artefactito.tag1': 'Asistente web', 'artefactito.tag2': 'Comercio conversacional', 'artefactito.tag3': 'Cotización PDF', 'artefactito.quote': 'Cotización', 'artefactito.verifiableTag': 'Flujo verificable', 'artefactito.demo': 'Abrir demo ↗',
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
        'tourist.caseLead': 'It turns scattered tourism information into clear, traceable answers. The architecture combines hybrid retrieval, geographic context, and coordinated agents to ground each response in official sources.',
        'tourist.problem': 'Planning a trip can require cross-checking information across official portals and documents; finding a useful answer and confirming its source takes time.',
        'tourist.solution': 'The system retrieves evidence through hybrid search, adds geographic context, and coordinates agents to produce answers grounded in the consulted sources.',
        'tourist.value': 'It brings relevant information into a clear answer and lets users review its origin before making travel decisions.',
        'tourist.flow1': 'Official sources', 'tourist.flow2': 'Hybrid retrieval', 'tourist.flow3': 'Agent orchestration', 'tourist.flow4': 'Traceable answer',
        'tourist.demo': 'Open demo ↗', 'tourist.visual1': 'Sources', 'tourist.visual2': 'Agents', 'tourist.hybridTag': 'Hybrid RAG',
        'artefactito.index': '02 · CONVERSATIONAL COMMERCE',
        'artefactito.summary': 'Web assistant that turns a sales conversation into structured data and a reviewable PDF quotation, with validation built into the workflow.',
        'artefactito.caseLead': 'It connects a purchasing need with a concrete commercial proposal. The conversational flow captures and validates the required information before generating the quotation.',
        'artefactito.problem': 'Turning a conversation into a quotation requires interpreting the request, completing missing details, and moving them through manual steps, which can lead to delays or inconsistencies.',
        'artefactito.solution': 'The assistant guides the conversation, structures the request, validates the required fields, and generates a PDF quotation as the outcome.',
        'artefactito.value': 'It preserves the commercial context from start to finish and delivers an organized document that can be reviewed before sharing.',
        'artefactito.flow1': 'Conversation', 'artefactito.flow2': 'Request data', 'artefactito.flow3': 'Validation', 'artefactito.flow4': 'PDF quotation',
        'artefactito.tag1': 'Web assistant', 'artefactito.tag2': 'Conversational commerce', 'artefactito.tag3': 'PDF quotation', 'artefactito.quote': 'Quotation', 'artefactito.verifiableTag': 'Verifiable flow', 'artefactito.demo': 'Open demo ↗',
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
