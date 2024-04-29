import styled, { css, CSSObject } from "styled-components";

interface Props {
    fontSize: "5" | "8" |  "10" |  "12" | "13" | "14" | "15"  | "16" | "18" | "20" | "22" | "24" | "27" | "28" | "40",
    fontWeight: "300" | "400" | "500" | "600" | "700" | "800" | "900",
    fontColor: "grey0" | "grey100" | "grey200" | "grey300" | "grey400" | "grey500" | "grey600",
}

export const headlineStyles = (props: Props): CSSObject => {
    const { fontSize, fontWeight, fontColor } = props;
    
    return {
        fontFamily: "Montserrat, sans-serif",
        fontSize: `${fontSize}px`,
        fontWeight: Number(fontWeight), 
        color: `var(--color-${fontColor})`,
    };
};

export const StyledH1 = styled.h1<Props>`
    ${({ fontSize, fontWeight, fontColor }) => headlineStyles({ fontSize, fontWeight, fontColor })}
`;

export const StyledH2 = styled.h2<Props>`
    ${({ fontSize, fontWeight, fontColor }) => headlineStyles({ fontSize, fontWeight, fontColor })}
`;

export const StyledP = styled.p<Props>`
    ${({ fontSize, fontWeight, fontColor }) => headlineStyles({ fontSize, fontWeight, fontColor })}
`;

export const StyledSpan = styled.span<Props>`
    ${({ fontSize, fontWeight, fontColor }) => headlineStyles({ fontSize, fontWeight, fontColor })}
`;
