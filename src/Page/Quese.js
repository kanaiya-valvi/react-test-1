import QuestionList from "../Components/QuestionList";
import CancelButton from "../Components/CancelButton";
import Card from "../UI/Card";

const Quese = () => {
  return (
    <Card>
      <div>
        <CancelButton />
        <QuestionList />
      </div>
    </Card>
  );
};

export default Quese;
