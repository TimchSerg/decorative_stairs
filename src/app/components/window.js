import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Field } from "react-final-form";

import {composeValidators} from '../components/form/validators/compose.validators';
import {requiredValidator} from '../components/form/validators/required.validator';
import {phoneValidator} from '../components/form/validators/phone.validator';
import PhoneField from './form/fields/phone';
import TextField from './form/fields/text';

import ApiController from '../../Api.controller';

const api = new ApiController();

export const Window = (props) => {
  const {show, setShow} = props;
  
  const onSubmit = async (values) => {
    const response = await api.post(`/mail/stairs/feedback`, values);
console.log(response)
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="custom-modal-styling-title">
            Получить консультацию
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className='col-12 d-flex justify-content-center'>Заполните форму, мы свяжемся с вами</span>
          <Form
            onSubmit={onSubmit}
            // initialValues={formData}
            render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
                <div className="mt-1 mb-2">
                  <Field
                    validate={composeValidators(requiredValidator)}
                    name="fio"
                    label="Ваше имя:"
                    render={TextField}
                    settings={{
                      placeholder: "Укажите как к вам обращаться",
                    }}
                  />
                </div>

                <div className="mt-1 mb-2">
                  <Field
                    validate={composeValidators(requiredValidator, phoneValidator)}
                    name="phone"
                    label="Номер телефона:"
                    render={PhoneField}
                    settings={{
                    placeholder: "Введите свой номер телефона",
                    mask: "+00000000000",
                    }}
                  />
                </div>

               

                <div className="p-mt-2 col-12 d-flex justify-content-center">
                    <button
                        type="submit"
                        className="col-12 main-btn-actions"
                        disabled={submitting}
                    >
                        Заказать консультацию
                    </button>
                </div>
            </form>
            )}
        />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Window;