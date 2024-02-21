import AccordionItem from "./AccordionItem.tsx";
import IQListProps from "../interfaces/IQListProps.ts";
import IQuestions from "../interfaces/IQuestions.ts";

export default function QAList({data, onDeleteItem}:IQListProps) {
    const onDelete = (id:number)=>{
        let localData = JSON.parse(String(localStorage.getItem("questions")));
        if (localData===null)
            localData = []
        if (localData.length>0) {
            const index = localData.findIndex((e: IQuestions)=>e.id==id);
            localData.splice(index,1);
            onDeleteItem(localData);
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-around">
                {data.length?
                    data.map(e => (
                        <AccordionItem key={e.id} title={e.question} children={
                            <div className="w-full flex flex-row justify-between">
                                <p>{e.answer}</p>
                                <button
                                    onClick={()=>onDelete(e.id)}
                                    className="p-2 border border-sky-500 bg-sky-500 hover:bg-sky-600 text-white rounded">مسح
                                </button>
                            </div>
                        }/>
                    ))
                    :<p className="p-5">لا يوجد أسئلة و إجابات</p>

                }
            </div>
        </>
    );
}