import styled from "@emotion/styled"
import { StyleProps } from "../../utils/types"

export const SharedLayoutStyled = styled.main<StyleProps>`
background-image: url(${props => props.bg});
background-repeat: no-repeat;
`