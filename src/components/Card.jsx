import React from "react"

export default function Card(prop) {
    return (
        <section className="card">
            <h3 className="card--title">{prop.title}</h3>
            <img src={process.env.PUBLIC_URL + prop.img} alt={prop.altText} />
            <h4>{prop.dates}</h4>
        </section>
    )
}