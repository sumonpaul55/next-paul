import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/react";


export default function Skeletons({ childBox, parentClasses, childClass = "h-5" }: { childBox: number, parentClasses: string, childClass: string }) {
    const childsBox = Array(childBox).fill(childBox);
    return (
        <Card className={`p-2 rounded-none shadow-none ${parentClasses}`}>
            {
                childsBox.map((_, index) => (
                    <Skeleton key={index} className={`h-full mt-2 bg-gray-400 ${childClass}`}>
                    </Skeleton>))
            }
        </Card>
    );
}