import React, { useEffect, useState } from "react";
import {
  Snowflake,
  Gift,
  Bell,
  TreePine,
  Headphones,
  Plane,
  Battery,
  GlassWater,
  BikeIcon,
  Globe2Icon,
  Apple,
  BatteryCharging,
  Plug,
  Spade,
  Wheat,
  WheatIcon,
  Bot,
} from "lucide-react";
import PulsingGradient from "../components/PulsingGradient";
import useSound from "use-sound";

const ChristmasPage = () => {
  const christmasButtons = [
    {
      icon: <Headphones className="w-6 h-6" />,
      label: "⭐ Airpods ⭐",
      url: "https://www.amazon.com/gp/product/B0D1XD1ZV3/ref=s9_bw_cg_APBX9_1a1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=AYZQ1J0XXKTBZ40TMQ5G&pf_rd_t=101&pf_rd_p=2d54a7a5-ee31-487d-b489-6b1b5851ee1c&pf_rd_i=172282",
      color: "from-yellow-100 to-yellow-100",
      isPriority: true,
    },
    {
      icon: <Battery className="w-6 h-6" />,
      label: "UPS",
      url: "https://www.amazon.com/dp/B00429N19W/ref=twister_B0B4QS4F25?_encoding=UTF8&th=1",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      label: "Owala",
      url: "https://www.amazon.com/dp/B0C59B9VJ4/ref=twister_B0DP5BFW3Z?_encoding=UTF8&th=1",
      color: "from-blue-400 to-blue-300",
    },
    {
      icon: <BikeIcon className="w-6 h-6" />,
      label: "Caroma Electric Scooter",
      url: "https://www.amazon.com/Caroma-Electric-Scooters-Adjustable-Commuting/dp/B0CHYX455Q/ref=sr_1_6?dib=eyJ2IjoiMSJ9.W6jJ5fphGGY_3ZgJCQLtTeQLPIX4U-ECVHC2eyGX_qYgJqHBAMmxPIv5JiFTbBrD_V4StFc-0vkmyMleaPw4Y-0UGuKPlVKPErnWK5qmQtLeYHNIIHRrTUNezyIlWBP5wYgEJm1_G0xk52VLzxIuZjYlNd8GK-9j5ZgnQ82x7dG7zVNIc9jDroNyKB-gBuWqsxgWEkVoLxKu4b5pe9Rtbiyi2_5TWwkx3DiHmZ3A6eCHr_TIy23ZC8APC7YXBC3ZtjLBTYdmmo48XvylD2t2xmR3F9P8J43VMYxsDgf3VE8.gZpTV0M_axe9N4RAHJGX9lWRON36FJVjIjEWObXUXWo&dib_tag=se&keywords=caroma&qid=1733804184&sr=8-6",
      color: "from-green-400 to-blue-300",
    },
    {
      icon: <Globe2Icon className="w-6 h-6" />,
      label: "Hoverboard",
      url: "https://www.amazon.com/LIEAGLE-Hoverboard-Bluetooth-Balancing-Certified/dp/B07JFZ9JTT/ref=sr_1_5?crid=3LAGK1V2SPNGJ&dib=eyJ2IjoiMSJ9.8FM6ZSv-KEVGLrFkNEXjVgf3rIjSfvQMM8wR29YfP8O-n08s_uE9-J2_6h53eZRWfCOIi26ojtfzMvy3x3AU9fxU7XILnDytzQbomZYzFxbRQ-TKgSBQ8qjQ9uAAsFBsXd-u_NzvhWg7Jg_v7XQiiHoD58kRrOlAVWg7XtrhwC9V8AiXo9YsM6ojXdOfVozpsiHkl4esVkv2R9_wJlCCNqxf7F1pEm8l1vN0KkNUICik32RuKDKj-ObtSHHn_GfcSEe9IhCXlHOcq6zI_djErFJRBwAjm2ab0rqUM7E9UxQ.vG56_VvZinJGnySDGJrSER8M7REpGVh9nHnXkq3HH_A&dib_tag=se&keywords=hoverboard&qid=1733804254&sprefix=hoverboard%2Caps%2C126&sr=8-5&th=1",
      color: "from-green-400 to-red-400",
    },
    {
      icon: <Apple className="w-6 h-6"></Apple>,
      label: "⭐ Apple Watch ⭐",
      url: "https://www.plug.tech/products/apple-watch-series-9-45mm-midnight-gps",
      color: "from-red-500 to-red-400",
    },
    {
      icon: <BatteryCharging className="w-6 h-6"></BatteryCharging>,
      label: "Magsafe Wireless Charger",
      url: "https://www.amazon.com/Magnetic-Wireless-Mag-Safe-Charger-Charging/dp/B0CYTL7G2N/ref=sr_1_9?crid=1R0DBCJ2RXKTA&dib=eyJ2IjoiMSJ9.aQyatsKcJr2q6C7m0dps5maQFrhkLE3olIU0n6t7tOAG-VIcTHXlI57oI6Sq3B72-dt2jLD6pbnqtEB1RzsLanuuNDsVSIU3gD2jP_wzkJkdX-Nr7XYba10I5LZ5jze1kClSh2OQp7fmU5Z8P5MLabbDrMJNOYnnaeln7oYnjpcSdsCOHisxRyS6Z_9Db9hYAXd1X0Ic_9H-sO5MAZ7ZERAr1jh_e9Wgf1Xev3SW76s.-YMLPWeaE7E2RP-1-Byp6XPKCBdaZWPUMXdmv8aqcPY&dib_tag=se&keywords=magsafe+charger&qid=1733804755&sprefix=magsafe+%2Caps%2C117&sr=8-9",
      color: "from-zinc-50 to-zinc-50",
    },
    {
      icon: <Plug className="w-6 h-6" />,
      label: "Outlets (check size), i need 3 please :)",
      url: "https://www.amazon.com/Charger-Protector-QINLIANF-Extender-Charging/dp/B08Z9X2N7Y/ref=zg_bs_g_electronics_d_sccl_19/136-0415451-4207845?th=1",
      color: "from-zinc-100 to-zinc-200",
    },
    {
      icon: <Spade className="w-6 h-6" />,
      label: "Playing Cards",
      color: "from-gray-950 to-gold-500",
      url: "https://www.amazon.com/BIERDORF-Diamond-Waterproof-Black-Playing/dp/B07LBNDHPH/ref=sr_1_5?crid=VEQPCW3MPJTD&dib=eyJ2IjoiMSJ9.N56_6UUGMapbVgN2WCdwQdENUtQZjA3vfEMU86YYbLndDjjnX1gK-P30kR7tQOJ_LSNAALeKHjkBUQl6TPGa8qWh9qrFsfe0mtFfb6Df50OYjRAOZDB5Q9OJc2B6JVYPNLBUwIOy3-vhfGCnedl-3HYi3VmGxwwJZ-rBI8i7N-u-6HIRcRCbibO8O3MyG8_uRuyHU9GAE4L4eGwdZYw-RkGE98_pYggWywV3caOoVRM7DDe8Tb4gz5LGFx8eSsLDNMsM5KuvLtSJthb8oHvoWyql0fmonydFr4Lh1wAGZUQ.8uUz1c8m8Cyw1QklvEEveOL0yaeaZhkC7_9CjHfBwbo&dib_tag=se&keywords=metal%2Bplaying%2Bcards&qid=1733805490&sprefix=metal%2Bplayin%2Caps%2C122&sr=8-5&th=1",
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      label: "Foosball Table",
      color: "from-green-300 to-green-400",
      url: "https://www.amazon.com/Best-Choice-Products-Foosball-Competition/dp/B01FL1B6X2/ref=sr_1_5?crid=1TJTTVNC6VD4K&dib=eyJ2IjoiMSJ9.ZKH786RQFqGXxolVc5ESTaFf5oAyaBHxwc1OU_Bcs2OOfqhiv5GJIUJP20vELhB93XTMykAoSKKZ4oufi92DhHgUp2DxCLkHce0I1GXMoVAw3cNPnrNBcfLxbX53kUeqkzV7KywYeXZcZIF1h0Lmn1EikHJg8XCJz3Ok0g5xIga2qy1UuA8fdm5zD701xG4EwkxRHlj8odPmnPgf70wXgzPlWkYejNGVtFVJvG2f3caHRo-ww9m2TLomyuEub4Pzl9DIB-9b8mJCjX98q1ZYqpysj9jwZQxdYKmFNhg9lxLl0RvTiqwWJT8tqv74yuna3iHbKsr3W2lOSrAx0I_OGhw2zJzJmBeO2qZFm84ugtfeOAAyNil205mTMyo0aTv5-U0-Ym2cPEVS8GzrLi2XxWz02Ogch5BCOYLIpffJsnCNTximirNYVN9ClO7tojco.wx16mqqgTxN-Pdpfbh7wRqRJ8W9QV3VTNgM8QFarWHc&dib_tag=se&keywords=foosball%2Btable&qid=1733855920&sprefix=foosball%2Btable%2Caps%2C117&sr=8-5&th=1&psc=1",
    },
    {
      icon: <Wheat />,
      label: "Popcorn Machine",
      color: "from-yellow-500 to-yellow-400",
      url: "https://www.amazon.com/DAPP150V2RD04-Popcorn-Measuring-Portion-Popping/dp/B07NWCTXHH/ref=hw_24_h_dagw_ff?pf_rd_p=733ffd0a-3df9-4ac6-9fc5-b7714899083a&pf_rd_r=5WV7BMTMAHQEJSKM20D5&sr=1-17-518f3198-dc43-4a2b-bea2-ea3a7da30f7c&th=1",
    },
    {
      icon: <WheatIcon />,
      label: "Popcorn Kernals (for machine)",
      color: "from-orange-400 to-yellow-500",
      url: "https://www.amazon.com/Orville-Redenbachers-Gourmet-Popcorn-Original/dp/B00819SSGK/ref=sr_1_5?crid=1QWOES6G5FAR3&dib=eyJ2IjoiMSJ9.VO1AUy9jqSgf2zO2HvrbDwe-95CIlkfhyIU5qAYxlnT3jvvWTG7lLQM6tDMyJtPG2vpmpyfI608IvkQHFmXh3fGZpP-KtGwGZcfSyO2dIxORsHyZx7uwaEIgOzUWCD_SL87vWmeLVYcG-jjU9d63HvaYtuX4Eu2P2s5iCvRfU2-ysk0ObDsw-9Ymf3rQiqJQQHEGtXKJcZZrx0jf1AQhMu_RUhdCnATgTiHfures_kN46k89cj5rEiZdX61ycGxHgd7W8tkDel3m_sB6MQo9c52myF5S82qtM-bmqEKs-KO7zHkIuQKO78Z02Hs29WF2elW8iOSOZ84ufL7d6yQRh7Tx7wd0AXih-ZLyGx4uMa0rzo07NoJ0ymlKIeMcRAah6hyjHYLdlW-9N-RtBcnYjELmYdMaMEIaZMKh8wX5o-jaN0XhLFIQS8uu3mBVS8jd.HRfJfaHDTfRrh-v8iO3G3j5Wf3CALvv-BsnYf-iajYo&dib_tag=se&keywords=butter+popcorn+kernels+for+popcorn+machine&qid=1733856598&sprefix=butter+popcorn+kernals%2Caps%2C111&sr=8-5",
    },
    {
      icon: <Bot />,
      label: "Robotics Set",
      color: "from-gray-600 via-red-500 to-gray-700",
      url: "https://www.amazon.com/Tinkering-Labs-Engineering-Educational-Electronics/dp/B098RCVR5X",
    },
  ];

  var [cookieOpacity, biteCookie] = useState(100);
  var [milkOpacity, drinkMilk] = useState(100);
  var [play] = useSound("bite.mp3");
  var [milk] = useSound("drink.mp3");
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <PulsingGradient variant="christmas" />
      <div className="absolute inset-0">
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
              Christmas Wishlist
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12">
            Hi Santa! Heres my christmas wishlist, and some cookies and milk for
            you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {christmasButtons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Button Background with Gradient */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-r ${button.color}
                  rounded-lg opacity-75 group-hover:opacity-100 transition-opacity
                  blur-[2px] group-hover:blur-[1px]
                `}
                />

                {/* Button Content */}
                <div
                  className={`
                  relative p-6 rounded-lg border border-white/10
                  backdrop-blur-sm bg-black/20
                  transform transition-transform group-hover:-translate-y-2
                  flex items-center justify-center gap-4
                  group-active:-translate-y-1
                `}
                >
                  <span className="text-white group-hover:scale-110 transition-transform h-6 w-6">
                    {button.icon}
                  </span>
                  <span className="text-xl font-semibold text-white">
                    {button.label}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-4">
            <Snowflake className="w-8 h-8 text-blue-400 animate-pulse" />
            <TreePine className="w-8 h-8 text-green-500 animate-pulse delay-300" />
            <Gift className="w-8 h-8 text-red-500 animate-pulse delay-500" />
            <Bell className="w-8 h-8 text-amber-400 animate-pulse delay-700" />
          </div>

          <div className=" flex row items-center justify-center pt-20">
            <img
              src="/cookie.png"
              style={{
                opacity: `${cookieOpacity}%`,
                cursor: cookieOpacity > 0 ? "pointer" : "default",
              }}
              onClick={() => {
                cookieOpacity > 0 && play();
                biteCookie(cookieOpacity - 10);
              }}
            />
            <img
              src="/milk.png"
              style={{
                opacity: `${milkOpacity}%`,
                cursor: milkOpacity > 0 ? "pointer" : "default",
                height: 250,
              }}
              onClick={() => {
                milkOpacity > 0 && milk();
                drinkMilk(milkOpacity - 10);
              }}
            />
            <p className="absolute" style={{ zIndex: -1, marginRight: 215 }}>
              Thanks for accepting<br></br> cookies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasPage;
