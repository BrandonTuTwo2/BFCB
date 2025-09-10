import type { PropsWithChildren } from "react";

export interface Props {
    name: string,
    timestamp: string, //string temporarily cause im lazy, itll be a timestamp when I get to it
    text: string,
    key: string,
}

export default function TextMsg(props: PropsWithChildren<Props>) {
    return (
        <div className="flex items-start gap-2.5" key={props.key}>
            <div className="flex flex-col gap-1 w-full max-w-[320px]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{props.name}</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{props.timestamp}</span>
                </div>
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-orange-100 rounded-e-xl rounded-es-xl">
                    <p className="text-sm font-normal text-stone-900">{props.text}</p>
                </div>
            </div>
        </div>
    );

}