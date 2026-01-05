import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Events = () => {
    const events = [
        {
            title: "AI & Future Tech Summit",
            description: "Join us for a deep dive into the future of Artificial Intelligence and what it means for humanity.",
            imgUrl: "/assets/events/event1.svg",
        },
        {
            title: "Generative AI Hackathon",
            description: "Build the next generation of AI tools in this 48-hour intense coding challenge.",
            imgUrl: "/assets/events/event2.svg",
        },
        {
            title: "Machine Learning Workshop",
            description: "A hands-on workshop to get you started with ML models and data processing.",
            imgUrl: "/assets/events/event3.svg",
        },
    ];

    const previousEvents = [
        {
            title: "Codex Hackathon 2025",
            description: "60+ teams competed mostly at MAIT. Winners: RADICALS (1st), Digital Destroyers (2nd), and NexaGen (3rd).",
            imgUrl: "/assets/events/codex_thumbnail.jpg",
            gallery: [
                "/assets/events/codex/pic_1.jpg", "/assets/events/codex/pic_2.jpg", "/assets/events/codex/pic-3.jpg", "/assets/events/codex/pic_4.jpg",
                "/assets/events/codex/pic_5.jpg", "/assets/events/codex/pic_6.jpg", "/assets/events/codex/pic_7.jpg", "/assets/events/codex/pic_8.jpg",
                "/assets/events/codex/pic_9.jpg", "/assets/events/codex/pic_10.jpg", "/assets/events/codex/pic_11.jpg", "/assets/events/codex/pic_12.jpg",
                "/assets/events/codex/pic_13.jpg", "/assets/events/codex/pic_14.jpg", "/assets/events/codex/pic_15.jpg", "/assets/events/codex/pic_16.jpg",
                "/assets/events/codex/pic_17.jpg", "/assets/events/codex/pic_18.jpg", "/assets/events/codex/pic_19.jpg", "/assets/events/codex/pic_20.jpg"
            ]
        },
    ];

    const [expandedEvent, setExpandedEvent] = useState(null);

    const toggleGallery = (index) => {
        if (expandedEvent === index) {
            setExpandedEvent(null);
        } else {
            setExpandedEvent(index);
        }
    };

    return (
        <section className="project" id="events">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Upcoming Events</h2>
                        <p>Check out our latest events, workshops, and hackathons designed to boost your AI knowledge.</p>
                        <Row className="event-cards-container">
                            {
                                events.map((event, index) => {
                                    return (
                                        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                                            <Card className="h-100 event-card text-center text-white bg-dark">
                                                <div className="card-img-wrapper p-3">
                                                    <Card.Img variant="top" src={event.imgUrl} style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto' }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>{event.title}</Card.Title>
                                                    <Card.Text>
                                                        {event.description}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>

                {/* Previous Events Section */}
                <Row className="mt-5">
                    <Col size={12}>
                        <h2>Previous Events</h2>
                        <p>A look back at our past hackathons, workshops, and meetups. Click on an event to view its gallery.</p>
                        {
                            previousEvents.map((event, index) => {
                                const isExpanded = expandedEvent === index;
                                return (
                                    <div key={index} className="mb-5">
                                        <Row className="mb-4 justify-content-center">
                                            <Col md={8} className="text-center">
                                                <Card
                                                    className="text-white bg-dark mb-3 border-0"
                                                    onClick={() => toggleGallery(index)}
                                                    style={{ cursor: 'pointer', overflow: 'hidden' }}
                                                >
                                                    <Card.Img
                                                        src={event.imgUrl}
                                                        alt="Card image"
                                                        style={{
                                                            height: '400px',
                                                            objectFit: 'cover',
                                                            filter: 'brightness(0.4)',
                                                            transition: 'transform 0.3s ease'
                                                        }}
                                                    />
                                                    <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                                                        <Card.Title><h3 className="display-6 fw-bold">{event.title}</h3></Card.Title>
                                                        <Card.Text className="fs-5">{event.description}</Card.Text>
                                                        <small className="text-light mt-3 border px-3 py-1 rounded-pill">
                                                            {isExpanded ? "Click to close gallery" : "Click to view gallery"}
                                                        </small>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        </Row>

                                        {/* Gallery Grid */}
                                        {isExpanded && event.gallery && (
                                            <Row className="animate__animated animate__fadeIn">
                                                {event.gallery.map((img, idx) => (
                                                    <Col key={idx} xs={6} md={4} lg={3} className="mb-4">
                                                        <Card className="h-100 bg-transparent border-0">
                                                            <Card.Img variant="top" src={img} className="img-fluid rounded" style={{ height: '200px', objectFit: 'cover' }} />
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        )}
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
