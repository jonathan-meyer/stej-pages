import {
  CupHot,
  Facebook,
  Github,
  type IconProps,
  Instagram,
  QuestionCircleFill,
  Twitter,
  TwitterX,
} from "react-bootstrap-icons";

export type SocialIconVariant =
  | "Facebook"
  | "Twitter"
  | "TwitterX"
  | "Instagram"
  | "BuyMeCoffee"
  | "GitHub";

export interface SocialIcon extends IconProps {
  variant: SocialIconVariant;
  socialId?: string;
  url?: string;
}

const SocialIcon = ({ variant, socialId, url, ...props }: SocialIcon) => {
  switch (variant) {
    case "BuyMeCoffee":
      return (
        <a
          href={url ?? `https://buymeacoffee.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <CupHot {...props} title="Buy Me A Coffee" />
        </a>
      );
    case "Facebook":
      return (
        <a
          href={url ?? `https://www.facebook.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <Facebook {...props} title="Facebook" />
        </a>
      );
    case "Instagram":
      return (
        <a
          href={url ?? `https://instagram.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram {...props} title="Instagram" />
        </a>
      );
    case "Twitter":
      return (
        <a
          href={url ?? `https://x.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <Twitter {...props} title="X" />
        </a>
      );
    case "TwitterX":
      return (
        <a
          href={url ?? `https://x.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterX {...props} title="X" />
        </a>
      );
    case "GitHub":
      return (
        <a
          href={url ?? `https://github.com/${socialId ?? ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <Github {...props} title="GitHub" />
        </a>
      );
    default:
      return (
        <a href={url ?? `#${socialId ?? ""}`} target="_blank" rel="noreferrer">
          <QuestionCircleFill {...props} />
        </a>
      );
  }
};

export default SocialIcon;
