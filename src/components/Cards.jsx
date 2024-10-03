import React from "react"
import Card from "./Card"

export default function Cards() {
    return (
        <section className="Cards">
            <Card 
                title="Myrtle Beach 2024"
                img="/images/MyrtleBeach.jpg"
                altText="Family at Myrtle Beach"
                dates="August 24 - 31, 2024"
            />
        </section>
    )
}