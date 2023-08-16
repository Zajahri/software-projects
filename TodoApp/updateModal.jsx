import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const UpdateModal = (props) => {
    const [closeModal, setCloseModal] = useState(false)
    const closeModalHandler = () => {
        setCloseModal(true)
    }
    return (
        <div className={closeModal && 'invisible'}>
            <div className=" inset-0 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 h-24 w-64 bg-orange-400 rounded-md">
                <div className="w-full bg-white ">
                    <input className=" h-10 w-full  " type="text" />
                </div>
                <div className="flex justify-between p-5">
                    <span className="hover:cursor-pointer hover:text-red-600"><FontAwesomeIcon icon={faCheck} /></span>
                    <span onClick={closeModalHandler} className="hover:cursor-pointer hover:text-red-600"><FontAwesomeIcon icon={faXmark} /></span>
                </div>
            </div>
        </div>
    )
}
export default UpdateModal