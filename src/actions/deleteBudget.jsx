import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";
import { redirect } from "react-router-dom";

export function deleteBudget({ param }) {
  try {
    deleteItem({ key: "budgets", id: param.id });

    const assExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: param.id,
    });

    assExpenses.forEach((expense) => {
      deleteItem({ key: "expenses", id: expense.id });
    });

    toast.success("Budget deleted!");
  } catch (e) {
    throw new Error("There was a problem deleting your budget");
  }

  return redirect("/");
}
