import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const contactData = {
  sectionTitle: "Contact with Us",
  sectionDescription:
    "Fill a query about your need, or just a general enquiry, we would love to hear from you!",
  formFields: [
    { type: "text", placeholder: "Name:" },
    { type: "phone", placeholder: "Phone:" },
    { type: "email", placeholder: "Email:" },
    { type: "text", placeholder: "Message:" },
  ],
  buttonText: "Submit",
  contactInfo: {
    heading: "Contact Us",
    address: "Heidelberg, Heights VIC 3081, Australia",
    phone: "0000 124 567",
    email: "info@abilitycare.com.au",
    hours: "9:00 AM - 5:00 PM (Mon - Fri)",
  },
  socialLinks: [
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Linkedin, url: "#" },
  ],
};
