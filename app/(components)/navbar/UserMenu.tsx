'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/(hooks)/useRegisterModal";
import useLoginModal from "@/app/(hooks)/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/(hooks)/useRentModal";


interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        rentModal.onOpen();

    }, [currentUser, loginModal, rentModal]);

    return (
        <div className="relative">
            <div className="flex flex-row item-center justify-between gap-3 ">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                    onClick={onRent}>
                    Airbnb your home
                </div>
                <div className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px] 
                        border-neutral-200 
                        flex 
                        flex-row 
                        items-center 
                        gap-3 
                        rounded-full 
                        cursor-pointer 
                        hover:shadow-md 
                        transition"
                    onClick={toggleMenu}>
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    <div
                        className="
                        absolute 
                        rounded-xl 
                        shadow-md
                        w-[40vw]
                        md:w-[80%] 
                        bg-white 
                        overflow-hidden 
                        right-0 
                        top-12 
                        text-sm"
                    >
                        <div className="flex flex-col cursor-pointer">
                            {
                                currentUser ? (
                                    <>
                                        <MenuItem
                                            label="My trips"
                                            onClick={() => router.push('/trips')}
                                        />
                                        <MenuItem
                                            label="My favorites"
                                            onClick={() => router.push('/favorites')}
                                        />
                                        <MenuItem
                                            label="My reservations"
                                            onClick={() => router.push('/reservations')}
                                        />
                                        <MenuItem
                                            label="My properties"
                                            onClick={() => router.push('/properties')}
                                        />
                                        <MenuItem
                                            label="Airbnb your home"
                                            onClick={rentModal.onOpen}
                                        />
                                        <hr />
                                        <MenuItem
                                            label="Logout"
                                            onClick={() => signOut()}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <MenuItem
                                            label="Login"
                                            onClick={loginModal.onOpen}
                                        />
                                        <MenuItem
                                            label="Sign up"
                                            onClick={registerModal.onOpen}
                                        />
                                    </>)
                            }
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default UserMenu