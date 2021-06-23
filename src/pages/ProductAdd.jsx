import {  Form, Formik } from "formik";
import React from "react";
import {  Button } from "semantic-ui-react";
import * as Yup from "yup";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Ürün Adi" />
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        {/* <FormField>
          <Field name="productName" placeholder="Ürün Adı"></Field>
          <ErrorMessage
            name="productName"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          />
        </FormField>
        <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
          <ErrorMessage
            name="unitPrice"
            render={(error) => (
              <Label pointing basic color="red" content={error}></Label>
            )}
          />
        </FormField> */}
        <Button color="green" type="submit">
          EKLE
        </Button>
      </Form>
    </Formik>
  );
}
