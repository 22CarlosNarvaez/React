import { useState } from 'react';

/**
 * Fotos: guárdalas en  public/img/cientificos/  (se sirven desde /img/cientificos/...).
 * Usa fotos oficiales (UdeA, Minciencias, etc.) respetando su licencia.
 * Si una foto no existe o falla, se muestra un avatar con las iniciales.
 */
const scientists = [
    {
        name: 'Wber Ríos Ortiz',
        role: 'Decano de Ciencias Farmacéuticas y Alimentarias, UdeA',
        tag: 'Soberanía sanitaria',
        tone: 'success',
        photo: '/img/cientificos/wber-rios.jpg',
        size: 120,
        text: 'Su facultad desarrolló la primera cloroquina de producción pública del país, con registro INVIMA en 2025.'
    },
    {
        name: 'Yesenia Olaya Requene',
        role: 'Ministra de Ciencia, Tecnología e Innovación',
        tag: 'Formación de alto nivel',
        tone: 'info',
        photo: '/img/cientificos/yesenia-olaya.jpg',
        size: 88,
        text: 'Impulsó Becas para el Cambio, que reemplazó el crédito condonable por financiación total y prioriza estratos 1, 2 y 3.'
    },
    {
        name: 'Gerson Jaimes',
        role: 'Coordinador científico, expedición antártica',
        tag: 'Ciencia antártica',
        tone: 'primary',
        photo: '/img/cientificos/gerson-jaimes.jpg',
        size: 64,
        text: 'Coordinó la ciencia de una expedición colombiana a la Antártica, donde el país ya es miembro pleno del SCAR.'
    }
];

const getInitials = (name) =>
    name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase();

/* Foto circular con respaldo de iniciales si la imagen no carga */
const Avatar = ({ name, photo, tone, size }) => {
    const [failed, setFailed] = useState(false);

    if (failed || !photo) {
        return (
            <span
                className={`d-inline-flex align-items-center justify-content-center rounded-circle fw-semibold bg-${tone}-subtle text-${tone}-emphasis`}
                style={{ width: size, height: size, fontSize: size / 3 }}
                role="img"
                aria-label={name}
            >
                {getInitials(name)}
            </span>
        );
    }

    return (
        <img
            src={photo}
            alt={name}
            width={size}
            height={size}
            className="rounded-circle border object-fit-cover"
            style={{ objectFit: 'cover' }}
            onError={() => setFailed(true)}
        />
    );
};

const ScientistCard = ({ name, role, tag, tone, photo, size, text }) => (
    <article className="card h-100 bg-body-tertiary border rounded-4">
        <div className="card-body p-4 d-flex flex-column align-items-center text-center">

            {/* Alto fijo: las fotos cambian de tamaño pero los nombres quedan alineados */}
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: 120 }}
            >
                <Avatar name={name} photo={photo} tone={tone} size={size} />
            </div>

            <h2 className="h5 fw-semibold mt-3 mb-1">{name}</h2>
            <p className="small text-body-secondary mb-3">{role}</p>

            <span
                className={`badge rounded-pill fw-medium px-3 py-2 mb-3 bg-${tone}-subtle text-${tone}-emphasis`}
            >
                {tag}
            </span>

            <p className="small text-body-secondary mb-0 mt-auto">{text}</p>
        </div>
    </article>
);

export const Props = () => {
    return (
        <section className="container py-5">

            <header className="text-center mb-5">
                <h1 className="fw-bold display-5 mb-3">
                    Personas detrás de los avances
                </h1>

                <p
                    className="text-body-secondary mx-auto mb-0"
                    style={{ maxWidth: '700px' }}
                >
                    Tres perfiles ligados a logros científicos del Gobierno del
                    Cambio (2022-2026).
                </p>
            </header>

            <div className="row g-4">
                {scientists.map((person) => (
                    <div key={person.name} className="col-12 col-md-6 col-lg-4">
                        <ScientistCard {...person} />
                    </div>
                ))}
            </div>

        </section>
    );
};