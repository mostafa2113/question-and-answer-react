import FormInput from "./components/FormInput.tsx";
import QAList from "./components/QAList.tsx";
import {useState} from "react";
import IQuestions from "./interfaces/IQuestions.ts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    const notify = (msg:string, type:string) => {
        if (type==="success"){
            toast.success(msg);
        } else {
            toast.error(msg);
        }
    };
    let localData = JSON.parse(String(localStorage.getItem("questions")));
    if (localData===null)
        localData = []
    const [data, setData] = useState<IQuestions[]>(localData);
    const addItem = ()=>{
        setData(JSON.parse(String(localStorage.getItem("questions"))));
        notify("تم الأضافة","success");
    }
    const onDeleteAll = ()=>{
        localStorage.removeItem("questions");
        setData([]);
        notify("تم الحذف الكل", "error");
    }
    const onDelete = (newArr:IQuestions[])=>{
        localStorage.setItem("questions", JSON.stringify(newArr));
        setData(newArr);
        notify("تم حذف العنصر","error");
    }
  return (
      <div>
          <div className="container mx-auto p-5">
              <div className="flex flex-row flex-wrap justify-center">
                  <div className="w-full md:w-1/3 my-3">
                      <h1 className="text-center text-3xl">
                          اسئلة وأجوبة شائعة
                      </h1>
                  </div>
                  <div className="w-full md:w-2/3">
                      <FormInput onAdd={addItem} notify={notify}/>
                      <QAList data={data} onDeleteItem={onDelete}/>
                      {data.length?<button
                          onClick={onDeleteAll}
                          className="w-full text-white border border-sky-500 hover:bg-sky-600 bg-sky-500 rounded">مسح
                          الكل</button>:null
                      }
                  </div>
              </div>
          </div>
          <ToastContainer/>
      </div>
)
}


