import { contactPage } from "./DataService";
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
    url: `${contactPage.addressUrl}`,
  },
  {
    key: "location",
    icon: location,
    text: "BENGALURU, Karnataka‌",
    url: `${contactPage.addressUrl}`,
  },
  {
    key: "email",
    icon: envelop,
    text: `${contactPage.email}`,
    url: `mailto:${contactPage.email}`,
  },
  {
    key: "phone1",
    icon: phone,
    text: `+91-${contactPage.normalPhoneNo}`,
    url: `tel:${contactPage.normalPhoneNo}`,
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
