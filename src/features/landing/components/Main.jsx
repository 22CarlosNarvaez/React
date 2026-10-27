const Icon = ({ children }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
);

const icons = {
    target: (
        <Icon>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
        </Icon>
    ),
    shield: (
        <Icon>
            <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
            <path d="M12 9v6M9 12h6" />
        </Icon>
    ),
    graduation: (
        <Icon>
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </Icon>
    ),
    map: (
        <Icon>
            <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
        </Icon>
    ),
    cpu: (
        <Icon>
            <rect x="5" y="5" width="14" height="14" rx="3" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
            <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </Icon>
    ),
    alert: (
        <Icon>
            <path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
            <path d="M12 9v4M12 17h.01" />
        </Icon>
    )
};


const cards = [
    {
        title: 'Misiones Científicas',
        icon: icons.target,
        tone: 'primary',
        stat: '5',
        statLabel: 'políticas por misiones en 2024',
        text: 'Bioeconomía, alimentación, transición energética, soberanía sanitaria y ciencia para la paz.'
    },
    {
        title: 'Soberanía Sanitaria',
        icon: icons.shield,
        tone: 'success',
        stat: '74',
        statLabel: 'proyectos de I+D+i en salud (meta: 50)',
        text: 'La Universidad de Antioquia obtuvo el registro INVIMA para una cloroquina pública: 1,3 millones de unidades al año.'
    },
    {
        title: 'Becas sin Endeudamiento',
        icon: icons.graduation,
        tone: 'info',
        stat: '7.931',
        statLabel: 'personas apoyadas en el cuatrienio',
        text: '"Becas para el Cambio" prioriza estratos 1, 2 y 3: 2.509 en doctorado y 5.422 en maestría.'
    },
    {
        title: 'Ciencia con Enfoque Territorial',
        icon: icons.map,
        tone: 'warning',
        stat: '25.514',
        statLabel: 'investigadores (antes 21.094)',
        text: 'Los grupos reconocidos subieron de 6.160 a 6.322, con ventana de género y programas en 61 territorios.'
    },
    {
        title: 'Inteligencia Artificial',
        icon: icons.cpu,
        tone: 'secondary',
        stat: 'Conpes 4144',
        statLabel: 'Política Nacional de IA, fines de 2025',
        text: 'Además, se radicó un proyecto de ley para regular la inteligencia artificial.'
    },
    {
        title: 'Pendientes y Críticas',
        icon: icons.alert,
        tone: 'danger',
        stat: '0,31 %',
        statLabel: 'del PIB en I+D (meta: 0,50 %)',
        text: 'Controversia por el fin del convenio con Colfuturo y la suspensión de Fulbright; la Procuraduría alertó sobre convocatorias con regalías.'
    }
];

const InfoCard = ({ title, icon, tone, stat, statLabel, text }) => (
    // bg-body-tertiary y border se adaptan solos a data-bs-theme="light" / "dark"
    <article className="card h-100 bg-body-tertiary border rounded-4">
        <div className="card-body p-4 d-flex flex-column">

            {/* Icono + título */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <span
                    className={`d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded-3 bg-${tone}-subtle text-${tone}-emphasis`}
                    style={{ width: 44, height: 44 }}
                >
                    {icon}
                </span>
                <h2 className="h6 fw-semibold mb-0">{title}</h2>
            </div>

            {/* Dato clave */}
            <p className="fs-2 fw-semibold lh-1 mb-1">{stat}</p>
            <p className="small text-body-secondary mb-3">{statLabel}</p>

            {/* Resumen corto, empujado al fondo para alinear las tarjetas */}
            <p className="small text-body-secondary mb-0 mt-auto pt-3 border-top">
                {text}
            </p>
        </div>
    </article>
);

export const Main = () => {
    return (
        <section className="container py-5">

            {/* Título principal */}
            <header className="text-center mb-5">
                <h1 className="fw-bold display-5 mb-3">
                    Aportes Científicos Colombianos
                </h1>

                <p
                    className="text-body-secondary mx-auto mb-0"
                    style={{ maxWidth: '700px' }}
                >
                    Principales avances, políticas y desafíos de la ciencia,
                    tecnología e innovación en Colombia.
                </p>
            </header>

            {/* Tarjetas */}
            <div className="row g-4">
                {cards.map((card) => (
                    <div key={card.title} className="col-12 col-md-6 col-lg-4">
                        <InfoCard {...card} />
                    </div>
                ))}
            </div>

        </section>
    );
};