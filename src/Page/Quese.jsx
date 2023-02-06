import QuestionList from "../Components/questionList/QuestionList";
import Button from "../Components/button/Button";
import Card from "../UI/Card";

const Quese = () => {
  return (
    <Card>
      <div>
        <Button content="Cancel" classes="btn-cancel" />
        <QuestionList />
      </div>
    </Card>
  );
};

export default Quese;
