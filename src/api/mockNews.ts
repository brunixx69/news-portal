import { Article } from '../types/news';

export const MOCK_NEWS: Article[] = [
    {
        title: 'NVIDIA GeForce RTX 5090: Filtran especificaciones de la arquitectura Blackwell',
        description: 'Nuevos detalles sugieren que la RTX 5090 duplicará el rendimiento en trazado de rayos de la 4090.',
        content: 'La próxima generación de tarjetas gráficas de NVIDIA, basada en la arquitectura Blackwell, promete un salto generacional sin precedentes. Se rumorea que la RTX 5090 contará con 32GB de memoria GDDR7 y un bus de 512 bits.',
        url: 'https://gnews.io/hardware/rtx-5090-blackwell',
        image: 'https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date().toISOString(),
        source: { name: 'Hardware Zone', url: 'https://hardwarezone.com' },
        category: 'Hardware'
    },
    {
        title: 'AMD Ryzen 9000X3D: Fecha de lanzamiento y mejoras en V-Cache',
        description: 'AMD prepara el lanzamiento de sus nuevos procesadores con 3D V-Cache para dominar el gaming.',
        content: 'Los procesadores Ryzen 9000X3D basados en Zen 5 llegarán a finales de año. La optimización del V-Cache promete reducir las latencias y mejorar el rendimiento en juegos CPU-dependientes hasta en un 20%.',
        url: 'https://gnews.io/hardware/ryzen-9000x3d-launch',
        image: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        source: { name: 'TechPowerUp', url: 'https://techpowerup.com' },
        category: 'Hardware'
    },
    {
        title: 'Intel Arrow Lake: Los nuevos Core Ultra 200 cambian el socket a LGA-1851',
        description: 'La 15ª generación de Intel abandona el hyperthreading para priorizar la eficiencia térmica.',
        content: 'Intel ha confirmado que su arquitectura Arrow Lake utilizará el nuevo socket LGA-1851. Las pruebas internas muestran una mejora masiva en el rendimiento por vatio, alejándose de los altos consumos de las generaciones anteriores.',
        url: 'https://gnews.io/hardware/intel-arrow-lake-ultra',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        source: { name: 'AnandTech', url: 'https://anandtech.com' },
        category: 'Hardware'
    },
    {
        title: 'El estándar DDR6 entrará en producción masiva en 2025',
        description: 'JEDEC finaliza las especificaciones de la memoria DDR6 con velocidades de hasta 17600 MT/s.',
        content: 'La memoria RAM del futuro ya tiene forma. DDR6 no solo duplicará el ancho de banda de DDR5, sino que introducirá mejoras en la integridad de señal necesarias para la computación a alta escala y la IA.',
        url: 'https://gnews.io/technology/ddr6-memory-standard',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        source: { name: 'PC Gamer', url: 'https://pcgamer.com' },
        category: 'Hardware'
    },
    {
        title: 'SSDs PCIe 6.0: Velocidades de lectura que superan los 28 GB/s',
        description: 'Las primeras controladoras preparadas para PCIe 6.0 prometen velocidades de vértigo.',
        content: 'Phison y Samsung están en las fases finales del desarrollo de SSDs PCIe 6.0. Estas unidades están diseñadas para cargas de trabajo críticas, aunque se espera que lleguen al mercado entusiasta en los próximos 18 meses.',
        url: 'https://gnews.io/hardware/pcie-6-ssd-speed',
        image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2805a?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 21600000).toISOString(),
        source: { name: 'Tom\'s Hardware', url: 'https://tomshardware.com' },
        category: 'Hardware'
    },
    {
        title: 'IA Local: Cómo las NPUs integradas están cambiando el uso del PC',
        description: 'Windows 11 empieza a requerir NPUs de 40 TOPS para funciones avanzadas de Copilot+.',
        content: 'La tendencia actual es mover la IA de la nube al dispositivo local. Las NPUs integradas en los procesadores de Intel, AMD y Qualcomm permiten ejecutar LLMs pequeños de forma privada y sin latencia.',
        url: 'https://gnews.io/software/local-ai-npus',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 28800000).toISOString(),
        source: { name: 'The Verge', url: 'https://theverge.com' },
        category: 'Software'
    },
    {
        title: 'Snapdragon X Elite: La revolución de ARM en laptops con Windows',
        description: 'Qualcomm desafía a Apple con un rendimiento superior y autonomía de varios días.',
        content: 'Laptops de múltiples fabricantes han comenzado a adoptar el Snapdragon X Elite. Por primera vez, el ecosistema Windows cuenta con una arquitectura ARM competitiva capaz de ejecutar apps x86 con gran eficiencia.',
        url: 'https://gnews.io/technology/snapdragon-x-elite-arm',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        source: { name: 'Cnet', url: 'https://cnet.com' },
        category: 'Mercado'
    },
    {
        title: 'Apple M4: Los nuevos chips llegan al iPad Pro y pronto a los Mac',
        description: 'El salto a los 3nm de segunda generación ofrece un rendimiento single-core líder.',
        content: 'El chip M4 de Apple destaca por su motor neural mejorado. Los desarrolladores están utilizando esta potencia para edición de video 8K y generación de contenido procedural directamente en tablets.',
        url: 'https://gnews.io/hardware/apple-m4-performance',
        image: 'https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        source: { name: 'MacRumors', url: 'https://macrumors.com' },
        category: 'Hardware'
    },
    {
        title: 'Guerra de los 2nm: TSMC vs Samsung por la supremacía tecnológica',
        description: 'Ambos gigantes planean iniciar la producción de chips de 2nm a principios de 2025.',
        content: 'La miniaturización de componentes llega a un nuevo hito. TSMC ha asegurado pedidos de Apple y NVIDIA para sus nodos de 2nm, mientras Samsung apuesta por la tecnología Gate-All-Around (GAA) para recuperar terreno.',
        url: 'https://gnews.io/market/tsmc-samsung-2nm-war',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        source: { name: 'Bloomberg', url: 'https://bloomberg.com' },
        category: 'Mercado'
    },
    {
        title: 'PC Gaming en 2026: La consolidación del escalado por IA (DLSS 4 / FSR 4)',
        description: 'La inteligencia artificial ya no es opcional para jugar a resoluciones 4K.',
        content: 'Los últimos títulos AAA demuestran que el renderizado nativo está desapareciendo. Las nuevas versiones de DLSS y FSR utilizan redes neuronales para reconstruir frames con una calidad indistinguible de la original.',
        url: 'https://gnews.io/tendencias/pc-gaming-ai-upscaling',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
        publishedAt: new Date(Date.now() - 432000000).toISOString(),
        source: { name: 'Kotaku', url: 'https://kotaku.com' },
        category: 'Tendencias'
    }
];
