import { FormList } from "./FormList"
import { FormProvider } from "./FormProvider";
import { TodosList } from "./TodosList"

export const HomeWorkList = () => {

    return (
        <FormProvider>
            <h1>Make your wishes come true</h1>
            <p> Let your imagination flies, put your impossible wishes here
                and you will see you are gonna make it.
            </p>
            <div className="list-form">
                <TodosList />
                <FormList />
            </div>
        </FormProvider>



    )
}
