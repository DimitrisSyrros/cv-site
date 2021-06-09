import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledForm, StyledInput, SubmitButton, ErrorMessage, FormTextArea} from "../../styles/ContactMeStyled";
import axios from "axios";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submit,setSubmit] = useState(false)
    async function onSubmit(data) {
        let config = {
            method: 'post',
            url: `/api/contact`,
            data: data,
        };
        try{
            setSubmit(true)
            const response = await axios(config);
            if (response.status === 200) {
                alert("Message Sent.I will get back to you as soon as possible!")
                reset();
                setSubmit(false)
            }
        }catch (error){
            alert("Something went wrong. Please try again. Or copy my email by clicking on it, on my contact info")
            setSubmit(false)
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput {...register("firstName", { required: true, maxLength: {value:20, message:"This seems too long"} })} placeholder="First Name" />
            {errors.firstName && <ErrorMessage>It seems you forgot to add your first name.</ErrorMessage>}

            <StyledInput {...register("lastName", { required: true, maxLength: {value:20, message:"This seems too long"} })} placeholder="Last Name" />
            {errors.lastName && <ErrorMessage>It seems you forgot to add your last name.</ErrorMessage>}

            <StyledInput {...register("email", { required: true, pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"There's seems to be something wrong with your email"}})} type="email"  placeholder="Email" />
            {errors.email && <ErrorMessage>It seems you forgot to add your email.</ErrorMessage>}

            <StyledInput {...register("subject", { required: true })} placeholder="Subject" />
            {errors.subject && <ErrorMessage>Your email needs a subject.</ErrorMessage>}

            <FormTextArea {...register("message", { required: true } )} placeholder="Compose your message..." />
            {errors.message && <ErrorMessage>You need to compose your message.</ErrorMessage>}

            <SubmitButton type="submit" disabled={submit}>Submit</SubmitButton>
        </StyledForm>
    );
}
