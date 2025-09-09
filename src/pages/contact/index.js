import React from "react";
import styled from "styled-components";
import { SvgEmail, SvgLocation, SvgPhone } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { contactData } from "../../firebase";
import { ContactSection } from "../../components";

export const Contact = () => {
  return <ContactSection />;
};
