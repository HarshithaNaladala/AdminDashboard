import axios from "axios";
import { useState } from "react";

export default function SCFormSubmitHandler({
  user,
  firstName,
  lastName,
  campusEmail,
  resetUserForm,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user || !firstName || !lastName || !campusEmail) {
      openModal("Please fill in all fields.");
      return;
    } else if (!emailRegex.test(campusEmail)) {
      openModal("Requestor not found");
      return;
    } else {
      try {
        const data = {
          token: "9264211c-c9e0-46ac-82a5-44681310be84",
          courseType: "Sandbox Course",
          requestorEmail: campusEmail,
        };

        const response = await axios.post(
          "https://learningtoolsdev.gsu.edu/admindashboard/api/courses?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==",
          data
        );

        console.log("API Response:", response.data);
        if (response.data === "Success") {
          openModal("Course Section created successfully");

          resetUserForm();
        } else {
          openModal("Requestor not found");
        }
      } catch (error) {
        console.error("API Error:", error);
        openModal("Error creating the section. Please try again");
      }
    }
  };

  return { handleSubmit, modalIsOpen, modalMessage, closeModal };
}
