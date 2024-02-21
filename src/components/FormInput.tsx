import IFormInputProps from "../interfaces/IFormInputProps.ts";
import {useState} from "react";

export default function FormInput({onAdd, notify}:IFormInputProps) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const handleOnSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if (question===''|| answer==='')
        {
            notify("برجاء إكمال البيانات","error");
            return;
        }
        let localData = JSON.parse(String(localStorage.getItem("questions")))
        if (localData===null)
            localData = [];
        localData.push({
            id:Math.random()*1000000,
            question,
            answer
        });
        localStorage.setItem("questions",JSON.stringify(localData));
        setQuestion('');
        setAnswer('');
        onAdd();
    }
    return <>
        <div className="flex flex-row justify-center">
            <form onSubmit={handleOnSubmit} method="POST" className="w-full flex flex-row flex-wrap justify-center p-3 gap-4">
                <input value={question} onChange={e=> setQuestion(e.target.value)} className="p-1 w-full md:w-1/3 border border-gray-700 rounded" name="question" type="text" placeholder="ادخل السؤال"/>
                <input value={answer} onChange={e => setAnswer(e.target.value)} className="p-1 w-full md:w-1/3 border border-gray-700 rounded" name="answer" type="text" placeholder="ادخل الأجابة"/>
                <button className="p-2 mx-auto text-white border border-sky-500 bg-sky-500 rounded hover:bg-sky-600" type="submit">إضافة</button>
            </form>
        </div>
    </>
}