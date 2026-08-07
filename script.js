const translations = {
    es: {
        'nav.projects': 'Proyectos', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto',
        'home.title': 'Construyo sistemas de IA confiables sobre datos reales.',
        'home.lead': 'Diseño agentes, sistemas RAG y arquitecturas cloud con precisión, trazabilidad y costos controlados.',
        'home.projectsButton': 'Ver proyectos →', 'home.talkButton': 'Hablemos',
        'home.status': 'Disponible para proyectos de IA y colaboraciones',
        'projects.kicker': 'TRABAJO SELECCIONADO', 'projects.title': 'Proyectos construidos para funcionar.',
        'projects.intro': 'Dos productos sólidos presentados desde el problema, la solución y el valor que entregan.',
        'projects.viewProject': 'Ver proyecto →',
        'tourist.index': '01 · SISTEMA AGÉNTICO',
        'tourist.summary': 'Asistente inteligente para consultar información turística de Ecuador utilizando datos oficiales verificables.',
        'tourist.caseLead': 'Un sistema de IA agéntica que responde consultas turísticas sobre Ecuador utilizando información oficial recuperada y verificable.',
        'tourist.problem': 'La información turística está distribuida entre múltiples fuentes y puede ser difícil comprobar su actualidad o procedencia.',
        'tourist.solution': 'Una arquitectura de agentes coordinados con recuperación híbrida, contexto geográfico y respuestas respaldadas por fuentes oficiales.',
        'tourist.value': 'Consultas más claras, información trazable y una experiencia preparada para controlar precisión y costos.',
        'tourist.flow1': 'Fuentes oficiales', 'tourist.flow2': 'Recuperación híbrida', 'tourist.flow3': 'Orquestación de agentes', 'tourist.flow4': 'Respuesta trazable',
        'tourist.demo': 'Abrir demo ↗', 'tourist.visual1': 'Fuentes', 'tourist.visual2': 'Agentes', 'tourist.hybridTag': 'RAG híbrido',
        'artefactito.index': '02 · COMERCIO CONVERSACIONAL',
        'artefactito.summary': 'Asistente web de comercio conversacional que transforma una conversación en una cotización PDF verificable.',
        'artefactito.caseLead': 'Un asistente web que guía una conversación comercial y la convierte en una cotización PDF verificable.',
        'artefactito.problem': 'Convertir una conversación comercial en una cotización consistente suele requerir pasos manuales y validaciones separadas.',
        'artefactito.solution': 'Un flujo conversacional web que organiza la solicitud y genera un documento PDF verificable como resultado.',
        'artefactito.value': 'Una experiencia continua desde la intención del cliente hasta un artefacto comercial concreto y revisable.',
        'artefactito.flow1': 'Conversación', 'artefactito.flow2': 'Datos de la solicitud', 'artefactito.flow3': 'Validación', 'artefactito.flow4': 'Cotización PDF',
        'artefactito.tag1': 'Asistente web', 'artefactito.tag2': 'Comercio conversacional', 'artefactito.tag3': 'Cotización PDF', 'artefactito.quote': 'Cotización', 'artefactito.verifiableTag': 'Flujo verificable',
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
        'projects.intro': 'Two solid products presented through the problem, the solution, and the value they deliver.',
        'projects.viewProject': 'View project →',
        'tourist.index': '01 · AGENTIC SYSTEM',
        'tourist.summary': 'An intelligent assistant for exploring tourism information about Ecuador using verifiable official data.',
        'tourist.caseLead': 'An agentic AI system that answers tourism questions about Ecuador using retrieved and verifiable official information.',
        'tourist.problem': 'Tourism information is distributed across multiple sources, making its freshness and origin difficult to verify.',
        'tourist.solution': 'A coordinated agent architecture with hybrid retrieval, geographic context, and answers backed by official sources.',
        'tourist.value': 'Clearer queries, traceable information, and an experience designed to control accuracy and costs.',
        'tourist.flow1': 'Official sources', 'tourist.flow2': 'Hybrid retrieval', 'tourist.flow3': 'Agent orchestration', 'tourist.flow4': 'Traceable answer',
        'tourist.demo': 'Open demo ↗', 'tourist.visual1': 'Sources', 'tourist.visual2': 'Agents', 'tourist.hybridTag': 'Hybrid RAG',
        'artefactito.index': '02 · CONVERSATIONAL COMMERCE',
        'artefactito.summary': 'A conversational commerce web assistant that turns a conversation into a verifiable PDF quotation.',
        'artefactito.caseLead': 'A web assistant that guides a commercial conversation and turns it into a verifiable PDF quotation.',
        'artefactito.problem': 'Turning a sales conversation into a consistent quotation often requires manual steps and separate validations.',
        'artefactito.solution': 'A conversational web flow that organizes the request and generates a verifiable PDF document as its outcome.',
        'artefactito.value': 'A continuous experience from customer intent to a concrete, reviewable commercial artifact.',
        'artefactito.flow1': 'Conversation', 'artefactito.flow2': 'Request data', 'artefactito.flow3': 'Validation', 'artefactito.flow4': 'PDF quotation',
        'artefactito.tag1': 'Web assistant', 'artefactito.tag2': 'Conversational commerce', 'artefactito.tag3': 'PDF quotation', 'artefactito.quote': 'Quotation', 'artefactito.verifiableTag': 'Verifiable flow',
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

    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.borderBottomColor = window.scrollY > 50 ? 'var(--border-hover)' : 'var(--border)';
        }, { passive: true });
    }
});
