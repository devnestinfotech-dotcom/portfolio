import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Formik } from 'formik';
import { ContactFormSchema } from './validation';
import { Box } from '@mui/material';
import { Heading, SectionWrapper, TextFieldComp, Title, NameEmailWrapper } from './index.styles';
import { isEmpty } from 'lodash';
import { SecondaryButton } from '../../common/common.styles';
import useIsMobile from '../../hooks/useIsMobile';
const whatsappNumber = '9974927198';
export const ContactForm = () => {
    const isMobile = useIsMobile();
    const handleWhatsAppSubmit = (values) => {
        const message = `*New Contact Form Submission*
    *Name:* ${values.name}
    *Email:* ${values.email}
    *Contact No:* ${values.contactNo}
    *Subject:* ${values.subject}

    *Message:* ${values.message}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };
    return (_jsx(Formik, { initialValues: {
            name: '',
            email: '',
            contactNo: '',
            subject: '',
            message: '',
        }, validationSchema: ContactFormSchema, onSubmit: handleWhatsAppSubmit, children: (props) => (_jsx(Form, { children: _jsxs(SectionWrapper, { isMobile: isMobile, children: [_jsxs(Box, { children: [_jsx(Title, { children: "Let's talk" }), _jsx(Heading, { children: "Enter your project details" })] }), _jsxs(NameEmailWrapper, { isMobile: isMobile, children: [_jsx(TextFieldComp, { id: "outlined-required", label: "Name", name: "name", value: props?.values?.name, onChange: props?.handleChange, error: !isEmpty(props?.errors?.name), helperText: props?.errors?.name, fullWidth: true }, "name"), _jsx(TextFieldComp, { id: "outlined-required", label: "Email", name: "email", value: props?.values?.email, onChange: props?.handleChange, error: !isEmpty(props?.errors?.email), helperText: props?.errors?.email })] }), _jsx(TextFieldComp, { id: "outlined-required", label: "Contact No", name: "contactNo", value: props?.values?.contactNo, onChange: props?.handleChange, error: !isEmpty(props?.errors?.contactNo), helperText: props?.errors?.contactNo }), _jsx(TextFieldComp, { id: "outlined-required", label: "Subject", name: "subject", value: props?.values?.subject, onChange: props?.handleChange, error: !isEmpty(props?.errors?.subject), helperText: props?.errors?.subject }), _jsx(TextFieldComp, { id: "outlined-required", name: "message", multiline: true, label: "Message", minRows: 2, value: props?.values?.message, onChange: props?.handleChange, error: !isEmpty(props?.errors?.message), helperText: props?.errors?.message }), _jsx(SecondaryButton, { onClick: () => props?.submitForm(), width: "100%", children: "Submit" })] }) })) }));
};
