import axios from "@/utils/axios";
import toast from "react-hot-toast";


const handleContactUs = async (formData, setFormData) => {
  const loadingToastId = toast.loading("Saving...");
  const formDataToSend = new FormData();

  // Append form data fields
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  try {
    const response = await axios.post("/contact-us", formDataToSend);

    toast.dismiss(loadingToastId);
    toast.success("Inquiry Sent");

    // Reset form fields
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    toast.dismiss(loadingToastId);
    toast.error("Inquiry Failed.");
    console.error(error);
  }
};

export default handleContactUs;
