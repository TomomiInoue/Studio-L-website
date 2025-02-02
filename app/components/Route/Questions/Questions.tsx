"use client";

import { Accordion, AccordionItem } from "@heroui/react";

const questionItems = [
    {
        title: "初めてでも参加できますか？",
        content: [
            "初めての方でも参加いただけます。初めての方には、基本的なピラティスのポーズや呼吸法から丁寧に指導いたします。",
        ],
    },
    {
        title: "どのくらいの頻度で受けるのがよいですか？",
        content: [
            "始めたばかりの方であれば1週間に1回の頻度でレッスンを受けることをお勧めしています。",
            "頻度が高いと効果実感までの期間を縮められますが、ピラティスは継続するからこそ、効果を保てるエクササイズです。無理無く、楽しく継続できる頻度をお勧めします。",
        ]
    },
    {
        title: "どのような服装でレッスンを受ければよいですか？",
        content: [
            "ピラティスのエクササイズでは体の関節を曲げ伸ばしたり、体を捻ったりするので、動きやすい服装をお勧めしています。身体にフィットしたヨガウェアやピラティスウェアがお勧めですが、伸縮性のあるTシャツやボトムスでも大丈夫です。",
            "滑り止め靴下を履いての参加をお勧めしておりますが、普通の靴下でも問題ありません。",
        ],
    },
    {
        title: "レッスンの前後に食事はどのようにすればよいですか？",
        content: [
            "食事は軽めにしてください。レッスンの直後に食事をすることは避けてください。レッスンの前に食事をする場合は、レッスンの2時間前までに済ませるようにしてください。",
            "レッスンの後は、水分補給をしっかりと行い、お腹が空いた場合は軽く食事を摂るようにしてください。",
        ]
    },
    {
        title: "駐車場はありますか？",
        content: [
            "4台分の駐車スペースがございます。駐車スペースが満車の場合は、近隣のコインパーキングをご利用ください。",
        ]
    },
    {
        title: "キャンセルポリシーはありますか？",
        content: [
            "レッスンのキャンセルは前日までにお願いいたします。当日のキャンセルはキャンセル料が発生いたします。",
        ],
    },

];


export const Questions = () => {
    return (
        <div className="relative min-h-screen" id="questions">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold">
                    よくある質問
                </h2>
                <div className="max-w-[800px] mx-auto">
                    <Accordion variant="splitted" className="py-[56px]"
                        itemClasses={{
                            title: "font-smeibold"
                        }}
                    >
                        {questionItems.map((item, index) => (
                            <AccordionItem key={index} aria-label={item.title} title={item.title}>
                                <div>
                                    {item.content.map((content, index) => (
                                        <div key={index} className="mb-4">{content}</div>
                                    ))}
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}