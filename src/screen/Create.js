import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import uniqid from 'uniqid'
import axios from 'axios';

export default function Create({ setNotes }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [form, setForm] = useState({ title: '', text: '' });

    const [id, setId] = useState(uniqid());

    const handleChange = (e) => {
        const { value, name } = e.target

        setForm({ ...form, [name]: value, id })
        console.log(form)

    };

    const addNote = async () => {

        setId(uniqid())
        setNotes(note => [...note, form])
        const resp = await axios.post("http://[::1]:3000/notes", form)
        console.log(resp.data)

        setForm({ title: '', text: '' })
    };





    return (
        <div>
            <h1 >Create</h1>
            <Container fluid >
                <Form className="mt-3" style={{
                    width: '50%'
                }}>
                    <Form.Group  >
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={handleChange} value={form.title} name='title' type="text" placeholder="Enter title" />

                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Text</Form.Label>
                        {/* <Form.Control onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter text" /> */}
                        <textarea cols="50" rows="80" onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter text" ></textarea>

                    </Form.Group>
                </Form> <br />
                {/* <button  className='btn btn-dark'>Add Note</button> */}
                <Button onClick={addNote} variant="primary" type="submit">
                    Add Note
                </Button>

            </Container >





        </div >
    )
}
