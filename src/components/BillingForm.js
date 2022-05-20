// import '../App.css';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const useStyles = () => ({});

const BillingForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState([
    {
      description: '',
      cost: '',
      quantity: '',
      tax: '',
    },
  ]);

  const handlecompute = () => {
    let total = 0;
    for (let i = 0; i < formData.length; i++) {
      total += Number(formData[i].cost) * Number(formData[i].quantity);
    }
    return total;
  };

  //sum of all totals and

  // const [results, setResults] = useState([
  //   { subTotal: '', tax: '', grandTotal: '' },
  // ]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formData];
    list[index][name] = value;
    setFormData(list);
  };

  const handleremove = (index) => {
    const list = [...formData];
    list.splice(index, 1);
    setFormData(list);
  };

  const handleaddclick = () => {
    setFormData([
      ...formData,
      {
        description: '',
        cost: '',
        quantity: '',
        total: '',
        tax: '',
      },
    ]);
  };

  return (
    <div>
      <Form>
        {formData.map((item, index) => (
          <>
            <Container>
              <Row className='mt-2' key={index}>
                <Col>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter item name'
                      name='description'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Cost</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Cost'
                      name='cost'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Qty</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Qty'
                      name='quantity'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Vat (%)</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Vat(%)'
                      name='tax'
                      onChange={(e) => handleinputchange(e, index)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Total</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Total'
                      name='total'
                      value={Number(item.cost) * Number(item.quantity)}
                      onChange={(e) => handlecompute(e.target.value, index)}
                    />

                    {/* <Form.Control
                      readOnly
                      type='text'
                      placeholder='total'
                      name='sums'
                      value={parseInt(item.cost) * parseInt(item.quantity)}
                      onChange={(e) => handleinputchange(e.target.value, index)}
                    /> */}
                  </Form.Group>
                </Col>

                <Col>
                  <div>
                    <span>
                      {' '}
                      Actions
                      <div id='dropdown-basic'>
                        {formData.length > 1 && (
                          <button
                            type='button'
                            className='btn btn-light mx-1'
                            onClick={() => handleremove(index)}
                          >
                            Delete Row
                          </button>
                        )}
                      </div>
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col>
                  {formData.length - 1 === index && (
                    <button
                      className='btn btn-success'
                      onClick={handleaddclick}
                    >
                      Add More
                    </button>
                  )}
                </Col>
              </Row>
            </Container>
          </>
        ))}
      </Form>
      <hr />
      {/* <p>
        jhougiuibu
        {formData.reduce((acc, curr) => acc + curr.total, 0)}
      </p> */}

      <Total className={classes.Totalss}>
      <div>
      <Row>
            <span>
              SubTotal
              <p>{handlecompute()}</p>
            </span>
          </Row>
        {formData.map((item,index) => (
          //output each tax value from the form
          
        ))}
        
          
          
          <Row>
            <span>tax</span>
          </Row>
          <Row>
            <span></span>
          </Row>
        </div>
      </Total>
    </div>
  );
};

export default BillingForm;

const Total = styled.div`
  position: absolute;
  display: flex;
  flex-direction: flex-end;
  right: 40% !important;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
