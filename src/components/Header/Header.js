import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopNav>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopNav>
        <Logo />
        <DesktopUserActions>
          <Button>Subscribe</Button>
          <TextLink href="/login">Already a subscriber?</TextLink>
        </DesktopUserActions>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-block-start: 48px;
    margin-block-end: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    margin-block-start: 16px;
    margin-block-end: 72px;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`;

const DesktopUserActions = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    gap: 8px;
  }
`;

const TextLink = styled.a`
  font-family: var(--font-family-serif);
  font-size: ${14 / 16}rem;
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
`;

export default Header;
