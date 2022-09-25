import React, { useState } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome@latest'

export default function Notes({ notes, setNotes }) {

    console.log('notesprops', notes)
    const [hovered, setHovered] = useState(false)

    const deleteNote = (id) => {
        setNotes(notes.filter(n => n.id !== id))

    }


    return (

        <Container className='mt-3'>

            <h1>This is note page</h1>
            <Row>
                {notes.map((e, g) =>
                    <Col>
                        < Card key={e.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{g + 1}: {e.title}</Card.Title>
                                {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                                <Card.Text style={{ backgroundColor: 'cyan' }}>
                                    {e.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}

            </Row>

        </Container >
    )


};
