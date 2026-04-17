import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialValues = {
  nome: "",
  email: "",
  mensagem: "",
};

const initialStatus = {
  label: "ENVIAR MENSAGEM",
  icon: "fa-regular fa-paper-plane",
  state: "idle",
};

const EMAILJS_PUBLIC_KEY = "-arjr-fJHliQLbOrj";
const EMAILJS_SERVICE_ID = "service_hawon8a";
const EMAILJS_TEMPLATE_ID = "template_r5wdceq";

export function useContactForm() {
  const [formData, setFormData] = useState(initialValues);
  const [status, setStatus] = useState(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      label: "ENVIANDO...",
      icon: "",
      state: "sending",
    });

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData
      );

      setFormData(initialValues);
      setStatus({
        label: "MENSAGEM ENVIADA",
        icon: "fa-solid fa-check",
        state: "success",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus({
        label: "ERRO AO ENVIAR",
        icon: "fa-solid fa-xmark",
        state: "error",
      });
    } finally {
      window.setTimeout(() => {
        setStatus(initialStatus);
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return {
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
