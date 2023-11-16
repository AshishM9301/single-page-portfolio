import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const Navbar = () => {
  const links = [
    {
      linkName: "Home",
      slug: "/",
    },
    {
      linkName: "Expertise",
      slug: "#expertise",
    },
    {
      linkName: "Work",
      slug: "#work",
    },
    {
      linkName: "Experience",
      slug: "#experience",
    },
    {
      linkName: "About",
      slug: "#about",
    },
    {
      linkName: "Contact",
      slug: "#contact",
    },
  ];

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      inset: "0px",
      borderRadius: "0px",
      border: 0,
    },
  };

  return (
    <div className="sticky">
      <div className="flex justify-between items-center w-full xl:w-[1200px] mx-auto py-4 px-4">
        <div className="text-4xl font-semibold">
          <p>Welcome</p>
        </div>
        <div className="gap-x-5 hidden md:flex items-center">
          {links.map((item, index) => (
            <Link
              to={item.slug}
              key={index.toString()}
              className="text-md font-light border-[1px] border-transparent hover:border-gray-500 px-4 py-1 duration-200 cursor-pointer hover:scale-[0.8]"
            >
              <p>{item.linkName}</p>
            </Link>
          ))}
        </div>
        <div className="block md:hidden">
          <button
            className="bg-transparent hover:bg-gray-100 px-2 py-1 rounded-md"
            onClick={openModal}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>

          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex flex-col w-full  duration-200 items-end">
              <button
                onClick={closeModal}
                className="self-start duration-200 ease-in-out rounded-md px-2.5 py-1 border-[1px] border-transparent hover:border-gray-200 bg-transparent hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faX} size="sm" />
              </button>

              <div className="flex flex-col mt-32">
                {links.map((item, index) => (
                  <div
                    key={index.toString()}
                    className="text-2xl text-right font-semibold border-b-[1px] border-transparent hover:border-gray-500 px-4 py-1 duration-200 cursor-pointer mt-6"
                  >
                    <p>{item.linkName}</p>
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
