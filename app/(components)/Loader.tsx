'use client'

import { HashLoader } from "react-spinners"

const Loader = () => {
    return (
        <div className="h-[70vh] flex flec-col  justify-center items-center">
            <HashLoader
                size={100}
                color="#f43f5e"
            />
        </div>
    )
}

export default Loader