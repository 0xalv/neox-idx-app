import React from "react";
import idx_logo from "../assets/idx-logo.png";
import neox_logo from "../assets/neox-logo.svg";
import { Link } from "react-router-dom";
import { useConnect } from "wagmi";

interface HeaderProps {
  address: string | undefined;
  status: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ address, status }) => {
  const { connectors, connect } = useConnect();
  const availableConnector = connectors[0];

  return (
    <header>
      <div className="leftH">
        <Link to="/" className="link">
          <img src={idx_logo} alt="idx-logo" className="logo" />
        </Link>
        <Link to="/introduction" className="link">
          <div className="headerItem">Introduction</div>
        </Link>
        <Link to="/" className="link">
          <div className="headerItem">Factory</div>
        </Link>
        <Link to="/indexes" className="link">
          <div className="headerItem">Indexes</div>
        </Link>
        <Link to="/swap" className="link">
          <div className="headerItem">Swap</div>
        </Link>
      </div>

      <div className="rightH">
        <div className="headerItem">
          <img src={neox_logo} alt="neox-logo" className="neox" />
          NeoX
        </div>
        {availableConnector && (
          <button
            className="connectButton"
            onClick={() => connect({ connector: availableConnector })}
            type="button"
          >
            {status == "connected"
              ? `${address?.slice(0, 4)}...${address?.slice(-4)}`
              : "Connect"}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
