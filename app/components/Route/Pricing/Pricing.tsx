"use client"

import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from "@heroui/react";

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
                price: "¥18,000",
                description: "8回のレッスン",
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
                chip: "初回限定のお得なチケット！"
            },
            {
                title: "ドロップイン",
                price: "¥8,000",
                description: "１回ごとの購入",
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
            {/* Banner Section */}
            <div className="relative bg-cover bg-center h-96 w-screen" style={{ backgroundImage: "url('/images/reformer.jpg')" }}>
                {/* Absolute container for the text */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <div className="container mx-auto">
                        <h2 className="text-5xl font-bold text-left bg-white py-2 px-3 rounded-md bg-opacity-80 max-w-[512px]">
                            料金/スケジュール
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container py-[56px] flex w-full flex-col items-center">
                <Tabs aria-label="Pricing options" items={priceOptions}
                    defaultSelectedKey={priceOptions[0].category}
                    variant="solid"
                    classNames={{
                        base: "",
                        tabList: "flex justify-center",
                        tabContent: "active:text-pink",
                        cursor: "cursor-pointer",
                        panel: "p-4"
                    }}
                >
                    {(item) => (
                        <Tab key={item.category} title={item.category}
                        >
                            <div className="grid grid-cols-3 gap-6 mt-6">
                                {item.options.map((option, index) => (
                                    <Card key={index} className="bg-white p-10 rounded-3xl shadow-md">
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
                                            <h3 className="text-[32px] font-medium mb-3">{option.title}</h3>
                                            <p className="text-sm font-light mb-6">{option.description}

                                            </p>
                                            <p className="text-[48px] font-bold">{option.price}</p>

                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </Tab>
                    )}

                </Tabs>
            </div>
        </div >
    )
};
