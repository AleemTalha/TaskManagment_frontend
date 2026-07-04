import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import CategoryTableRow from "./categorytablerow";
import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";

export default function CreateCategoryForm() {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <FloatingLabel
                        controlId="txtName"
                        label="Name"
                    >
                        <Form.Control type="text" placeholder="" />
                    </FloatingLabel>
                    <Form.Text className="text-danger"> 5 to 50 characters </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <FloatingLabel
                        controlId="txtRank"
                        label="Rank"
                    >
                        <Form.Control type="number" min={1} max={1000} placeholder="" />
                    </FloatingLabel>
                    <Form.Text className="text-danger"> 1 to 1000 </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="color" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <FloatingLabel
                        controlId="txtDescription"
                        label="Description"
                    >
                        <Form.Control as="textarea" rows={10} placeholder="" style={ { height : "200px"}} />
                    </FloatingLabel>
                    <Form.Text className="text-danger"> 10 to 500 characters </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Button type="button" variant="primary" style={{ minWidth: "100px" }} > <FontAwesomeIcon icon="fas fa-save" /> Add </Button>  &nbsp;
                    <Button type="button" variant="light" style={{ minWidth: "100px" }}  > <FontAwesomeIcon icon="fas fa-times" /> Close </Button>
                </Form.Group>
            </Form>
        </>
    )
}
