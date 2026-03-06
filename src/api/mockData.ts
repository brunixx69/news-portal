import { Article } from '../types/news';

export const MOCK_ARTICLES: Article[] = [
    {
        id: '1',
        title: 'NVIDIA Blackwell: El amanecer de la IA Generativa',
        description: 'La nueva arquitectura de NVIDIA promete un rendimiento 30 veces superior para LLMs.',
        content: 'NVIDIA ha presentado oficialmente su arquitectura Blackwell, diseñada para alimentar la próxima generación de centros de datos de IA. Con más de 208 mil millones de transistores, es el chip más potente jamás creado...',
        author: 'Jensen Huang',
        date: new Date().toISOString(),
        category: 'IA',
        imageUrl: 'https://images.unsplash.com/photo-1587202376732-83090c1d8abc?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'Hardware Insider', url: '#' }
    },
    {
        id: '2',
        title: 'Quantum Computing: Rompiendo la barrera de los 1000 qubits',
        description: 'IBM anuncia un procesador cuántico que supera los límites teóricos previos.',
        content: 'La era de la computación cuántica útil está más cerca de lo que pensamos. El nuevo procesador Condor de IBM ha demostrado estabilidad en operaciones complejas que antes eran imposibles de procesar en tiempo real...',
        author: 'Arvind Krishna',
        date: new Date(Date.now() - 3600000).toISOString(),
        category: 'Hardware',
        imageUrl: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'Quantum Mag', url: '#' }
    },
    {
        id: '3',
        title: 'Sora 2.0: Video Generativo Indistinguible de la Realidad',
        description: 'OpenAI actualiza su modelo de video con capacidades de física de partículas mejoradas.',
        content: 'La nueva versión de Sora permite generar videos de hasta 5 minutos con una coherencia temporal perfecta. Los expertos en efectos visuales están asombrados por la forma en que el modelo maneja la luz y las sombras...',
        author: 'Sam Altman',
        date: new Date(Date.now() - 7200000).toISOString(),
        category: 'IA',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'AI Today', url: '#' }
    },
    {
        id: '4',
        title: 'React 19: El fin de useMemo y useCallback',
        description: 'El nuevo compilador de React automatiza la memorización para un rendimiento óptimo.',
        content: 'React Forget, ahora integrado en la versión 19, promete eliminar la necesidad de optimizaciones manuales. Los desarrolladores podrán enfocarse en la lógica del producto mientras el compilador optimiza el renderizado...',
        author: 'Dan Abramov',
        date: new Date(Date.now() - 14400000).toISOString(),
        category: 'Software',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'Dev Weekly', url: '#' }
    },
    {
        id: '5',
        title: 'Cyberpunk 2077: Actualización "Orion" y el futuro del motor RED',
        description: 'CD Projekt Red revela detalles sobre la integración de Unreal Engine 5 en la secuela.',
        content: 'La transición a UE5 permitirá un nivel de detalle en Night City nunca antes visto. La arquitectura Nanite y Lumen serán fundamentales para crear la atmósfera cyberpunk definitiva en la próxima entrega...',
        author: 'Adam Badowski',
        date: new Date(Date.now() - 21600000).toISOString(),
        category: 'Cyberpunk',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'Gaming World', url: '#' }
    },
    {
        id: '6',
        title: 'Crisis en Silicon Valley: ¿Se acabó la era del dinero gratis?',
        description: 'El aumento de las tasas de interés impacta el financiamiento de startups de alto riesgo.',
        content: 'Las valoraciones de las unicornios están cayendo a medida que los inversores buscan rentabilidad sobre crecimiento. El mercado tecnológico está entrando en una fase de consolidación necesaria...',
        author: 'Sheryl Sandberg',
        date: new Date(Date.now() - 86400000).toISOString(),
        category: 'Mercado',
        imageUrl: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200',
        source: { name: 'Tech Finance', url: '#' }
    }
];
