const cards = [
    { title: 'Tarjeta 1', text: 'Descripción breve de la primera tarjeta.' },
    { title: 'Tarjeta 2', text: 'Descripción breve de la segunda tarjeta.' },
    { title: 'Tarjeta 3', text: 'Descripción breve de la tercera tarjeta.' },
    { title: 'Tarjeta 4', text: 'Descripción breve de la cuarta tarjeta.' },
    { title: 'Tarjeta 5', text: 'Descripción breve de la quinta tarjeta.' },
    { title: 'Tarjeta 6', text: 'Descripción breve de la sexta tarjeta.' },
]

export const Main = () => {
    return (
        <section className="container py-5">
            <h1 className="text-center mb-5">Bienvenido</h1>

            <div className="row g-4">
                {cards.map((card) => (
                    <div key={card.title} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}