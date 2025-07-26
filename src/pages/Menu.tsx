import { useContext } from "react";
import { Nav, Stack } from "react-bootstrap";
import { Link } from "react-router";
import PagesContext from "./PagesContext";

export interface MenuItem {
  path: string;
  label: string;
  hidden?: boolean;
}

export interface MenuProps {
  className?: string;
  itemClassName?: string;
  items?: MenuItem[];
}

const Menu = ({ className, itemClassName, items = [] }: MenuProps) => {
  const { menuItems } = useContext(PagesContext);

  return (
    <Stack direction="horizontal" gap={2} className={className}>
      {[...menuItems, ...items]
        .filter(({ hidden }) => !hidden)
        .map(({ label, path }) => (
          <Nav.Link as={Link} className={itemClassName} key={path} to={path}>
            {label}
          </Nav.Link>
        ))}
    </Stack>
  );
};

export default Menu;
