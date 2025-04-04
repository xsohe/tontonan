import Authenticated from "@/Layouts/Authenticated/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscription-plan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    };

    return (
        <>
            <Head title="Subscription Plan" />
            <Authenticated auth={auth}>
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                key={subscriptionPlan.id}
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationMonth={
                                    subscriptionPlan.active_period_in_month
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={subscriptionPlan.name === "Premium"}
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        ))}
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </Authenticated>
        </>
    );
}
