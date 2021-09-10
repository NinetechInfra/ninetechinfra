import {
  address,
  envelop,
  facebook,
  instagram,
  linkedin,
  location,
  phone,
  rAngle,
  twitter,
} from "./Icons";

export const addressInfo = [
  {
    key: "address",
    icon: address,
    text: "14, 3rd Floor, Hithaa complex",
    url: "https://www.google.co.in/maps/place/80+Feet+Ring+Rd,+Basaveshwar+Nagar,+Bengaluru,+Karnataka/@12.9843589,77.5349256,17z/data=!3m1!4b1!4m8!1m2!2m1!1s14,+3rd+Floor,+Hithaa+complex,+80+feet+Ring+Road+(Kengeri),Nagadevanhalli!3m4!1s0x3bae3dc18894b9c5:0x8e5a41756524097!8m2!3d12.9843589!4d77.5371143",
  },
  {
    key: "location",
    icon: location,
    text: "BENGALURU, Karnataka‌",
    url: "https://www.google.co.in/maps/place/80+Feet+Ring+Rd,+Basaveshwar+Nagar,+Bengaluru,+Karnataka/@12.9843589,77.5349256,17z/data=!3m1!4b1!4m8!1m2!2m1!1s14,+3rd+Floor,+Hithaa+complex,+80+feet+Ring+Road+(Kengeri),Nagadevanhalli!3m4!1s0x3bae3dc18894b9c5:0x8e5a41756524097!8m2!3d12.9843589!4d77.5371143",
  },
  {
    key: "email",
    icon: envelop,
    text: "info.ninetechinfra@gmail.com",
    url: "mailto:info.ninetechinfra@gmail.com",
  },
  {
    key: "phone1",
    icon: phone,
    text: "+91-9972461001",
    url: "tel:9972461001",
  },
];

export const socialInfo = [
  {
    key: "facebook",
    icon: facebook,
    cName: "w3-facebook",
    url: "",
  },
  {
    key: "twitter",
    cName: "w3-twitter",
    icon: twitter,
    url: "",
  },
  {
    key: "instagram",
    cName: "w3-instagram",
    icon: instagram,
    url: "",
  },
  {
    key: "google",
    cName: "w3-google",
    icon: linkedin,
    url: "",
  },
];

export const menuInfo = [
  { key: "aboutus", icon: rAngle, text: "About Us", url: "/about-us" },
  { key: "whyus", icon: rAngle, text: "Why Us", url: "/why-us" },
  { key: "services", icon: rAngle, text: "Services", url: "/services" },
  {
    key: "projectdomain",
    icon: rAngle,
    text: "Project Domain",
    url: "/project-domain",
  },
  { key: "blogs", icon: rAngle, text: "Blogs", url: "/blogs" },
];
