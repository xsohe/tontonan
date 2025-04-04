import { Link } from "@inertiajs/react";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import { UserMenus, UserOthers } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenus.map((menu, index) => (
                            <MenuItem
                                key={`${menu.text}-${index}`}
                                icon={menu.icon}
                                text={menu.text}
                                link={menu.link}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${menu.text}-${index}`}
                                icon={menu.icon}
                                text={menu.text}
                                link={menu.link}
                                method={menu.method}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>

                    {console.log(auth.activePlan)}
                    {auth.activePlan && (
                        <SubscriptionDetail
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                            name={auth.activePlan.name}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
