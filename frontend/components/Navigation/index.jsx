import { useContext, useState } from "react";
import Link from "next/link";
import { GlobalContext } from "../../pages/_app";
import {
  NavbarWrapper,
  Navbar,
  NavMenu,
  StyledLink,
  LogoWrapper,
  Burger,
  DropdownWrapper,
  DropdownList,
  DropdownItem,
} from "./styles";
import LanguagePicker from "./LanguagePicker";
import useMenuItems from "../../hooks/navigation";
import StrapiImage from "../StrapiImage";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const { global } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = useMenuItems();

  return (
    <NavbarWrapper>
      <Navbar>
        <LogoWrapper>
          <Link href="/">
            <a>
              <StrapiImage
                src={global?.logo}
                height={50}
                width={140}
                objectFit="contain"
                objectPosition="left"
              />
            </a>
          </Link>
        </LogoWrapper>
        <LanguagePicker closeMenu={() => setIsOpen(false)} global={global} />
        <NavMenu isOpen={isOpen}>
          {menuItems.map((item) => {
            return item?.dropdown ? (
              item.dropdown.data.length ? (
                <DropdownWrapper key={item.title}>
                  <Link href={item.url} passHref>
                    <StyledLink onClick={() => setIsOpen(false)}>
                      {item.title}
                    </StyledLink>
                  </Link>
                  <DropdownList className="dropdown-list">
                    {item.dropdown.data.map((dropdownItem) => {
                      // HIDE CATEGORY IF ITS EMPTY
                      return dropdownItem.attributes.offers.data.length ? (
                        <DropdownItem key={dropdownItem.id}>
                          <Link
                            href={`/categories/${dropdownItem.attributes.slug}`}
                            passHref
                          >
                            <StyledLink
                              dropdown
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.attributes.name}
                            </StyledLink>
                          </Link>
                        </DropdownItem>
                      ) : null;
                    })}
                  </DropdownList>
                </DropdownWrapper>
              ) : null
            ) : (
              <li key={item.title}>
                {item.url.charAt(0) === "#" ? (
                  <ScrollLink
                    to={item.url.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <StyledLink onClick={() => setIsOpen(false)} test>
                      {item.title}
                    </StyledLink>
                  </ScrollLink>
                ) : (
                  <Link href={item.url} passHref>
                    <StyledLink onClick={() => setIsOpen(false)}>
                      {item.title}
                    </StyledLink>
                  </Link>
                )}
              </li>
            );
          })}
        </NavMenu>
        <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span>Burger menu trigger</span>
        </Burger>
      </Navbar>
    </NavbarWrapper>
  );
};

export default Navigation;
