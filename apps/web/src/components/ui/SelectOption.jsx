import styled from "styled-components";
import { Select as AntSelect } from "antd";

export const SelectOption = styled(AntSelect.Option)`
  color: ${({ theme }) => theme.colors.font1};
`;
