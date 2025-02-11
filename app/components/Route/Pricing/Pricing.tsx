"use client"

import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from "@heroui/react";
import { Schedule } from "../Schedule/Schedule";
import { SubHeading } from "@/app/constants/commonStyle";

const priceOptions = [
    {
        category: "グループレッスン",
        options: [
            {
                title: "ドロップイン",
                price: "¥4,500",
                description: "1回のみのレッスン",
                chip: "気軽に始めたい方におすすめ！"
            },
            {
                title: "月2回コース",
                price: "¥8,600",
                description: "¥4,300/1回",
                chip: "忙しい方におすすめ！"
            },
            {
                title: "月4回コース",
                price: "¥16,000",
                description: "4回のレッスン",
                chip: "集中して通いたい方におすすめ！"
            },
        ],
    },
    {
        category: "プライベートレッスン",
        options: [
            {
                title: "初回のみ",
                price: "¥4,980",
                description: "初回のみのレッスン",
                chip: "初回限定！"
            },
            {
                title: "ドロップイン",
                price: "¥8,000",
                description: "都度払い",
                chip: "気軽に始めたい方におすすめ！"
            },
            {
                title: "5回券",
                price: "¥37,000",
                description: "¥7,400/1回、有効期限3ヶ月",
                chip: "集中して通いたい方におすすめ！"
            },
        ],
    }
];

export const Pricing = () => {
    return (
        <div className="relative min-h-screen" id="pricing">
            <div className="container mx-auto">
                <h2 className={SubHeading}>
                    料金/スケジュール
                </h2>
            </div>

            <div className="container py-6 md:py-[56px] flex w-full flex-col items-center">
                <Tabs aria-label="Pricing options" items={priceOptions}
                    defaultSelectedKey={priceOptions[0].category}
                    variant="solid"
                    classNames={{

                        tabList: "flex justify-center ",
                        tabContent: "",
                        cursor: "cursor-pointer",
                        panel: ""
                    }}
                >
                    {(item) => (
                        <Tab key={item.category} title={item.category}
                        >
                            <div className="grid grod-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
                                {item.options.map((option, index) => (
                                    <Card key={index}
                                        className="bg-white p-4 md:p-10 w-full"
                                    >
                                        <CardHeader>
                                            <Chip
                                                classNames={{
                                                    base: "bg-gradient-to-br from-[#EB6D8E] to-[#FFB3C6] border-small border-white/50 shadow-[#EB6D8E]/30",
                                                    content: "drop-shadow shadow-black text-white",
                                                }}
                                                variant="shadow"
                                            >
                                                {option.chip}
                                            </Chip>
                                        </CardHeader>
                                        <CardBody>
                                            <h3 className="text-6 md:text-[32px] font-medium mb-3">{option.title}</h3>
                                            <p className="text-sm font-light mb-4 md:mb-6">{option.description}

                                            </p>
                                            <p className="text-[36px] md:text-[48px] font-bold">{option.price}</p>

                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </Tab>
                    )}

                </Tabs>
            </div>
            <Schedule />
        </div >
    )
};
