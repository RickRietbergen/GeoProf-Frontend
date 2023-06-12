import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RequestBlock from "../Widgets/requestBlock";
import {
  faUsers,
  faClock,
  faEnvelope,
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ManagerComponent = () => {
  return (
    <div className="componentsBlock componentsBlock_manager">
      <div className="manager_block_above">
        <div className="managers_blocks">
          <div className="managers_blocks_title">
            <FontAwesomeIcon icon={faUsers} />
            <p> Employees</p>
          </div>
          <div className="managers_blocks_number">20</div>
        </div>
        <div className="managers_blocks">
          <div className="managers_blocks_title">
            <FontAwesomeIcon icon={faClock} />
            <p> To Request</p>
          </div>
          <div className="managers_blocks_number">20</div>
        </div>
        <div className="managers_blocks">
          <div className="managers_blocks_title">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Notifications</p>
          </div>
          <div className="managers_blocks_number">20</div>
        </div>
      </div>

      <div className="manager_block_bottom">
        <div className="titleName">
          Recent Requests
          <button className="dotsMore">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
        <div className="requestBlocks">
          <RequestBlock />
          <RequestBlock />
          <RequestBlock />
          <RequestBlock />
        </div>
      </div>
    </div>
  );
};

export default ManagerComponent;
