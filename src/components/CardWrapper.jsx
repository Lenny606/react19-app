import {Card} from "./Card.jsx";


export const CardWrapper = ({title, description}) => {
    return (
        <>
            <CardWrapper></CardWrapper>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="Card 1" description="Description for Card 1"/>
                    <Card title="Card 2" description="Description for Card 2"/>
                    <Card title="Card 3" description="Description for Card 3"/>
                </div>
            </div>
        </>
    )
}