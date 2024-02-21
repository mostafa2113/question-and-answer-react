import IQuestions from "./IQuestions.ts";

export default interface IQListProps {
    data: IQuestions[];
    onDeleteItem: (newArr: IQuestions[])=> void;
}