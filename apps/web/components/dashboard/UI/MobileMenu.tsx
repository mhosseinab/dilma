import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import MobileMenuItems from "./MobileMenuItems";

interface Props {
  title?: string;
  link?: string;
  buttonTitle?: string;
}

const MobileMenu: FC<Props> = ({ buttonTitle, link, title }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <Container rotate={showMenu ? 45 : 0}>
      <div className="menu__header">
        <Link href={"/dashboard"} passHref>
          <a style={{ cursor: "pointer" }}>
            <Image
              src={"/img/sidebarImg.png"}
              width={47}
              height={47}
              alt="menu"
            />
          </a>
        </Link>
        {title && link && (
          <>
            <h4>{title}</h4>
            <Link href={link} passHref>
              <button>{buttonTitle}</button>
            </Link>
          </>
        )}

        <div onClick={() => setShowMenu(!showMenu)} className="menu__icon">
          <Image
            src={"/img/icons/burger-menu.svg"}
            width={18}
            height={16}
            alt="menu"
          />
        </div>
      </div>
      {showMenu && (
        <div className="menu__items">
          <MobileMenuItems />
        </div>
      )}
    </Container>
  );
};

interface StyledProps {
  rotate?: number;
}

const Container = styled.div<StyledProps>`
  padding: 13px 38px;
  .menu__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu__icon {
      cursor: pointer;
      transition: transform ease-in 0.3s;
      transform: rotate(${(props) => props.rotate}deg);
    }
  }
  button {
    background: #03ab00;
    border-radius: 3px;
    width: fit-content;
    padding: 0 1em;
    height: 42px;
    color: #fff;
  }
`;

export default MobileMenu;
