import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.add1};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Navbar = styled.nav`
  max-width: 1600px;
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing.navbarHeight};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
`;

export const LogoWrapper = styled.div`
  margin-right: auto;
`;

export const NavMenu = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ theme }) => theme.spacing.navbarHeight};
  height: calc(100vh - ${({ theme }) => theme.spacing.navbarHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.add1};
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.4s, visibility 0.4s, transform 0.4s;

  @media ${({ theme }) => theme.breakpoints.md} {
    position: static;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-top: none;
    background-color: transparent;
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`;

export const StyledLink = styled.a.attrs((props) => ({
  as: props.test ? "span" : "a",
}))`
  display: block;
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.4s;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: clamp(14px, 1vw, 16px);
    text-transform: none;
    font-weight: 300;

    &:hover {
      color: ${({ theme }) => theme.colors.add1};
    }
  }
`;

export const Burger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  font-size: 0;
  color: transparent;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }

  span,
  &::after,
  &::before {
    content: "";
    width: 2rem;
    height: 3px;
    background: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.add1 : theme.colors.primary};
    border-radius: 10px;
    transition: opacity 0.2s, transform 0.2s;
    position: relative;
    transform-origin: 1px;
  }

  &::before {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  span {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(-20px)" : "translateX(0)"};
  }

  &::after {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const DropdownWrapper = styled.li`
  position: relative;

  &:hover {
    .dropdown-list {
      opacity: 0.95;
      visibility: visible;
      transition: opacity 0.4s 0.1s;
    }
  }
`;

export const DropdownList = styled.ul`
  display: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    position: absolute;
    display: block;
    top: calc(100% + 10px);
    left: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s 0.1s, visibility 0s 0.5s;
    transform: translateX(-50%);
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      bottom: calc(100% + 1px);
      left: 0;
      height: 20px;
      width: 100%;
    }
  }
`;

export const DropdownItem = styled.li`
  display: block;
  white-space: nowrap;
`;
